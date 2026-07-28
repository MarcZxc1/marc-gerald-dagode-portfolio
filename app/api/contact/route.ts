import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  subject: z.string().trim().min(2).max(120),
  message: z.string().trim().min(10).max(3000),
  website: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  const parsed = contactSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please check the form and try again." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient =
    process.env.CONTACT_EMAIL ?? "dagodemarcgeraldarante@gmail.com";
  const sender =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      {
        message:
          "Email delivery is not configured yet. Please use the direct email link.",
      },
      { status: 503 },
    );
  }

  const { email, message, name, subject } = parsed.data;
  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        text: `New portfolio message\n\nFrom: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!resendResponse.ok) {
      throw new Error("Email provider rejected the request.");
    }
  } catch {
    return NextResponse.json(
      { message: "The message could not be sent. Please email Marc directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Thanks—your message is on its way.",
  });
}

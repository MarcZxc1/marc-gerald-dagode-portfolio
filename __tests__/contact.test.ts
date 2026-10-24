import { afterEach, beforeEach, describe, expect, it, spyOn } from "bun:test";
import { POST } from "../app/api/contact/route";

const environmentKeys = [
  "RESEND_API_KEY",
  "CONTACT_EMAIL",
  "CONTACT_FROM_EMAIL",
] as const;
const originalFetch = globalThis.fetch;
const savedEnvironment: Partial<
  Record<(typeof environmentKeys)[number], string>
> = {};
let calls: Array<{
  input: Parameters<typeof fetch>[0];
  init: Parameters<typeof fetch>[1];
}>;
let providerResponse: () => Promise<Response>;
let restoreLogger: () => void;

const validMessage = {
  name: "  Portfolio Visitor  ",
  email: "  visitor@example.com  ",
  subject: "  Project inquiry  ",
  message: "  I would like to discuss a software project.  ",
  website: "",
};

function request(body: unknown) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

beforeEach(() => {
  for (const key of environmentKeys) savedEnvironment[key] = process.env[key];
  process.env.RESEND_API_KEY = "test-only-provider-key";
  process.env.CONTACT_EMAIL = "recipient@example.com";
  process.env.CONTACT_FROM_EMAIL = "Portfolio <sender@example.com>";
  calls = [];
  providerResponse = async () =>
    new Response(JSON.stringify({ id: "test-message" }), { status: 200 });
  globalThis.fetch = (async (input, init) => {
    calls.push({ input, init });
    return providerResponse();
  }) as typeof fetch;
  const logger = spyOn(console, "error").mockImplementation(() => {});
  restoreLogger = () => logger.mockRestore();
});

afterEach(() => {
  globalThis.fetch = originalFetch;
  restoreLogger();
  for (const key of environmentKeys) {
    if (savedEnvironment[key] === undefined) delete process.env[key];
    else process.env[key] = savedEnvironment[key];
  }
});

describe("POST /api/contact", () => {
  it("rejects malformed JSON without contacting the email provider", async () => {
    const response = await POST(
      new Request("http://localhost/api/contact", {
        method: "POST",
        body: "{",
      }),
    );
    expect(response.status).toBe(400);
    expect(calls).toHaveLength(0);
  });

  it.each([
    ["missing fields", {}],
    ["invalid email", { ...validMessage, email: "not-an-email" }],
    ["short message", { ...validMessage, message: "hi" }],
    ["oversized message", { ...validMessage, message: "x".repeat(3001) }],
    [
      "filled honeypot",
      { ...validMessage, website: "https://spam.example.com" },
    ],
  ])("rejects %s without contacting the provider", async (_label, body) => {
    const response = await POST(request(body));
    expect(response.status).toBe(400);
    expect(calls).toHaveLength(0);
  });

  it("offers direct-email fallback when delivery is not configured", async () => {
    delete process.env.RESEND_API_KEY;
    const response = await POST(request(validMessage));
    expect(response.status).toBe(503);
    expect((await response.json()).message).toContain("direct email");
    expect(calls).toHaveLength(0);
  });

  it("sends a validated, trimmed message to the configured recipient", async () => {
    const response = await POST(request(validMessage));
    expect(response.status).toBe(200);
    expect((await response.json()).message).toContain("on its way");
    expect(calls).toHaveLength(1);
    expect(calls[0].input).toBe("https://api.resend.com/emails");
    expect(calls[0].init?.method).toBe("POST");
    expect(new Headers(calls[0].init?.headers).get("Authorization")).toBe(
      "Bearer test-only-provider-key",
    );
    const payload = JSON.parse(String(calls[0].init?.body));
    expect(payload.to).toEqual(["recipient@example.com"]);
    expect(payload.from).toBe("Portfolio <sender@example.com>");
    expect(payload.reply_to).toBe("visitor@example.com");
    expect(payload.subject).toBe("[Portfolio] Project inquiry");
    expect(payload.text).toContain(
      "From: Portfolio Visitor <visitor@example.com>",
    );
    expect(payload.text).toEndWith(
      "I would like to discuss a software project.",
    );
  });

  it("returns a useful failure without exposing provider error details", async () => {
    providerResponse = async () =>
      new Response("private provider diagnostic", { status: 429 });
    const response = await POST(request(validMessage));
    expect(response.status).toBe(502);
    const body = await response.text();
    expect(body).toContain("email Marc directly");
    expect(body).not.toContain("private provider diagnostic");
  });

  it("handles a network failure without exposing the exception", async () => {
    providerResponse = async () => {
      throw new Error("private network diagnostic");
    };
    const response = await POST(request(validMessage));
    expect(response.status).toBe(502);
    expect(await response.text()).not.toContain("private network diagnostic");
    expect(calls).toHaveLength(1);
  });
});

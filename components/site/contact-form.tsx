"use client";

import { useState } from "react";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = (await response.json()) as { message?: string };

      if (response.ok) {
        setStatus("success");
        setMessage(result.message ?? "Message sent.");
        form.reset();
        return;
      }

      setStatus("error");
      setMessage(
        result.message ?? "Something went wrong. Please email Marc directly.",
      );
    } catch {
      setStatus("error");
      setMessage("The network is unavailable. Please email Marc directly.");
    }
  }

  return (
    <form className="contact-form" data-slot="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input autoComplete="name" maxLength={80} name="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Email</span>
          <input autoComplete="email" maxLength={160} name="email" placeholder="you@example.com" required type="email" />
        </label>
      </div>
      <label>
        <span>Subject</span>
        <input maxLength={120} name="subject" placeholder="What would you like to build?" required />
      </label>
      <label>
        <span>Message</span>
        <textarea maxLength={3000} name="message" placeholder="A few details about the project, role, or idea…" required rows={7} />
      </label>
      <label aria-hidden="true" className="form-honeypot">
        Company website
        <input autoComplete="off" name="website" tabIndex={-1} />
      </label>
      <div className="contact-form__footer">
        <button className="button button--primary" disabled={status === "submitting"} type="submit">
          {status === "submitting" ? "Sending…" : "Send message"}
          {status === "success" ? <CheckIcon /> : <ArrowRightIcon />}
        </button>
        <p aria-live="polite" className={`form-status form-status--${status}`}>
          {message}
        </p>
      </div>
    </form>
  );
}

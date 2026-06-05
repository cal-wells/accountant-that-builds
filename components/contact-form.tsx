"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "w-full rounded-lg border border-border bg-surface px-4 py-3 text-ink outline-none transition-colors focus:border-primary";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    // Client-side validation — blocks the POST on bad input.
    if (!name.trim() || !message.trim()) {
      setError("Please fill in your name and a message.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Honeypot: a real person never fills this hidden field. Drop bot submissions silently.
    if (honeypot) {
      setStatus("success");
      return;
    }

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
    if (!formId) {
      setError(
        "The contact form isn't configured yet. Please email me directly in the meantime.",
      );
      return;
    }

    setStatus("submitting");
    try {
      const body = new FormData();
      body.append("name", name);
      body.append("email", email);
      body.append("message", message);

      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setError(
        "Something went wrong sending your message. Please try again, or email me directly.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-card border border-primary/30 bg-primary/5 p-6 text-ink"
      >
        <p className="font-heading text-lg font-semibold">
          Thanks — your message is on its way.
        </p>
        <p className="mt-2 text-muted">
          I&apos;ll be in touch soon. In the meantime, feel free to connect on
          LinkedIn.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot: visually hidden, ignored by humans, filled by bots. */}
      <div aria-hidden className="hidden">
        <label htmlFor="company">Company (leave blank)</label>
        <input
          id="company"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${inputClass} resize-y`}
        />
      </div>

      {error && (
        <p role="alert" className="text-sm font-medium text-secondary">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputBase =
  "w-full rounded-lg border bg-surface px-4 py-3 text-ink outline-none transition-colors";

function inputClass(hasError: boolean) {
  return `${inputBase} ${hasError ? "border-danger" : "border-border focus:border-primary"}`;
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  // Clear a field's error as the user corrects it.
  function clearError(field: keyof FieldErrors) {
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Per-field validation.
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email)) next.email = "That email doesn't look right.";
    if (!message.trim()) next.message = "Please enter a message.";

    if (next.name || next.email || next.message) {
      setErrors(next);
      return;
    }

    // Honeypot: a real person never fills this hidden field. Drop bots silently.
    if (honeypot) {
      setStatus("success");
      return;
    }

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
    if (!formId) {
      setErrors({
        form: "The contact form isn't configured yet. Please email me directly in the meantime.",
      });
      return;
    }

    setStatus("submitting");
    setErrors({});
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
      setErrors({
        form: "Something went wrong sending your message. Please try again, or email me directly.",
      });
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-card border border-primary/30 bg-primary/5 p-6 text-ink"
      >
        <p className="font-heading text-lg font-semibold">
          Thanks - your message is on its way.
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
          onChange={(event) => {
            setName(event.target.value);
            clearError("name");
          }}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClass(!!errors.name)}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1.5 text-sm text-danger">
            {errors.name}
          </p>
        )}
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
          onChange={(event) => {
            setEmail(event.target.value);
            clearError("email");
          }}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass(!!errors.email)}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1.5 text-sm text-danger">
            {errors.email}
          </p>
        )}
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
          onChange={(event) => {
            setMessage(event.target.value);
            clearError("message");
          }}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClass(!!errors.message)} resize-y`}
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="mt-1.5 text-sm text-danger"
          >
            {errors.message}
          </p>
        )}
      </div>

      {errors.form && (
        <p role="alert" className="text-sm font-medium text-danger">
          {errors.form}
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

import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16">
      <Reveal>
        <h1 className="text-4xl font-bold text-ink sm:text-5xl">Get in touch</h1>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="mt-4 text-lg text-muted">
          Hiring, a question, or just curious about something here? Drop me a
          message and I&apos;ll get back to you.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-primary transition-colors hover:text-primary-dark"
          >
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary transition-colors hover:text-primary-dark"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10">
          <ContactForm />
        </div>
      </Reveal>
    </div>
  );
}

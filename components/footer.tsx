import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {year} {siteConfig.name}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-ink"
          >
            Email
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <Link href="/contact" className="transition-colors hover:text-ink">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

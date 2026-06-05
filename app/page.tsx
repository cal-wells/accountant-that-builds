import { siteConfig } from "@/lib/site";

// Placeholder home page — U1 verifies the design system renders.
// U3 replaces this with the real hero + about content.
export default function Home() {
  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col justify-center px-6 py-24">
      <p className="font-heading text-sm font-medium uppercase tracking-widest text-primary">
        {siteConfig.role}
      </p>
      <h1 className="mt-4 text-5xl font-bold text-ink sm:text-6xl">
        {siteConfig.name}
      </h1>
      <p className="mt-4 text-2xl font-medium text-muted">
        {siteConfig.tagline}
      </p>
      <div className="mt-10 rounded-card bg-surface p-6 shadow-soft">
        <p className="text-muted">
          Design system check — fintech palette, Space Grotesk headings, Inter
          body. The real site lands in the next units.
        </p>
      </div>
    </main>
  );
}

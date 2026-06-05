import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";

/*
 * Home — hero + about.
 * TODO(owner): personalise the intro and about copy below. The structure and
 * tone are set; swap in your own words and real interests.
 */
export default function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6">
      {/* Hero */}
      <section className="flex min-h-[70vh] flex-col justify-center py-16">
        <Reveal>
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            {siteConfig.role} · ICAS Chartered Accountant
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 text-5xl font-bold leading-[1.05] text-ink sm:text-7xl">
            {siteConfig.name}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-2xl font-medium text-muted">
            {siteConfig.tagline}.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I&apos;m a finance professional who builds. I use AI and code to cut
            the busywork out of reporting, forecasting, and analysis — turning
            spreadsheets that take days into tools that run in seconds.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/cv"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary-dark"
            >
              View my CV
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/20"
            >
              See my projects
            </Link>
          </div>
        </Reveal>
      </section>

      {/* About */}
      <section className="border-t border-border py-16">
        <Reveal>
          <h2 className="text-3xl font-bold text-ink">A bit about me</h2>
        </Reveal>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
          <Reveal delay={0.05}>
            <p>
              I&apos;m an ICAS Chartered Accountant and First-Class Economics
              graduate who started out in Big 4 assurance at EY before moving
              into high-growth FP&amp;A. Today I lead Group FP&amp;A — owning
              budgets, building the long-range model, and business-partnering
              with department heads to turn numbers into commercial decisions.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              What sets me apart is how I work: I bring traditional financial
              rigour together with Python, data analysis, and AI-driven
              automation — implementing Datarails, scripting away manual
              reporting, and using tools like Claude to get to answers faster.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Outside of work I&apos;m usually running or travelling — I&apos;ve
              backpacked across Central and South America, Australia, and New
              Zealand — and I like following where AI and Bitcoin are heading.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

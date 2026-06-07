import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";

/*
 * Home - hero + about.
 */
export default function Home() {
  // Accent the final word of the tagline ("builds") as a signature touch.
  const taglineWords = siteConfig.tagline.split(" ");
  const taglineLead = taglineWords.slice(0, -1).join(" ");
  const taglineLast = taglineWords[taglineWords.length - 1];

  return (
    <div className="w-full">
      {/* Hero - full-bleed: the colour wash and content span the page */}
      <section className="relative isolate overflow-hidden">
        {/* Soft ambient colour wash - gives the hero its own zone, no clutter */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-16 h-[32rem] w-[32rem] rounded-full bg-primary/15 blur-[120px]" />
          <div className="absolute -bottom-24 -left-32 h-[26rem] w-[26rem] rounded-full bg-secondary/10 blur-[120px]" />
        </div>

        <div className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-6 py-16">
          <div className="flex flex-col gap-12 sm:flex-row-reverse sm:items-center sm:justify-between">
            {/* Photo */}
            <Reveal className="shrink-0 self-center sm:self-auto">
              <Image
                src="/headshot.jpg"
                alt={siteConfig.name}
                width={264}
                height={264}
                priority
                className="h-48 w-48 rounded-full object-cover shadow-lift ring-4 ring-surface sm:h-64 sm:w-64"
              />
            </Reveal>

            {/* Intro */}
            <div className="flex-1">
              <Reveal>
                <p className="flex items-center gap-3 font-heading text-sm font-semibold uppercase tracking-widest text-primary">
                  <span aria-hidden className="h-px w-8 bg-primary" />
                  {siteConfig.role} · ICAS Chartered Accountant
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-4 text-balance text-5xl font-bold leading-[1.05] text-ink sm:text-7xl">
                  {siteConfig.name}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-2xl font-medium text-muted">
                  {taglineLead}{" "}
                  <span className="font-semibold text-primary">
                    {taglineLast}
                  </span>
                  .
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                  I&apos;m a finance professional who builds. I use AI and code
                  to cut the busywork out of reporting, forecasting, and
                  analysis - turning spreadsheets that take days into tools that
                  run in seconds.
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
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl border-t border-border px-6 py-16">
        <Reveal>
          <h2 className="text-3xl font-bold text-ink">A bit about me</h2>
        </Reveal>
        <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
          <Reveal delay={0.05}>
            <p>
              I&apos;m an ICAS Chartered Accountant and First-Class Economics
              graduate who started out in Big 4 assurance at EY before moving
              into high-growth FP&amp;A. Today I lead Group FP&amp;A - owning
              budgets, building the long-range model, and business-partnering
              with department heads to turn numbers into commercial decisions.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              What sets me apart is how I work: I bring traditional financial
              rigour together with Python, data analysis, and AI-driven
              automation - implementing Datarails, scripting away manual
              reporting, and using tools like Claude to get to answers faster.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Outside of work I&apos;m usually running or travelling - I&apos;ve
              backpacked across Central and South America, Australia, and New
              Zealand - and I like following where AI and Bitcoin are heading.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

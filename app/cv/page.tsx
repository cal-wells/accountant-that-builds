import type { Metadata } from "next";
import Image from "next/image";
import { roles, qualifications, skillGroups } from "@/data/cv";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "CV",
  description: `Experience, qualifications, and skills of ${siteConfig.name}.`,
};

export default function CvPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <Reveal>
        <h1 className="text-4xl font-bold text-ink sm:text-5xl">CV</h1>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          {siteConfig.role} and qualified accountant - with a habit of
          automating the slow parts of finance.
        </p>
      </Reveal>

      {/* Work history - vertical timeline */}
      <section className="mt-14">
        <Reveal>
          <h2 className="text-2xl font-bold text-ink">Work history</h2>
        </Reveal>
        <ol className="mt-8 space-y-10 border-l-2 border-border pl-8">
          {roles.map((role, index) => (
            <Reveal key={`${role.title}-${role.period}`} delay={index * 0.05}>
              <li className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-background bg-primary"
                />
                <div className="flex items-start gap-4">
                  {role.logo ? (
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-surface p-1.5 shadow-soft">
                      <Image
                        src={role.logo}
                        alt={`${role.company} logo`}
                        width={40}
                        height={40}
                        className="h-full w-full object-contain"
                      />
                    </span>
                  ) : null}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="text-xl font-bold text-ink">
                        {role.title}
                      </h3>
                      <span className="text-sm font-medium text-muted">
                        {role.period}
                      </span>
                    </div>
                    <p className="mt-0.5 font-medium text-primary">
                      {role.company}
                    </p>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted">
                      {role.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Skills - framed in finance-native outcomes */}
      <section className="mt-16 border-t border-border pt-12">
        <Reveal>
          <h2 className="text-2xl font-bold text-ink">
            {"AI & coding assisted deliverables:"}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.heading} delay={index * 0.05}>
              <div className="h-full rounded-card border border-border bg-surface p-6 shadow-soft">
                <h3 className="text-lg font-bold text-ink">{group.heading}</h3>
                <p className="mt-2 text-muted">{group.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Qualifications */}
      <section className="mt-16 border-t border-border pt-12">
        <Reveal>
          <h2 className="text-2xl font-bold text-ink">Qualifications</h2>
        </Reveal>
        <ul className="mt-8 space-y-4">
          {qualifications.map((qualification, index) => (
            <Reveal key={qualification.name} delay={index * 0.05}>
              <li className="rounded-card border border-border bg-surface p-5 shadow-soft">
                <p className="font-semibold text-ink">{qualification.name}</p>
                <p className="mt-1 text-sm text-muted">{qualification.detail}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>
    </div>
  );
}

/**
 * Project showcase data. Add new projects by appending to this array — the
 * Projects page maps over it, so no layout changes are needed (R10).
 * To surface a live demo later, set `demoUrl` (or `detailUrl`) on a project (R9).
 *
 * TODO(owner): refine the descriptions to match how each project actually turns out.
 */

export type ProjectStatus = "In Progress" | "Planned" | "Live";

export type Project = {
  slug: string;
  name: string;
  /** What it does, in one or two sentences. */
  what: string;
  /** Why it's worth building — the finance/value angle. */
  why: string;
  status: ProjectStatus;
  /** Optional live demo link. When absent, no demo link is shown. */
  demoUrl?: string;
  /** Optional further-detail link (write-up, repo, etc.). */
  detailUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "training-performance-tracker",
    name: "AI Training & Performance Tracker",
    what: "A personal tool that logs training sessions and uses AI to spot trends, flag plateaus, and suggest what to focus on next.",
    why: "The same pattern I apply to financial performance — measure, analyse, act — pointed at my own training data. Proof that the analytical toolkit travels.",
    status: "In Progress",
  },
  {
    slug: "knowledge-repository",
    name: "AI-Powered Knowledge Repository",
    what: "An Obsidian vault wired up with Claude to capture, summarise, and connect what I'm reading across AI, Bitcoin, and finance.",
    why: "Staying genuinely current in fast-moving fields is hard. This turns scattered reading into a searchable, compounding knowledge base.",
    status: "In Progress",
  },
  {
    slug: "bookkeeping-automation",
    name: "Small-Business Bookkeeping Assistant",
    what: "AI tooling to streamline invoicing and payroll for a family-run small business, cutting the manual data entry a bookkeeper does each month.",
    why: "A real-world test of AI on everyday finance admin — measurable time saved, fewer errors, and a clear before-and-after a finance leader recognises.",
    status: "Planned",
  },
];

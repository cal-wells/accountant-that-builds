/**
 * Project showcase data. Add new projects by appending to this array — the
 * Projects page maps over it, so no layout changes are needed (R10).
 * To surface a live demo later, set `demoUrl` (or `detailUrl`) on a project (R9).
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
    slug: "portfolio-site",
    name: "This Portfolio Site",
    what: "The site you're looking at now — designed and built from scratch with Next.js, TypeScript, and Claude Code, then deployed to Vercel.",
    why: "The proof is the product. Rather than claiming I can build with modern tools, I built the thing you're reading on — start to finish.",
    status: "Live",
    demoUrl: "https://accountant-that-builds.vercel.app/",
  },
  {
    slug: "running-performance-tracker",
    name: "AI Running & Performance Tracker",
    what: "An AI assistant that pulls my running data via Strava's new MCP and uses Claude to spot trends, flag plateaus, and suggest what to train next.",
    why: "The same measure-analyse-act loop I apply to financial performance, pointed at my own running — proof the analytical toolkit travels beyond the finance function.",
    status: "Planned",
  },
  {
    slug: "knowledge-repository",
    name: "AI-Powered Knowledge Repository",
    what: "A personal knowledge vault in Obsidian wired to Claude — capturing and connecting what I read across AI, Bitcoin, and finance, inspired by Andrej Karpathy's second-brain approach.",
    why: "Staying genuinely current in fast-moving fields is hard. This turns scattered articles and videos into a structured, searchable base that compounds over time.",
    status: "Planned",
  },
  {
    slug: "bookkeeping-automation",
    name: "Small-Business Bookkeeping Assistant",
    what: "AI tooling to streamline invoicing and payroll for a family-run small business, cutting the manual admin a bookkeeper handles each month.",
    why: "A real-world test of AI on everyday finance admin — starting with family as a proof of concept, with an eye on growing it into a side venture.",
    status: "Planned",
  },
];

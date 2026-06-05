import { PageTransition } from "@/components/motion/page-transition";

// Next.js re-mounts template.tsx on every navigation (unlike layout.tsx),
// which is what drives the per-route enter animation in PageTransition.
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}

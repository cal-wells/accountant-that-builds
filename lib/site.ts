/**
 * Shared site constants. Single source of truth for identity, contact links,
 * and navigation. Edit values here rather than hardcoding them in components.
 */

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "CV", href: "/cv" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const siteConfig = {
  name: "Callum Wells",
  role: "Group FP&A Manager",
  credential: "ICAS Chartered Accountant (CA)",
  tagline: "The accountant that codes",
  location: "London, UK",
  description:
    "Group FP&A Manager and ICAS Chartered Accountant using AI and code to modernise finance — faster reporting, sharper forecasting, and real efficiency.",
  email: "callumwells23@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/wellscallum/",
  navItems,
} as const;

/**
 * Shared site constants. Single source of truth for identity, contact links,
 * and navigation. Edit values here rather than hardcoding them in components.
 *
 * TODO(owner): confirm the placeholder values marked below.
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
  name: "Callum Wells", // TODO(owner): confirm full name as it should appear
  role: "FP&A Manager",
  tagline: "The accountant that codes",
  description:
    "FP&A Manager and qualified accountant using AI and code to make finance faster, sharper, and more efficient.",
  email: "callumwells23@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/your-handle", // TODO(owner): set real LinkedIn URL
  navItems,
} as const;

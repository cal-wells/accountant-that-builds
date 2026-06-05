import { describe, it, expect } from "vitest";
import { siteConfig, navItems } from "@/lib/site";

describe("siteConfig", () => {
  it("exposes the four navigation routes in order", () => {
    expect(navItems.map((item) => item.href)).toEqual([
      "/",
      "/cv",
      "/projects",
      "/contact",
    ]);
  });

  it("carries the core identity fields", () => {
    expect(siteConfig.tagline).toBe("The accountant that codes");
    expect(siteConfig.email).toContain("@");
    expect(siteConfig.role).toContain("FP&A Manager");
  });
});

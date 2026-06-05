import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Reveal } from "@/components/motion/reveal";

describe("Reveal (reduced motion)", () => {
  it("renders content statically with no opacity animation when reduced motion is set", () => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query.includes("prefers-reduced-motion"),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { container } = render(
      <Reveal>
        <p>Visible immediately</p>
      </Reveal>,
    );

    // Content is present...
    expect(screen.getByText("Visible immediately")).toBeInTheDocument();
    // ...and nothing was hidden behind an initial opacity:0 motion style.
    expect(container.querySelector('[style*="opacity"]')).toBeNull();
  });
});

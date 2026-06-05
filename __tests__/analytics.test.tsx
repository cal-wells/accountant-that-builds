import { describe, it, expect, vi, afterEach } from "vitest";
import { render } from "@testing-library/react";

// next/script isn't needed for the no-op path; stub it so the import is inert.
vi.mock("next/script", () => ({
  default: ({ children }: { children?: React.ReactNode }) => <>{children}</>,
}));

afterEach(() => {
  delete process.env.NEXT_PUBLIC_GA_ID;
  vi.resetModules();
});

describe("Analytics", () => {
  it("renders nothing when NEXT_PUBLIC_GA_ID is unset", async () => {
    delete process.env.NEXT_PUBLIC_GA_ID;
    const { Analytics } = await import("@/components/analytics");
    const { container } = render(<Analytics />);
    expect(container).toBeEmptyDOMElement();
  });
});

import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Nav } from "@/components/nav";

// usePathname is the only Next runtime dependency the nav needs.
let mockPathname = "/";
vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname,
}));

beforeEach(() => {
  mockPathname = "/";
});

describe("Nav", () => {
  it("renders a link for every nav item", () => {
    render(<Nav />);
    const list = screen.getByRole("navigation", { name: "Primary" });
    expect(within(list).getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(within(list).getByRole("link", { name: "CV" })).toBeInTheDocument();
    expect(
      within(list).getByRole("link", { name: "Projects" }),
    ).toBeInTheDocument();
    expect(
      within(list).getByRole("link", { name: "Contact" }),
    ).toBeInTheDocument();
  });

  it("marks the CV link active on /cv and not the others", () => {
    mockPathname = "/cv";
    render(<Nav />);
    const nav = screen.getByRole("navigation", { name: "Primary" });
    expect(within(nav).getByRole("link", { name: "CV" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(
      within(nav).getByRole("link", { name: "Projects" }),
    ).not.toHaveAttribute("aria-current");
  });

  it("marks the Home link active on /", () => {
    mockPathname = "/";
    render(<Nav />);
    const nav = screen.getByRole("navigation", { name: "Primary" });
    expect(within(nav).getByRole("link", { name: "Home" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("opens the mobile menu on trigger and closes it on link tap", async () => {
    const user = userEvent.setup();
    render(<Nav />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();

    await user.click(within(dialog).getByRole("link", { name: "Projects" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("closes the mobile menu on Escape", async () => {
    const user = userEvent.setup();
    render(<Nav />);

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "@/components/contact-form";

async function fillValid(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/name/i), "Jane Hiring");
  await user.type(screen.getByLabelText(/email/i), "jane@example.com");
  await user.type(screen.getByLabelText(/message/i), "Loved your portfolio.");
}

beforeEach(() => {
  process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID = "testform";
});

afterEach(() => {
  vi.restoreAllMocks();
  delete process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
});

describe("ContactForm", () => {
  it("shows a confirmation after a successful submission (AE1 / F1 / R13)", async () => {
    const user = userEvent.setup();
    const fetchMock = vi
      .spyOn(global, "fetch")
      .mockResolvedValue(new Response(null, { status: 200 }));

    render(<ContactForm />);
    await fillValid(user);
    await user.click(screen.getByRole("button", { name: /send/i }));

    expect(await screen.findByRole("status")).toHaveTextContent(/thank|thanks|sent|touch/i);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://formspree.io/f/testform",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("shows a separate inline error for each empty field", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.spyOn(global, "fetch");

    render(<ContactForm />);
    await user.click(screen.getByRole("button", { name: /send/i }));

    const alerts = await screen.findAllByRole("alert");
    expect(alerts.length).toBeGreaterThanOrEqual(3);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("blocks submission and shows an error when a required field is empty (AE2)", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.spyOn(global, "fetch");

    render(<ContactForm />);
    await user.type(screen.getByLabelText(/name/i), "Jane Hiring");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");
    // message left empty
    await user.click(screen.getByRole("button", { name: /send/i }));

    expect(await screen.findByRole("alert")).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("blocks submission on a malformed email (AE2)", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.spyOn(global, "fetch");

    render(<ContactForm />);
    await user.type(screen.getByLabelText(/name/i), "Jane Hiring");
    await user.type(screen.getByLabelText(/email/i), "not-an-email");
    await user.type(screen.getByLabelText(/message/i), "Hello there.");
    await user.click(screen.getByRole("button", { name: /send/i }));

    expect(await screen.findByRole("alert")).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("shows an error and preserves input when the request fails", async () => {
    const user = userEvent.setup();
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(null, { status: 500 }),
    );

    render(<ContactForm />);
    await fillValid(user);
    await user.click(screen.getByRole("button", { name: /send/i }));

    expect(await screen.findByRole("alert")).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toHaveValue(
      "Loved your portfolio.",
    );
  });

  it("disables the submit button and shows a sending state while in flight", async () => {
    const user = userEvent.setup();
    let resolveFetch: (value: Response) => void = () => {};
    vi.spyOn(global, "fetch").mockReturnValue(
      new Promise<Response>((resolve) => {
        resolveFetch = resolve;
      }),
    );

    render(<ContactForm />);
    await fillValid(user);
    await user.click(screen.getByRole("button", { name: /send/i }));

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent(/sending/i);

    resolveFetch(new Response(null, { status: 200 }));
    await waitFor(() => expect(screen.getByRole("status")).toBeInTheDocument());
  });
});

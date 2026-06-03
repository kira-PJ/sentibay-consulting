import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Navbar from "@/components/Navbar";

// Mock next/link to render a plain anchor tag
vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Navbar", () => {
  it("renders all 5 nav links in correct order", () => {
    render(<Navbar />);

    const expectedLinks = [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Exam Prep Courses", href: "/courses" },
      { label: "Corporate Training", href: "/training" },
      { label: "Consulting", href: "/consulting" },
    ];

    // Get all anchor tags that match the nav link labels
    expectedLinks.forEach(({ label, href }) => {
      // There may be multiple elements with the same text (desktop + mobile),
      // so we just confirm at least one exists with the right href
      const matchingLinks = screen
        .getAllByRole("link", { name: label })
        .filter((el) => el.getAttribute("href") === href);
      expect(matchingLinks.length).toBeGreaterThan(0);
    });

    // Verify order by checking the desktop link container
    const allLinks = screen.getAllByRole("link");
    const navLabelOrder = allLinks
      .map((el) => el.textContent?.trim())
      .filter((text) =>
        ["Home", "About Us", "Exam Prep Courses", "Corporate Training", "Consulting"].includes(
          text ?? ""
        )
      );

    // First 5 occurrences should be in the correct order (desktop nav)
    expect(navLabelOrder.slice(0, 5)).toEqual([
      "Home",
      "About Us",
      "Exam Prep Courses",
      "Corporate Training",
      "Consulting",
    ]);
  });

  it('"Get in Touch" CTA button links to /consulting', () => {
    render(<Navbar />);

    const ctaLinks = screen
      .getAllByRole("link", { name: /get in touch/i });

    // At least one CTA link should point to /consulting
    const consultingCTA = ctaLinks.find(
      (el) => el.getAttribute("href") === "/consulting"
    );
    expect(consultingCTA).toBeDefined();
  });

  it("mobile menu is hidden by default and hamburger button is visible", () => {
    render(<Navbar />);

    // Hamburger button should be present
    const hamburger = screen.getByRole("button", { name: /open menu/i });
    expect(hamburger).toBeInTheDocument();

    // Mobile dropdown should not be visible (it's conditionally rendered)
    // The mobile menu links are only rendered when open=true, so there should
    // be no duplicate links in the DOM when closed
    const homeLinks = screen.getAllByRole("link", { name: "Home" });
    // Only the desktop version should be rendered (1 occurrence)
    expect(homeLinks).toHaveLength(1);
  });

  it("mobile menu opens when hamburger button is clicked", () => {
    render(<Navbar />);

    const hamburger = screen.getByRole("button", { name: /open menu/i });

    // Before click: only desktop links present
    expect(screen.getAllByRole("link", { name: "Home" })).toHaveLength(1);

    // Click hamburger to open menu
    fireEvent.click(hamburger);

    // After click: both desktop and mobile links are rendered
    expect(screen.getAllByRole("link", { name: "Home" })).toHaveLength(2);

    // Button label should change to "Close menu"
    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();
  });
});

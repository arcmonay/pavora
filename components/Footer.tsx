import Link from "next/link";

const manifest = [
  { href: "/shop", label: "Shop machinery" },
  { href: "/business", label: "Crew packages" },
  { href: "/quote", label: "Request a quote" },
  { href: "/guides", label: "Guides" },
  { href: "/compare", label: "Compare" },
  { href: "/financing", label: "Financing" },
  { href: "/warranty", label: "Warranty" },
  { href: "/support", label: "Support" },
  { href: "/faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="manifest-foot">
      <p className="manifest-mark" aria-hidden="true">
        Pavora
      </p>
      <p className="manifest-line">
        Contractor machinery for grinding, injection, blasting, laser cleaning,
        lot painting, and caulking.
      </p>
      <nav className="manifest-links" aria-label="Footer">
        {manifest.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <p className="legal">
        © 2025 Pavora. All rights reserved. Equipment is sold for professional contractor use. Pavora is not a licensed contractor and does not perform field work.
      </p>
    </footer>
  );
}

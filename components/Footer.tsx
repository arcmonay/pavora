import Link from "next/link";

const shop = [
  { href: "/shop", label: "All Equipment" },
  { href: "/departments/grinding", label: "Grinders" },
  { href: "/departments/injection", label: "Injection" },
  { href: "/departments/soda", label: "Blasting" },
  { href: "/departments/laser", label: "Laser Cleaning" },
];

const company = [
  { href: "/business", label: "Crew Packages" },
  { href: "/guides", label: "Guides" },
  { href: "/compare", label: "Compare" },
  { href: "/faq", label: "FAQ" },
];

const support = [
  { href: "/quote", label: "Request a Quote" },
  { href: "/support", label: "Support" },
  { href: "/warranty", label: "Warranty" },
  { href: "/financing", label: "Financing" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h3>Pavora</h3>
          <p>
            Contractor equipment for concrete grinding, crack injection, asphalt
            sealing, blasting, laser cleaning, pressure washing, lot painting, and caulking.
          </p>
        </div>
        <nav aria-label="Shop links">
          <h3>Shop</h3>
          {shop.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Company links">
          <h3>Company</h3>
          {company.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Support links">
          <h3>Support</h3>
          {support.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="legal">
        © 2025 Pavora. All rights reserved. Equipment is sold for professional contractor use. Pavora is not a licensed contractor and does not perform field work.
      </p>
    </footer>
  );
}

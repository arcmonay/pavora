import Link from "next/link";

const left = [
  { href: "/shop", label: "Open the yard" },
  { href: "/business", label: "Crew packages" },
  { href: "/quote", label: "Request a quote" },
  { href: "/compare", label: "Compare machines" },
];

const mid = [
  { href: "/guides", label: "Buying guides" },
  { href: "/financing", label: "Financing" },
  { href: "/warranty", label: "Warranty" },
  { href: "/support", label: "Yard desk" },
];

const right = [
  { href: "/faq", label: "FAQ" },
  { href: "/departments/grinding", label: "Bay 01 Grind" },
  { href: "/departments/laser", label: "Bay 05 Laser" },
  { href: "/departments/lot-painting", label: "Bay 07 Stripe" },
];

export function Footer() {
  return (
    <footer className="slip-foot">
      <div className="slip-band">
        <p className="slip-brand">Pavora packing slip</p>
        <div className="slip-barcode" aria-hidden="true">
          {Array.from({ length: 28 }).map((_, i) => (
            <i key={i} />
          ))}
        </div>
      </div>
      <div className="slip-grid">
        <div>
          <h3>Ship from</h3>
          <p>
            Contractor surface machinery — grinders, injection, blast, laser,
            wash, stripe, and caulk. Photo on the listing is the unit on the ticket.
          </p>
        </div>
        <nav aria-label="Footer primary">
          <h3>Issue</h3>
          {left.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Footer support">
          <h3>Desk</h3>
          {mid.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          {right.map((item) => (
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

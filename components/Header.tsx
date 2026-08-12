"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const equipment = [
  { href: "/departments/grinding", label: "01 Concrete grinding & polishing" },
  { href: "/departments/injection", label: "02 Crack injection" },
  { href: "/departments/leveling", label: "03 Polyurethane leveling" },
  { href: "/departments/crack-sealing", label: "04 Asphalt crack sealing" },
  { href: "/departments/sealcoating", label: "05 Sealcoating" },
  { href: "/departments/thermoplastic", label: "06 Thermoplastic marking" },
  { href: "/departments/marking-removal", label: "07 Marking removal" },
  { href: "/departments/dry-ice", label: "08 Dry-ice blasting" },
  { href: "/departments/soda", label: "09 Soda blasting" },
  { href: "/departments/laser", label: "10 Laser cleaning" },
  { href: "/departments/pressure-wash", label: "11 Pressure washing" },
  { href: "/departments/lot-painting", label: "12 Parking lot painting" },
  { href: "/departments/drone", label: "13 Drone roof inspections" },
  { href: "/departments/thermal", label: "14 Thermal leak detection" },
  { href: "/departments/expansion-joints", label: "15 Expansion joints" },
  { href: "/departments/caulking", label: "16 Commercial caulking" },
  { href: "/departments/garage", label: "17 Garage restoration" },
];

const shop = [
  { href: "/shop", label: "All machinery" },
  { href: "/shop?sort=featured", label: "Yard favorites" },
  { href: "/shop?collection=packages", label: "Crew packages" },
  { href: "/shop?collection=parts", label: "Consumables & wear parts" },
  { href: "/shop?max=5000", label: "Under $5,000" },
  { href: "/shop?stock=1", label: "In yard now" },
];

const business = [
  { href: "/business", label: "Crew packages" },
  { href: "/business/concrete-floor-crew", label: "Open a grind crew" },
  { href: "/business/lot-maintenance-crew", label: "Lot maintenance route" },
  { href: "/business/marking-crew", label: "Marking crew" },
  { href: "/business/garage-restore-crew", label: "Garage restoration" },
  { href: "/quote", label: "Request a quote" },
];

const resources = [
  { href: "/guides", label: "Equipment guides" },
  { href: "/warranty", label: "Warranty" },
  { href: "/support", label: "Yard desk" },
  { href: "/faq", label: "FAQ" },
  { href: "/compare", label: "Compare machines" },
];

function Menu({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  return (
    <details>
      <summary>{label}</summary>
      <div className="mega-panel">
        {items.map((item) => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="mast">
      <div className="mast-top">
        <nav className="mast-side">
          <Link href="/shop">Shop</Link>
          <Link href="/quote">Quote</Link>
          <Link href="/guides">Guides</Link>
        </nav>
        <Link href="/" className="wordmark">
          <strong>Pavora</strong>
          <span>Surface machinery</span>
        </Link>
        <nav className="mast-side right">
          <Link href="/shop">Yard</Link>
          <Link href="/support">Desk</Link>
          <Link href="/cart">Cart{count ? ` ${count}` : ""}</Link>
        </nav>
      </div>
      <nav className="mega" aria-label="Trades">
        <Menu label="Trades" items={equipment} />
        <Menu label="Yard" items={shop} />
        <Menu label="Crews" items={business} />
        <Menu label="Resources" items={resources} />
        <Link href="/shop" className={pathname.startsWith("/shop") ? "is-active" : ""}>
          Shop machinery
        </Link>
      </nav>
    </header>
  );
}

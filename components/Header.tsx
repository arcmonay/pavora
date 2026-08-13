"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const links = [
  { href: "/shop", match: "/shop", label: "The Yard" },
  { href: "/departments/grinding", match: "/departments", label: "Trades" },
  { href: "/business", match: "/business", label: "Crew Packages" },
  { href: "/quote", match: "/quote", label: "Quotes" },
  { href: "/guides", match: "/guides", label: "Guides" },
  { href: "/support", match: "/support", label: "Support" },
];

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="strip">
      <div className="strip-bar">
        <Link href="/" className="plate">
          <strong>Pavora</strong>
          <span className="plate-sub">Surface machinery</span>
        </Link>
        <nav className="strip-nav" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname.startsWith(link.match) ? "is-active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/cart" className="cart-stub">
          <span>Cart</span>
          <strong>{count}</strong>
        </Link>
      </div>
      <div className="hazard-rule" aria-hidden="true" />
    </header>
  );
}

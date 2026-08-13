"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const bays = [
  { href: "/departments/grinding", code: "01", label: "GRIND" },
  { href: "/departments/injection", code: "02", label: "INJECT" },
  { href: "/departments/crack-sealing", code: "03", label: "SEAL" },
  { href: "/departments/soda", code: "04", label: "BLAST" },
  { href: "/departments/laser", code: "05", label: "LASER" },
  { href: "/departments/pressure-wash", code: "06", label: "WASH" },
  { href: "/departments/lot-painting", code: "07", label: "STRIPE" },
  { href: "/departments/caulking", code: "08", label: "CAULK" },
];

const desk = [
  { href: "/shop", match: "/shop", label: "YARD" },
  { href: "/business", match: "/business", label: "CREW" },
  { href: "/quote", match: "/quote", label: "QUOTE" },
  { href: "/guides", match: "/guides", label: "GUIDE" },
  { href: "/support", match: "/support", label: "DESK" },
];

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="ticket-head">
      <div className="ticket-top">
        <Link href="/" className="stamp" aria-label="Pavora home">
          PAVORA
          <span>Yard ticket · surface machinery</span>
        </Link>
        <nav className="ticket-meta" aria-label="Desk links">
          Doc type
          <strong>RECEIVING / ISSUE</strong>
          <span style={{ display: "block", marginTop: "0.55rem" }}>
            {desk.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                style={{
                  display: "inline-block",
                  marginLeft: "0.75rem",
                  color: pathname.startsWith(d.match) ? "var(--amber-ink)" : undefined,
                }}
              >
                {d.label}
              </Link>
            ))}
          </span>
        </nav>
        <Link href="/cart" className="punch" aria-label={`Cart, ${count} items`}>
          {String(count).padStart(2, "0")}
        </Link>
      </div>
      <nav className="bay-rail" aria-label="Trade bays">
        {bays.map((bay) => {
          const slug = bay.href.split("/").pop()!;
          const active = pathname.includes(`/departments/${slug}`);
          return (
            <Link key={bay.href} href={bay.href} className={`bay${active ? " is-active" : ""}`}>
              <em>BAY {bay.code}</em>
              <strong>{bay.label}</strong>
            </Link>
          );
        })}
      </nav>
      <div className="perforation" aria-hidden="true" />
    </header>
  );
}

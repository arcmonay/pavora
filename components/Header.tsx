"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const cats = [
  { href: "/departments/grinding", label: "Grinders" },
  { href: "/departments/injection", label: "Injection" },
  { href: "/departments/crack-sealing", label: "Crack Sealing" },
  { href: "/departments/soda", label: "Blasting" },
  { href: "/departments/laser", label: "Laser" },
  { href: "/departments/pressure-wash", label: "Pressure Wash" },
  { href: "/departments/lot-painting", label: "Lot Painting" },
  { href: "/departments/caulking", label: "Caulking" },
  { href: "/shop", label: "All Equipment" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { count } = useCart();
  const [q, setQ] = useState("");

  function onSearch(e: FormEvent) {
    e.preventDefault();
    const query = q.trim();
    router.push(query ? `/shop?q=${encodeURIComponent(query)}` : "/shop");
  }

  return (
    <>
      <div className="topbar">
        <span>Surface prep specialists · contractor equipment</span>
        <a href="tel:18005550199">Phone: 1-800-555-0199</a>
      </div>
      <header className="site-header">
        <div className="header-row">
          <Link href="/" className="logo" aria-label="Pavora home">
            <Image
              src="/logo.png"
              alt="Pavora"
              width={160}
              height={96}
              priority
              className="logo-mark"
            />
            <span className="logo-text">
              Pavora
              <em>Surface machinery</em>
            </span>
          </Link>
          <form className="search-form" onSubmit={onSearch} role="search">
            <input
              type="search"
              name="q"
              placeholder="Search grinders, blast pots, lasers…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Search equipment"
            />
            <button type="submit">Search</button>
          </form>
          <div className="header-actions">
            <Link href="/quote">Request Quote</Link>
            <Link href="/cart" className="cart-link">
              Cart <em>{count}</em>
            </Link>
          </div>
        </div>
        <nav className="nav-bar" aria-label="Product categories">
          <div className="nav-bar-inner">
            {cats.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className={
                  c.href === "/shop"
                    ? pathname === "/shop"
                      ? "is-active"
                      : ""
                    : pathname.startsWith(c.href)
                      ? "is-active"
                      : ""
                }
              >
                {c.label}
              </Link>
            ))}
            <Link href="/business" className={pathname.startsWith("/business") ? "is-active" : ""}>
              Packages
            </Link>
            <Link href="/guides" className={pathname.startsWith("/guides") ? "is-active" : ""}>
              Resources
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

import Link from "next/link";
import { formatMoney } from "@/lib/products";
import { packages } from "@/data/content";

export const metadata = { title: "Crew Packages" };

export default function BusinessPage() {
  return (
    <section className="section">
      <p className="kicker">Packages</p>
      <h1 className="display text-3xl mt-2">Crew Packages</h1>
      <p className="lede mt-3 mb-10">
        Bundled equipment for lot maintenance and blast-shop crews. Freight quoted separately.
      </p>
      <div className="product-grid">
        {packages.map((pack) => (
          <Link key={pack.slug} href={`/business/${pack.slug}`} className="product-card">
            <div className="info" style={{ paddingTop: "1.25rem" }}>
              <p className="type">{pack.audience}</p>
              <h3>{pack.title}</h3>
              <p className="meta">{pack.summary}</p>
              <p className="price">{formatMoney(pack.price)}</p>
              <span className="btn" style={{ marginTop: "0.75rem" }}>
                View Package
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/ProductCard";
import { getFeaturedProducts, getHighTicket, tradeLines } from "@/lib/products";

export default function Home() {
  const trades = tradeLines();
  const featured = getHighTicket(8);
  const sellers = getFeaturedProducts(8);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">Trade 00 · Surface machinery</p>
          <h1>The machine in the photo is the machine on the invoice.</h1>
          <p>
            Planetary grinders, injection pumps, blast pots, laser cleaners, pressure washers, lot stripers, crack kettles, and dual caulk guns — each listing shows that unit.
          </p>
          <div className="cta-row">
            <Link href="/shop" className="btn btn-signal">
              Shop machinery
            </Link>
            <Link href="/business" className="btn btn-ghost light">
              Spec a crew package
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/media/catalog/laser.webp"
            alt="Handheld fiber laser cleaning cart"
            width={1400}
            height={1600}
            priority
          />
        </div>
      </section>

      <div className="trades">
        {trades.map((d) => (
          <Link key={d.handle} href={`/departments/${d.handle}`} className="trade">
            <div>
              <em>Trade {d.bay}</em>
              <strong>{d.title}</strong>
            </div>
            <p className="card-desc">{d.description}</p>
          </Link>
        ))}
      </div>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="kicker">High-ticket floor</p>
            <h2 className="display text-4xl">Featured machinery</h2>
          </div>
          <Link href="/shop" className="btn btn-ghost">
            All machines
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div>
            <p className="kicker">In the yard</p>
            <h2 className="display text-4xl">Crew favorites</h2>
          </div>
          <Link href="/shop" className="btn btn-ghost">
            All machines
          </Link>
        </div>
        <ProductGrid products={sellers} />
      </section>
    </>
  );
}

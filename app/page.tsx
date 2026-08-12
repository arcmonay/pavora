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
          <h1>Machinery for the trades that keep slabs, lots, and roofs in service.</h1>
          <p>
            Concrete grinding, crack injection, foam leveling, asphalt sealing, thermoplastic marking, blasting, laser cleaning, lot painting, drone roof intel, and parking garage restoration — specified for contractor crews.
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
            src="/media/hero.jpg"
            alt="Commercial concrete and pavement jobsite"
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
          <Link href="/financing" className="btn btn-ghost">
            See payment options
          </Link>
        </div>
        <ProductGrid products={sellers} />
      </section>
    </>
  );
}

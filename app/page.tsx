import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/ProductCard";
import { getFeaturedProducts, getHighTicket, tradeLines } from "@/lib/products";

const bayCode: Record<string, string> = {
  grinding: "GRIND",
  injection: "INJECT",
  "crack-sealing": "SEAL",
  soda: "BLAST",
  laser: "LASER",
  "pressure-wash": "WASH",
  "lot-painting": "STRIPE",
  caulking: "CAULK",
};

export default function Home() {
  const trades = tradeLines();
  const featured = getHighTicket(6);
  const sellers = getFeaturedProducts(6);

  return (
    <>
      <section className="spread">
        <div className="spread-shot">
          <Image
            src="/media/hero.jpg"
            alt="Crew coating a commercial warehouse slab"
            fill
            priority
            sizes="(max-width: 980px) 100vw, 60vw"
            quality={90}
          />
          <p className="spread-caption">
            Jobsite editorial · commercial slab · catalog photo matches invoice unit
          </p>
        </div>
        <div className="spread-ticket">
          <span className="tag">Yard ticket 00</span>
          <h1>Receive the machine. Issue the bay.</h1>
          <p>
            Spec-sheet catalog for planetary grinders, injection pumps, blast pots,
            laser cleaners, wash carts, lot stripers, and dual caulk guns.
          </p>
          <div className="field-rows" aria-label="Ticket fields">
            <div>
              <span>Vendor</span>
              <strong>Pavora surface machinery</strong>
            </div>
            <div>
              <span>Stock</span>
              <strong>In-yard units ship; freight quoted on ride-ons</strong>
            </div>
            <div>
              <span>Photo rule</span>
              <strong>Machine in the frame = machine on the ticket</strong>
            </div>
          </div>
          <div className="cta-row">
            <Link href="/shop" className="btn btn-amber">
              Open the yard
            </Link>
            <Link href="/business" className="btn btn-void">
              Spec a crew
            </Link>
          </div>
        </div>
      </section>

      <div className="bay-board">
        {trades.map((d) => (
          <Link key={d.handle} href={`/departments/${d.handle}`} className="bay-stub">
            <div>
              <span className="code">
                BAY {d.bay} · {bayCode[d.handle] ?? d.handle.toUpperCase()}
              </span>
              <strong>{d.title}</strong>
            </div>
            <p>{d.description}</p>
          </Link>
        ))}
      </div>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="kicker">High-ticket ledger</p>
            <h2 className="display text-4xl">Featured machinery</h2>
          </div>
          <Link href="/shop" className="btn btn-outline">
            Full yard list
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div>
            <p className="kicker">Crew pull sheet</p>
            <h2 className="display text-4xl">In rotation</h2>
          </div>
          <Link href="/quote" className="btn btn-outline">
            Request quote
          </Link>
        </div>
        <ProductGrid products={sellers} />
      </section>
    </>
  );
}

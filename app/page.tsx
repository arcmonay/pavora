import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/ProductCard";
import { getFeaturedProducts, getHighTicket, tradeLines } from "@/lib/products";

const catImage: Record<string, string> = {
  grinding: "/media/grinding.jpg",
  injection: "/media/injection.jpg",
  "crack-sealing": "/media/asphalt.jpg",
  soda: "/media/blast.jpg",
  laser: "/media/laser.jpg",
  "pressure-wash": "/media/wash.jpg",
  "lot-painting": "/media/marking.jpg",
  caulking: "/media/caulk.jpg",
};

export default function Home() {
  const trades = tradeLines().slice(0, 8);
  const featured = getHighTicket(8);
  const sellers = getFeaturedProducts(8);

  return (
    <>
      <section className="hero-banner">
        <Image
          src="/media/hero.jpg"
          alt="Crew preparing a commercial concrete floor"
          fill
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-copy">
          <span className="eyebrow">Surface preparation equipment</span>
          <h1>Concrete grinding &amp; floor prep machinery</h1>
          <p>
            Planetary grinders, injection pumps, blast pots, laser cleaners, wash carts,
            lot stripers, and caulk guns — catalog photos match the units we sell.
          </p>
          <div className="cta-row">
            <Link href="/shop" className="btn btn-primary">
              Shop Equipment
            </Link>
            <Link href="/business" className="btn" style={{ borderColor: "#fff", color: "#fff" }}>
              View Packages
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p>Products for every project</p>
          <h2>Shop by Category</h2>
        </div>
        <div className="cat-grid">
          {trades.map((d) => (
            <Link key={d.handle} href={`/departments/${d.handle}`} className="cat-tile">
              <Image
                src={catImage[d.handle] ?? "/media/lot.jpg"}
                alt={d.title}
                width={480}
                height={280}
              />
              <div className="body">
                <strong>{d.title}</strong>
                <span>Shop now</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="about-band">
        <div className="about-grid">
          <div>
            <p className="kicker">About Us</p>
            <h2>Concrete surface prep specialists</h2>
            <p>
              Pavora supplies commercial crews with grinding, injection, blasting, laser,
              washing, striping, and caulking equipment. Listings show the machine you receive —
              not a stock illustration of a different model.
            </p>
            <Link href="/support" className="btn btn-primary">
              Learn more
            </Link>
          </div>
          <Image
            src="/media/garage.jpg"
            alt="Equipment staged for commercial floor work"
            width={900}
            height={560}
          />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p>Our bestsellers</p>
          <h2>Trending Products</h2>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <p>In stock &amp; ready to ship</p>
          <h2>Featured Equipment</h2>
        </div>
        <ProductGrid products={sellers} />
        <div style={{ textAlign: "center", marginTop: "1.75rem" }}>
          <Link href="/shop" className="btn btn-primary">
            View All Equipment
          </Link>
        </div>
      </section>
    </>
  );
}

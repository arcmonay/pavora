import Link from "next/link";
import { guides } from "@/data/content";

export const metadata = { title: "Guides" };

export default function GuidesPage() {
  return (
    <section className="section">
      <p className="kicker">Resources</p>
      <h1 className="display text-3xl mt-2">Equipment Guides</h1>
      <p className="lede mt-3 mb-10">
        Buying guides for grinders, injection systems, and cleaning processes.
      </p>
      <div className="product-grid">
        {guides.map((g) => (
          <Link key={g.slug} href={`/guides/${g.slug}`} className="product-card">
            <div className="info" style={{ paddingTop: "1.25rem" }}>
              <p className="type">
                {g.category} · {g.readMinutes} min
              </p>
              <h3>{g.title}</h3>
              <p className="meta">{g.dek}</p>
              <span className="btn" style={{ marginTop: "0.75rem" }}>
                Read Guide
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

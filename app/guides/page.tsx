import Link from "next/link";
import { guides } from "@/data/content";

export const metadata = { title: "Guides" };

export default function GuidesPage() {
  return (
    <section className="section">
      <p className="kicker">Field notes</p>
      <h1 className="display text-4xl mt-2">Equipment guides</h1>
      <p className="lede mt-3 mb-10">
        Research before you buy. Written for owners speccing a first truck or replacing a machine that failed on a Tuesday.
      </p>
      <div className="ledger">
        {guides.map((g) => (
          <Link key={g.slug} href={`/guides/${g.slug}`} className="ledger-row">
            <div className="ledger-thumb" style={{ placeItems: "start", padding: "0.75rem" }}>
              <p className="sku">{g.readMinutes} MIN</p>
            </div>
            <div className="ledger-copy">
              <p className="sku">{g.category}</p>
              <strong>{g.title}</strong>
              <p>{g.dek}</p>
            </div>
            <div className="ledger-price">
              <strong>Open</strong>
              <span>Buying guide</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

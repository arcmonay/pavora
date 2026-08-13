import Link from "next/link";
import { formatMoney } from "@/lib/products";
import { packages } from "@/data/content";

export const metadata = { title: "Crew packages" };

export default function BusinessPage() {
  return (
    <section className="section">
      <p className="kicker">Crew solutions</p>
      <h1 className="display text-4xl mt-2">Spec a crew</h1>
      <p className="lede mt-3 mb-10">
        Pavora outfits first trucks and second crews. Packages combine the machines you actually see in the shop — crack sealer plus striper, or blast pot plus recovery.
      </p>
      <div className="ledger">
        {packages.map((pack) => (
          <Link key={pack.slug} href={`/business/${pack.slug}`} className="ledger-row">
            <div className="ledger-thumb" style={{ placeItems: "start", padding: "0.75rem" }}>
              <p className="sku">CREW PACK</p>
            </div>
            <div className="ledger-copy">
              <p className="sku">{pack.audience}</p>
              <strong>{pack.title}</strong>
              <p>{pack.summary}</p>
            </div>
            <div className="ledger-price">
              <strong>{formatMoney(pack.price)}</strong>
              <span>Equipment invoice · freight quoted</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

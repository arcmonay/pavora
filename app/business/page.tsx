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
      <div className="grid-4">
        {packages.map((pack) => (
          <Link key={pack.slug} href={`/business/${pack.slug}`} className="card">
            <div className="card-body">
              <p className="kicker">{pack.audience}</p>
              <p className="card-name mt-2">{pack.title}</p>
              <p className="card-desc">{pack.summary}</p>
              <div className="ticket">
                <strong>{formatMoney(pack.price)}</strong>
                <span>Equipment invoice · freight quoted</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

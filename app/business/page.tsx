import Link from "next/link";
import { formatMoney } from "@/lib/products";
import { packages } from "@/data/content";
import { monthlyLabel } from "@/lib/finance";

export const metadata = { title: "Crew packages" };

export default function BusinessPage() {
  return (
    <section className="section">
      <p className="kicker">Crew solutions</p>
      <h1 className="display text-4xl mt-2">Spec a crew</h1>
      <p className="lede mt-3 mb-10">
        Pavora outfits first trucks and second crews. Packages combine machines, wear parts, and freight into one invoice for grind, lot maintenance, marking, blasting, roof intel, envelope, and garage restoration.
      </p>
      <div className="grid-4">
        {packages.map((pack) => (
          <Link key={pack.slug} href={`/business/${pack.slug}`} className="card">
            <div className="card-body">
              <p className="kicker">{pack.audience}</p>
              <p className="card-name mt-2">{pack.title}</p>
              <p className="card-desc">{pack.summary}</p>
              <div className="ticket">
                <strong>{monthlyLabel(pack.monthly)}</strong>
                <span>{formatMoney(pack.price)} equipment invoice</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

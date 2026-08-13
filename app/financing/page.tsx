import Link from "next/link";
import { financeDisclaimer } from "@/lib/finance";

export const metadata = { title: "Financing" };

export default function FinancingPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">Optional</p>
      <h1 className="display text-4xl mt-2">Pay for the machine</h1>
      <p className="lede mt-3">
        Pavora sells equipment. Most crews pay by invoice or card. Third-party financing exists if you need it — it is not how we sell, and we do not push it on the floor.
      </p>
      <div className="prose-block" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <h2>Buy the machine</h2>
        <p>
          Add in-yard units to the cart or request a quote for trailers, ride-ons, and anything over $15,000. Freight is calculated after we have an address.
        </p>
        <h2>If you still want a payment plan</h2>
        <p>
          We can introduce a third-party lender. Approval, rates, and terms are theirs. We do not advertise approval rates or guarantee financing. If a plan is declined, buy the machine on invoice.
        </p>
      </div>
      <p className="text-sm text-[var(--muted)]">{financeDisclaimer()}</p>
      <div className="cta-row mt-8">
        <Link href="/shop" className="btn btn-primary">
          Shop Equipment
        </Link>
        <Link href="/quote" className="btn">
          Request a Quote
        </Link>
      </div>
    </section>
  );
}

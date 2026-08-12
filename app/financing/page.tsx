import Link from "next/link";
import { financeDisclaimer } from "@/lib/finance";

export const metadata = { title: "Financing" };

export default function FinancingPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">Payment plans</p>
      <h1 className="display text-4xl mt-2">Equipment financing</h1>
      <p className="lede mt-3">
        High-ticket machinery is often purchased on a payment plan so a crew can take the first job before the cash account is empty. Pavora works with third-party lenders. Approval, rates, and terms are theirs — not ours.
      </p>
      <div className="prose-block" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <h2>How it works</h2>
        <p>
          Choose a machine or crew package, then apply with the lender linked at checkout or through the yard desk. Monthly figures on product pages are illustrations at 36 months, not an offer.
        </p>
        <h2>What we will not say</h2>
        <p>
          We do not advertise approval rates, guaranteed financing, or “everyone qualifies.” Credit decisions belong to the lender. If a plan is declined, you can still request a quote and pay by invoice.
        </p>
        <h2>Trade accounts</h2>
        <p>
          Running a second truck? Ask for trade pricing on packages. Net terms are available for established contractors after review.
        </p>
      </div>
      <p className="text-sm text-[var(--muted)]">{financeDisclaimer()}</p>
      <div className="cta-row mt-8">
        <Link href="/quote" className="btn btn-signal">
          Talk to the yard desk
        </Link>
        <Link href="/shop" className="btn btn-ghost">
          Shop machinery
        </Link>
      </div>
    </section>
  );
}

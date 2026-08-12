import { Suspense } from "react";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata = { title: "Request a quote" };

export default function QuotePage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">Yard desk</p>
      <h1 className="display text-4xl mt-2">Request a quote</h1>
      <p className="lede mt-3 mb-8">
        For machines over $15,000, trailers, ride-ons, and crew packages, a quote is the right path. Tell us the trade, the voltage, and the first job date.
      </p>
      <Suspense>
        <QuoteForm />
      </Suspense>
    </section>
  );
}

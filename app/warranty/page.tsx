import Link from "next/link";

export const metadata = { title: "Warranty" };

export default function WarrantyPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">Trust</p>
      <h1 className="display text-4xl mt-2">Warranty</h1>
      <p className="lede mt-3">
        Most Pavora machines carry a two-year limited warranty on chassis and power units. Wear parts — diamonds, pads, tips, filters, hoses, media — are sold separately and stocked for seven years from the purchase date.
      </p>
      <p className="mt-6 leading-7">
        Warranty does not cover misuse, unlicensed field work, or running a grinder without extraction. Register the serial number with the yard desk after delivery. For freight damage, photograph the crate before signing.
      </p>
      <Link href="/support" className="btn btn-signal mt-8 inline-flex">
        Contact support
      </Link>
    </section>
  );
}

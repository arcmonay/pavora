import Link from "next/link";

export const metadata = { title: "Support" };

export default function SupportPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">Yard desk</p>
      <h1 className="display text-4xl mt-2">Support</h1>
      <p className="lede mt-3">
        Spec a crew, confirm voltage, or order a cup that failed on a Saturday. Specialists know the machines — they do not read from a catalog script.
      </p>
      <ul className="leading-8 mt-6">
        <li>Freight and commissioning</li>
        <li>Crew training scheduling</li>
        <li>Wear parts</li>
        <li>First-truck consultations</li>
      </ul>
      <div className="cta-row mt-8">
        <Link href="/quote" className="btn btn-signal">
          Talk to the yard desk
        </Link>
        <Link href="/faq" className="btn btn-ghost">
          FAQ
        </Link>
      </div>
    </section>
  );
}

export const metadata = { title: "FAQ" };

const faqs = [
  {
    q: "Do you sell to contractors only?",
    a: "Most machines are specified for commercial crews. Municipal buyers are welcome. We still ask what the trade is.",
  },
  {
    q: "Can I finance a $18,000 slab-jacking rig?",
    a: "You can apply. Monthly figures on the site are illustrations. Lenders decide. We do not guarantee approval.",
  },
  {
    q: "Do you install?",
    a: "Commissioning is quoted on trailers, ride-ons, and quote-only equipment. Smaller units ship with a start-up video.",
  },
  {
    q: "Is checkout secure?",
    a: "Yes. Card data is handled by the payment processor. High-ticket orders are often invoiced after freight is confirmed.",
  },
  {
    q: "Can I get trade pricing?",
    a: "Ask on the quote form if you run more than one crew or are opening a second truck.",
  },
  {
    q: "Does Pavora perform the field work?",
    a: "No. We sell machinery and parts. We are not a licensed contractor and do not bid grinding, striping, or restoration jobs.",
  },
];

export default function FaqPage() {
  return (
    <section className="section max-w-3xl mx-auto">
      <p className="kicker">Resources</p>
      <h1 className="display text-4xl mt-2 mb-8">FAQ</h1>
      {faqs.map((f) => (
        <div key={f.q} className="border-t border-[var(--line)] py-5">
          <h2 className="font-medium">{f.q}</h2>
          <p className="lede mt-2">{f.a}</p>
        </div>
      ))}
    </section>
  );
}

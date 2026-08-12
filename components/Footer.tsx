import Link from "next/link";

export function Footer() {
  return (
    <footer className="yard-foot">
      <div>
        <strong>Pavora</strong>
        Contractor machinery for concrete, asphalt, blasting, roofs, and parking garage restoration. Commercial equipment, wear parts, and crew packages.
      </div>
      <div>
        <strong>Trades</strong>
        <Link href="/departments/grinding">Grinding & polishing</Link>
        <Link href="/departments/thermoplastic">Thermoplastic marking</Link>
        <Link href="/departments/laser">Laser cleaning</Link>
        <Link href="/departments/lot-painting">Parking lot painting</Link>
        <Link href="/departments/garage">Garage restoration</Link>
      </div>
      <div>
        <strong>Crews</strong>
        <Link href="/business">Packages</Link>
        <Link href="/financing">Financing</Link>
        <Link href="/quote">Request a quote</Link>
        <Link href="/compare">Compare</Link>
      </div>
      <div>
        <strong>Yard</strong>
        <Link href="/warranty">Warranty</Link>
        <Link href="/support">Support</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/guides">Guides</Link>
      </div>
      <p className="legal">
        © 2025 Pavora. All rights reserved. Financing is offered through third-party lenders, subject to approval. Equipment is sold for professional contractor use. Pavora is not a licensed contractor and does not perform field work.
      </p>
    </footer>
  );
}

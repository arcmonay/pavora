import Link from "next/link";

export function Footer() {
  return (
    <footer className="yard-foot">
      <div>
        <strong>Pavora</strong>
        Contractor machinery for grinding, injection, blasting, laser cleaning, lot painting, and caulking.
      </div>
      <div>
        <strong>Trades</strong>
        <Link href="/departments/grinding">Grinding & polishing</Link>
        <Link href="/departments/laser">Laser cleaning</Link>
        <Link href="/departments/soda">Blasting</Link>
        <Link href="/departments/lot-painting">Parking lot painting</Link>
        <Link href="/departments/caulking">Caulking</Link>
      </div>
      <div>
        <strong>Crews</strong>
        <Link href="/business">Packages</Link>
        <Link href="/shop">Shop machinery</Link>
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
        © 2025 Pavora. All rights reserved. Equipment is sold for professional contractor use. Pavora is not a licensed contractor and does not perform field work.
      </p>
    </footer>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <p className="kicker">404</p>
      <h1 className="display text-4xl mt-2">That machine is not in the yard.</h1>
      <Link href="/shop" className="btn btn-primary mt-6 inline-flex">
        Shop Equipment
      </Link>
    </section>
  );
}

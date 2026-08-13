import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <p className="kicker">404</p>
      <h1 className="display text-4xl mt-2">That machine is not in the yard.</h1>
      <Link href="/shop" className="btn btn-amber mt-6 inline-flex">
        Open the yard
      </Link>
    </section>
  );
}

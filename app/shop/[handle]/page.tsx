import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductGrid } from "@/components/ProductCard";
import { ProductVisual } from "@/components/ProductVisual";
import {
  formatMoney,
  getCollection,
  getProduct,
  getProducts,
  getProductsByCollection,
} from "@/lib/products";

export function generateStaticParams() {
  return getProducts().map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({
  params,
}: PageProps<"/shop/[handle]">) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) return { title: "Equipment" };
  return { title: product.title, description: product.description };
}

export default async function ProductPage({ params }: PageProps<"/shop/[handle]">) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) notFound();
  const collection = getCollection(product.collection);
  const related = getProductsByCollection(product.collection)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <article className="pdp">
        <div className="pdp-banner">
          <ProductVisual product={product} priority />
        </div>
        <div className="pdp-plate">
          <div className="plate-copy">
            <p className="kicker">
              {collection ? (
                <Link href={`/departments/${collection.handle}`}>
                  Bay {collection.bay} · {collection.title}
                </Link>
              ) : (
                "Pavora"
              )}
            </p>
            <h1>{product.title.replace("Pavora ", "")}</h1>
            <p className="lede">{product.description}</p>
            {product.quoteOnly ? (
              <p className="plate-price mt-4">Quote on request</p>
            ) : (
              <p className="plate-price mt-4">{formatMoney(product.price)}</p>
            )}
            <p className="mt-2 text-sm text-[var(--muted)]">
              {product.inStock ? "In yard" : "Built to order"} · {product.leadTime}
            </p>
            <ul className="spec-sheet">
              {[
                ["SKU", product.sku],
                ["Type", product.equipmentType],
                ["Duty", product.useCase],
                ["Power", product.power],
                ["Dimensions", product.dimensions],
                ["Weight", `${product.weightLbs} lb`],
                [
                  "Warranty",
                  product.warrantyYears ? `${product.warrantyYears} year limited` : "Wear part",
                ],
              ].map(([label, value]) => (
                <li key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div className="plate-actions">
            <p className="kicker">Issue / quote</p>
            <p className="lede mt-3 mb-6">
              Add to cart for in-yard units, or file a quote when freight, trailer, or power
              options need a desk pass.
            </p>
            <AddToCartButton product={product} />
          </div>
        </div>
      </article>

      <div className="prose-block">
        <h2>Overview</h2>
        <p>
          {product.description} {product.highlight}.
        </p>
        <h2>Jobsite applications</h2>
        <ul>
          {product.applications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Intended crews</h2>
        <ul>
          {product.intendedUsers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Why crews spec it</h2>
        <ul>
          {product.benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>What’s on the crate</h2>
        <ul>
          {product.included.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Installation</h2>
        <p>{product.installation}</p>
        <h2>Training</h2>
        <p>{product.training}</p>
        <h2>Shipping</h2>
        <p>{product.shipping}</p>
        <h2>Wear parts</h2>
        <p>{product.replacementParts}</p>
        <h2>FAQ</h2>
        {product.faqs.map((f) => (
          <p key={f.q}>
            <strong>{f.q}</strong>
            <br />
            {f.a}
          </p>
        ))}
      </div>

      {related.length ? (
        <section className="section">
          <div className="section-head">
            <h2 className="display text-3xl">Also in this bay</h2>
          </div>
          <ProductGrid products={related} />
        </section>
      ) : null}
    </>
  );
}

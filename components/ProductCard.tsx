import Link from "next/link";
import { ProductVisual } from "@/components/ProductVisual";
import { formatMoney } from "@/lib/products";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.handle}`} className="ledger-row">
      <div className="ledger-thumb">
        <ProductVisual product={product} />
      </div>
      <div className="ledger-copy">
        <p className="sku">
          {product.sku} · {product.equipmentType}
        </p>
        <strong>{product.title.replace("Pavora ", "")}</strong>
        <p>
          {product.highlight}.{" "}
          {product.warrantyYears ? `${product.warrantyYears}-year warranty.` : "Wear part."}
        </p>
      </div>
      <div className="ledger-price">
        {product.quoteOnly ? (
          <strong>Quote</strong>
        ) : (
          <strong>{formatMoney(product.price)}</strong>
        )}
        <span>
          {product.inStock ? "In yard" : "Built to order"} · {product.leadTime}
        </span>
      </div>
    </Link>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="ledger">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

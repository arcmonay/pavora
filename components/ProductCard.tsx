import Link from "next/link";
import { ProductVisual } from "@/components/ProductVisual";
import { formatMoney } from "@/lib/products";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.handle}`} className="product-card">
      <div className="thumb">
        <ProductVisual product={product} />
      </div>
      <div className="info">
        <p className="type">{product.equipmentType}</p>
        <h3>{product.title.replace("Pavora ", "")}</h3>
        <p className="price">
          {product.quoteOnly ? "Request Quote" : formatMoney(product.price)}
        </p>
        <p className="meta">
          {product.inStock ? "In Stock" : "Built to Order"} · {product.leadTime}
        </p>
        <span className="btn">{product.quoteOnly ? "Choose Options" : "View Details"}</span>
      </div>
    </Link>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

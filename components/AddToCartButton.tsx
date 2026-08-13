"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { useCompare } from "@/lib/compare-context";
import type { Product } from "@/lib/types";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { toggle, has } = useCompare();

  if (product.quoteOnly) {
    return (
      <div className="cta-row">
        <Link href={`/quote?machine=${product.handle}`} className="btn btn-primary">
          Request a Quote
        </Link>
        <Link href="/support" className="btn">
          Contact Support
        </Link>
        <button type="button" className="btn" onClick={() => toggle(product.handle)}>
          {has(product.handle) ? "Added to Compare" : "Compare"}
        </button>
      </div>
    );
  }

  return (
    <div className="cta-row">
      <button type="button" className="btn btn-primary" onClick={() => addItem(product.handle)}>
        Add to Cart
      </button>
      <Link href={`/quote?machine=${product.handle}`} className="btn">
        Request a Quote
      </Link>
      <button type="button" className="btn" onClick={() => toggle(product.handle)}>
        {has(product.handle) ? "Added to Compare" : "Compare"}
      </button>
    </div>
  );
}

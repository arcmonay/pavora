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
        <Link href={`/quote?machine=${product.handle}`} className="btn btn-amber">
          Request a quote
        </Link>
        <Link href="/support" className="btn btn-outline light">
          Talk to the yard desk
        </Link>
        <button type="button" className="btn btn-outline light" onClick={() => toggle(product.handle)}>
          {has(product.handle) ? "On compare sheet" : "Compare"}
        </button>
      </div>
    );
  }

  return (
    <div className="cta-row">
      <button type="button" className="btn btn-amber" onClick={() => addItem(product.handle)}>
        Issue to cart
      </button>
      <Link href={`/quote?machine=${product.handle}`} className="btn btn-outline light">
        Request a quote
      </Link>
      <button type="button" className="btn btn-outline light" onClick={() => toggle(product.handle)}>
        {has(product.handle) ? "On compare sheet" : "Compare"}
      </button>
    </div>
  );
}

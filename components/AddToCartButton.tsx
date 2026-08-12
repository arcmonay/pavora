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
        <Link href={`/quote?machine=${product.handle}`} className="btn btn-signal">
          Request a quote
        </Link>
        <Link href="/support" className="btn btn-ghost">
          Talk to the yard desk
        </Link>
        <button type="button" className="btn btn-ghost" onClick={() => toggle(product.handle)}>
          {has(product.handle) ? "Added to compare" : "Compare"}
        </button>
      </div>
    );
  }

  return (
    <div className="cta-row">
      <button type="button" className="btn btn-signal" onClick={() => addItem(product.handle)}>
        Add to cart
      </button>
      <Link href={`/quote?machine=${product.handle}`} className="btn btn-ghost">
        Request a quote
      </Link>
      <button type="button" className="btn btn-ghost" onClick={() => toggle(product.handle)}>
        {has(product.handle) ? "Added to compare" : "Compare"}
      </button>
    </div>
  );
}

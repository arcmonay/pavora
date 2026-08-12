"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatMoney } from "@/lib/products-client";

export function CartView() {
  const { items, subtotal, setQuantity, removeItem } = useCart();

  if (!items.length) {
    return (
      <p className="lede">
        The cart is empty. <Link href="/shop">Shop machinery</Link>
      </p>
    );
  }

  return (
    <div>
      <ul className="spec-list">
        {items.map(({ product, quantity }) => (
          <li key={product.handle}>
            <span>
              <Link href={`/shop/${product.handle}`}>{product.title.replace("Pavora ", "")}</Link>
            </span>
            <strong>
              {formatMoney(product.price * quantity)}
              <span className="block font-normal text-[var(--muted)]">
                Qty {quantity}{" "}
                <button type="button" onClick={() => setQuantity(product.handle, quantity + 1)}>
                  +
                </button>{" "}
                <button type="button" onClick={() => setQuantity(product.handle, quantity - 1)}>
                  −
                </button>{" "}
                <button type="button" onClick={() => removeItem(product.handle)}>
                  Remove
                </button>
              </span>
            </strong>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xl">Subtotal {formatMoney(subtotal)}</p>
      <p className="text-sm text-[var(--muted)] mt-2">
        Freight calculated after address. High-ticket rigs may be invoiced instead of charged in full.
      </p>
      <div className="cta-row">
        <Link href="/quote" className="btn btn-signal">
          Checkout / request invoice
        </Link>
        <Link href="/shop" className="btn btn-ghost">
          Keep shopping
        </Link>
      </div>
    </div>
  );
}

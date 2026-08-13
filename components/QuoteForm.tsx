"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getProducts } from "@/lib/products-client";

export function QuoteForm() {
  const params = useSearchParams();
  const preset = params.get("machine") ?? "";
  const [sent, setSent] = useState(false);
  const machines = getProducts().filter((p) => p.price >= 1500);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="lede">
        Quote request filed. A yard specialist will reply with availability, freight, and an invoice.
      </p>
    );
  }

  return (
    <form className="form-grid" onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Company
        <input name="business" placeholder="Concrete, paving, striping, restoration…" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        Equipment
        <select name="machine" defaultValue={preset}>
          <option value="">Help me spec a crew</option>
          {machines.map((p) => (
            <option key={p.handle} value={p.handle}>
              {p.title} — {p.quoteOnly ? "quote" : `$${p.price.toLocaleString()}`}
            </option>
          ))}
        </select>
      </label>
      <label>
        Notes
        <textarea name="notes" placeholder="Trade, voltage, trailer vs. skid, first job date…" />
      </label>
      <button type="submit" className="btn btn-void justify-self-start">
        Request a quote
      </button>
    </form>
  );
}

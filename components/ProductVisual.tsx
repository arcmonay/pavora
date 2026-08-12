import Image from "next/image";
import type { Product } from "@/lib/types";

const fallback: Record<string, string> = {
  grinding: "/media/catalog/grinder.webp",
  injection: "/media/catalog/pump.webp",
  "crack-sealing": "/media/catalog/kettle.webp",
  soda: "/media/catalog/blast.webp",
  laser: "/media/catalog/laser.webp",
  "pressure-wash": "/media/catalog/washer-cart.webp",
  "lot-painting": "/media/catalog/striper.webp",
  caulking: "/media/catalog/caulk.webp",
};

export function ProductVisual({
  product,
  priority = false,
  className = "",
}: {
  product: Product;
  priority?: boolean;
  className?: string;
}) {
  const src = product.image || fallback[product.collection] || "/media/catalog/grinder.webp";
  return (
    <Image
      src={src}
      alt={product.title}
      width={1200}
      height={900}
      priority={priority}
      className={`visual ${className}`}
    />
  );
}

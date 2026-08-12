import Image from "next/image";
import type { Product } from "@/lib/types";

const fallback: Record<string, string> = {
  grinding: "/media/gear/polisher.jpg",
  injection: "/media/gear/us-tools.jpg",
  leveling: "/media/gear/us-tools.jpg",
  "crack-sealing": "/media/gear/px-spray.jpg",
  sealcoating: "/media/gear/px-spray.jpg",
  thermoplastic: "/media/gear/px-spray.jpg",
  "marking-removal": "/media/gear/px-sparks.jpg",
  "dry-ice": "/media/gear/blaster.jpg",
  soda: "/media/gear/blaster.jpg",
  laser: "/media/gear/px-sparks.jpg",
  "pressure-wash": "/media/gear/px-wash.jpg",
  "lot-painting": "/media/gear/px-spray.jpg",
  drone: "/media/gear/px-drone2.jpg",
  thermal: "/media/gear/us-cnc.jpg",
  "expansion-joints": "/media/gear/px-grinder.jpg",
  caulking: "/media/gear/px-spray.jpg",
  garage: "/media/gear/polisher.jpg",
  parts: "/media/gear/px-grinder.jpg",
  packages: "/media/gear/px-crane.jpg",
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
  const src = product.image || fallback[product.collection] || "/media/gear/polisher.jpg";
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

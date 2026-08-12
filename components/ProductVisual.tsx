import Image from "next/image";
import type { Product } from "@/lib/types";

const fallback: Record<string, string> = {
  grinding: "/media/grinding.jpg",
  injection: "/media/injection.jpg",
  leveling: "/media/leveling.jpg",
  "crack-sealing": "/media/asphalt.jpg",
  sealcoating: "/media/sealcoat.jpg",
  thermoplastic: "/media/marking.jpg",
  "marking-removal": "/media/removal.jpg",
  "dry-ice": "/media/blast.jpg",
  soda: "/media/soda.jpg",
  laser: "/media/laser.jpg",
  "pressure-wash": "/media/wash.jpg",
  "lot-painting": "/media/lot.jpg",
  drone: "/media/drone.jpg",
  thermal: "/media/thermal.jpg",
  "expansion-joints": "/media/joints.jpg",
  caulking: "/media/caulk.jpg",
  garage: "/media/garage.jpg",
  parts: "/media/parts.jpg",
  packages: "/media/hero.jpg",
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
  const src = product.image || fallback[product.collection] || "/media/hero.jpg";
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

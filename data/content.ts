import type { Guide, PackageDeal } from "@/lib/types";

export const packages: PackageDeal[] = [
  {
    slug: "lot-maintenance-crew",
    title: "Lot Maintenance Crew",
    audience: "Paving and property-management routes",
    summary: "Crack-seal the lot, then stripe it. Two machines, one freight plan.",
    price: 15200,
    monthly: 422,
    includes: ["Melt-120 crack sealer", "Lotline Walk striper"],
    productHandles: ["pavora-melt-120-melter", "pavora-lotline-walk"],
  },
  {
    slug: "blast-shop-crew",
    title: "Blast Shop Crew",
    audience: "Restoration and industrial cleaning shops",
    summary: "Blast pot plus recovery unit so media does not leave the building.",
    price: 11200,
    monthly: 311,
    includes: ["Soda-Pro 250 blast pot", "Media-Vac Recovery"],
    productHandles: ["pavora-soda-pro-250", "pavora-media-vac-recovery"],
  },
];

export const guides: Guide[] = [
  {
    slug: "concrete-grinder-buying-guide",
    title: "How to Spec a Commercial Concrete Grinder",
    dek: "Planetary vs. single-disc, dust, power, and what actually finishes a warehouse floor.",
    category: "Buying guides",
    readMinutes: 8,
    sections: [
      {
        heading: "Start with the floor, not the brochure",
        body: "A walk-behind planetary is the right default for commercial slabs. If the photo is a yellow four-head deck with operator handles, that is the machine. Edge work is a different tool.",
      },
      {
        heading: "Dust is the job",
        body: "Silica rules are not optional. Spec extraction with the grinder, not after the first inspection. Vac ports and skirts are part of the machine.",
      },
      {
        heading: "What to budget",
        body: "A serious grind-and-polish planetary lands in the low five figures before diamonds. Diamonds are a monthly cost, not a one-time invoice.",
      },
    ],
  },
  {
    slug: "epoxy-vs-polyurethane-injection",
    title: "Epoxy vs. Polyurethane Crack Injection",
    dek: "Structural glue versus water-stop foam, and why garage decks usually need both.",
    category: "Buying guides",
    readMinutes: 7,
    sections: [
      {
        heading: "Two different jobs",
        body: "Epoxy restores structural capacity in dry cracks. Polyurethane expands in the presence of water and stops leaks. Using epoxy on a weeping crack is how you decorate the face and leave the leak.",
      },
      {
        heading: "The pump is not a caulk gun",
        body: "An injection pump has a hopper, a pressure gauge, and a wand. A dual-cartridge epoxy gun is for face seal and anchors. They are not interchangeable, and the photos should not be either.",
      },
    ],
  },
  {
    slug: "dry-ice-vs-soda-vs-laser",
    title: "Soda Blasting or Laser Cleaning?",
    dek: "How to pick a process for machinery, buildings, and restoration.",
    category: "Buying guides",
    readMinutes: 8,
    sections: [
      {
        heading: "Soda and sand",
        body: "A wheeled blast pot with a hose and nozzle. Soft soda strips paint without a heavy profile. Sand cuts deeper. Both leave media you must recover indoors.",
      },
      {
        heading: "Laser",
        body: "A cart with a handheld gun on an umbilical. No media at all. Higher ticket, safety protocol, and fume extraction. Right for rust, welds, and shops that cannot store blast media.",
      },
    ],
  },
];

export function getPackage(slug: string): PackageDeal | undefined {
  return packages.find((p) => p.slug === slug);
}

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

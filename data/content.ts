import type { Guide, PackageDeal } from "@/lib/types";

export const packages: PackageDeal[] = [
  {
    slug: "concrete-floor-crew",
    title: "Concrete Floor Crew",
    audience: "Grind-and-polish contractors",
    summary: "Planetary grinder, edge machine, HEPA vac, and starter diamonds as one freight plan.",
    price: 21400,
    monthly: 594,
    includes: ["Mill-27 planetary grinder", "Dens-7 edge grinder", "HEPA-Vac Prop", "Diamond cup set"],
    productHandles: ["pavora-mill-27-planetary-grinder", "pavora-dens-7-edge-grinder", "pavora-hepa-vac-prop"],
  },
  {
    slug: "lot-maintenance-crew",
    title: "Lot Maintenance Crew",
    audience: "Paving and property-management routes",
    summary: "Crack seal, sealcoat, then stripe. The sequence lots actually need.",
    price: 16800,
    monthly: 467,
    includes: ["Melt-120 crack melter", "Coat-Spray 300", "Lotline Walk striper", "Stencil bank"],
    productHandles: ["pavora-melt-120-melter", "pavora-coat-spray-300", "pavora-lotline-walk"],
  },
  {
    slug: "marking-crew",
    title: "Marking Crew",
    audience: "Municipal and striping subcontractors",
    summary: "Remove the old legend, lay thermoplastic, drop beads.",
    price: 26800,
    monthly: 744,
    includes: ["Thermark Handliner", "Stripe-Mill 12", "Glass beads", "Die set"],
    productHandles: ["pavora-thermark-handliner", "pavora-stripe-mill-12"],
  },
  {
    slug: "blast-shop-crew",
    title: "Blast Shop Crew",
    audience: "Restoration and industrial cleaning shops",
    summary: "Soda pot plus recovery vac so media does not leave the building.",
    price: 19800,
    monthly: 550,
    includes: ["Soda-Pro 250", "Media-Vac Recovery", "Soda media starter"],
    productHandles: ["pavora-soda-pro-250", "pavora-media-vac-recovery"],
  },
  {
    slug: "roof-intel-crew",
    title: "Roof Intel Crew",
    audience: "Roofing companies and building inspectors",
    summary: "Fly the roof, scan for moisture, deliver the PDF before you leave the lot.",
    price: 17200,
    monthly: 478,
    includes: ["Skydeck RTK drone", "Thermascan Pro", "Roof-Report Station"],
    productHandles: ["pavora-skydeck-rtk", "pavora-thermascan-pro", "pavora-roof-report-station"],
  },
  {
    slug: "envelope-crew",
    title: "Envelope Crew",
    audience: "Facade and joint-sealing contractors",
    summary: "Prep the joint, pump the sealant, keep the elevation moving.",
    price: 9400,
    monthly: 261,
    includes: ["Facade Pump", "Joint-Prep Grinder", "Seal-Gun Bulk"],
    productHandles: ["pavora-facade-pump", "pavora-joint-prep-grinder", "pavora-seal-gun-bulk"],
  },
  {
    slug: "garage-restore-crew",
    title: "Garage Restore Crew",
    audience: "Parking garage restoration",
    summary: "Injection, joints, striping, and coatings specified as one invoice.",
    price: 24600,
    monthly: 683,
    includes: ["Injecta-PU pump", "Joint-Saw 18", "Joint-Fill Pump", "Lotline Walk", "Coating starter"],
    productHandles: ["pavora-garage-restore-pack"],
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
        body: "A 27-inch planetary is the right default for commercial slabs. Edge grinders exist because planetaries cannot hug a column. If you only buy the big machine, you will leave a halo that every client notices.",
      },
      {
        heading: "Dust is the job",
        body: "Silica rules are not optional. Spec a HEPA extractor with the grinder, not after the first inspection. Vac ports and skirts are part of the machine, not accessories.",
      },
      {
        heading: "What to budget",
        body: "A serious grind-and-polish crew lands between $18,000 and $25,000 for grinder, edge, vac, and cups. Ride-on planetaries and quote-only mills sit higher. Diamonds are a monthly cost, not a one-time invoice.",
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
        heading: "Packers matter",
        body: "The pump is only as good as the port. Mechanical packers, surface seal, and a flush kit are not optional. Pavora stocks packers for seven years from purchase.",
      },
    ],
  },
  {
    slug: "foam-leveling-vs-mudjacking",
    title: "Polyurethane Slab Leveling vs. Mudjacking",
    dek: "Small ports, fast cure, and when foam is the wrong call.",
    category: "Buying guides",
    readMinutes: 6,
    sections: [
      {
        heading: "Why foam",
        body: "Foam goes through dime-size holes, cures in minutes, and does not add a swamp of slurry under the slab. That is why occupied sidewalks and warehouse aisles prefer it.",
      },
      {
        heading: "When not to",
        body: "Voids the size of a room, soils that will keep moving, and slabs that are already broken into islands still need excavation or replacement. Foam is a lift tool, not a miracle.",
      },
    ],
  },
  {
    slug: "sealcoat-then-stripe",
    title: "Why Sealcoat Before You Stripe",
    dek: "The sequence that keeps parking-lot paint from peeling in August.",
    category: "Trade guides",
    readMinutes: 5,
    sections: [
      {
        heading: "Coat, cure, then paint",
        body: "Striping over oxidized asphalt is how arrows ghost in a season. Sealcoat first, let it cure, then stripe. Pavora specs spray skids and walk-behind stripers as a pair for that reason.",
      },
      {
        heading: "Crack seal is not optional",
        body: "Water in the crack is what blows the lot apart. Melt and wand the cracks before the sealer so you are not painting over a failure.",
      },
    ],
  },
  {
    slug: "thermoplastic-vs-paint",
    title: "Thermoplastic vs. Paint for Road Markings",
    dek: "When a parking-lot painter should step up to melt, and when paint is still the job.",
    category: "Buying guides",
    readMinutes: 7,
    sections: [
      {
        heading: "Durability",
        body: "Thermoplastic survives traffic that paint will not — crosswalks, bike lanes, stop bars, school legends. Paint still wins on stall lines that get restriped every year.",
      },
      {
        heading: "Removal is part of the sale",
        body: "If you lay thermoplastic, you will eventually mill it off. Spec a line mill or water-blast unit with the liner or you will subcontract the ugly half of the job.",
      },
    ],
  },
  {
    slug: "dry-ice-vs-soda-vs-laser",
    title: "Dry Ice, Soda, or Laser Cleaning?",
    dek: "How to pick a non-sand process for machinery, buildings, and restoration.",
    category: "Buying guides",
    readMinutes: 8,
    sections: [
      {
        heading: "Dry ice",
        body: "Pellets sublimate. No secondary waste. Good on machinery, electrics, and molds. Needs air volume and a pellet supply.",
      },
      {
        heading: "Soda",
        body: "Soft abrasive. Strips paint and soot without a heavy profile. Leaves media you must recover indoors.",
      },
      {
        heading: "Laser",
        body: "No media at all. Precise. Higher ticket, safety protocol, and fume extraction. Right for rust, welds, and shops that cannot store blast media.",
      },
    ],
  },
  {
    slug: "drone-and-thermal-roofs",
    title: "Drone + Thermal Roof Inspections",
    dek: "How roofing companies produce photographic and moisture reports without a tear-off.",
    category: "Trade guides",
    readMinutes: 6,
    sections: [
      {
        heading: "Fly first",
        body: "An RTK drone gives you the photo set and the map. A handheld radiometric camera confirms wet insulation. Moisture meters confirm the IR. None of the three is optional if you are writing a report a lawyer might read.",
      },
      {
        heading: "After sundown",
        body: "Thermal on a black roof at noon is noise. Survey after sundown or before sunrise. Pavora’s IR array exists for big-box roofs that take all night.",
      },
    ],
  },
  {
    slug: "parking-garage-restoration-stack",
    title: "The Parking Garage Restoration Stack",
    dek: "Injection, joints, waterproofing, striping, and coatings as one crew — not five subcontractors.",
    category: "Business",
    readMinutes: 9,
    sections: [
      {
        heading: "The order of operations",
        body: "Saw the joints, inject the cracks, patch the spalls, coat the deck, then stripe. Reverse that order and you stripe a deck you are about to grind.",
      },
      {
        heading: "One invoice",
        body: "Garage owners do not want five vendors. Pavora’s Garage Restore Pack is specified so a restoration contractor can bid the bay as a single freight plan.",
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

import { DiningStation } from './types';

export const EXPERIENCE_HIGHLIGHTS = [
  {
    title: "Sourcing",
    subtitle: "Sacred Terroir",
    description: "Every micro-green, root vegetable, and rare protein is sourced in tandem with heritage farms, coastal foragers, and biodynamic estates dedicated to uncompromised pedigree.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Preparation",
    subtitle: "The Alchemist's Touch",
    description: "Centuries-old French techniques are synthesized with contemporary physical gastronomy. We cure, smoke, ferment, and flame each element tableside to engage all five senses.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Atmosphere",
    subtitle: "A Sanctuary of Light",
    description: "Crafted by award-winning architects, our space employs Chiaroscuro design dynamics. Shadows and golden beams of projection light contour the table, transforming food into fine art.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
  }
];

export const STATIONS: DiningStation[] = [
  {
    id: 'cold-harvest',
    title: 'Cold Harvest',
    subtitle: "L'Estaminet Potager",
    description: "An garden exhibition of botanical purity. We celebrate the raw, the cured, and the fermented, showcasing custom heirloom flora harvested at peak maturity.",
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800', // purple beets
    items: [
      {
        name: "Emerald & Onyx Beets",
        description: "Shaved target beets, cold-pressed hazelnut vinaigrette, charred goat cheese snow, wildflower lavender honey.",
        tags: ["Gluten-Free", "Vegetarian"]
      },
      {
        name: "Forest Umbra Caprese",
        description: "Heritage black prince tomatoes, hand-stretched burrata injected with white truffle oil, crystallised basil leaves.",
        tags: ["Vegetarian"]
      },
      {
        name: "Fermented Roots & Nectar",
        description: "Sake-cured radish, compressed sweet amber melons, frozen raspberry dust, mint oil infusion.",
        tags: ["Vegan", "Gluten-Free"]
      }
    ]
  },
  {
    id: 'ocean-bounty',
    title: 'Ocean Bounty',
    subtitle: "Le Festin Atlantique",
    description: "A continuous tide of deep-sea treasures. From pristine hand-dived bivalves to meticulously chilled crustacea, curated to preserve the bracing salinity of the oceanic shelf.",
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=800', // seafood tower plate
    items: [
      {
        name: "The Royal Shell Assembly",
        description: "Freshly shucked Kumamoto oysters, French red wine mignonette droplets, caviar pearls, seaweed mist.",
        tags: ["Signature", "Shellfish"]
      },
      {
        name: "Glacier King Crab Leg",
        description: "Melted saffron-steeped butter, Meyer lemon emulsion, micro-chives, smoked sea salt sprinkle.",
        tags: ["Gluten-Free", "Shellfish"]
      },
      {
        name: "Citrus-Cured Atlantic Scallops",
        description: "Paper-thin Hokkaido scallops, blood orange reduction, avocado mousse, culinary gold leaf.",
        tags: ["Raw", "Gluten-Free"]
      }
    ]
  },
  {
    id: 'fire-coal',
    title: 'Fire & Coal',
    subtitle: "La Flamme de l'Artisan",
    description: "The theatrical center of Lumière. Premium primal cuts are dry-aged in-house for up to 45 days, then kissed by cherrywood and white-hot binchotan embers.",
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800', // grill steak smoking
    items: [
      {
        name: "A5 Miyazaki Wagyu Strip",
        description: "Perfectly seared over binchotan charcoal, fermented black garlic paste, micro-greens, smoked sea salt.",
        tags: ["Signature", "Premium High-Grade"]
      },
      {
        name: "Cherrywood Smoked Ribeye",
        description: "Dry-aged 45 days, crusted with local wild herbs, tableside hickory smoke dome dome presentation.",
        tags: ["Gluten-Free"]
      },
      {
        name: "Truffle Glazed Lamb Chops",
        description: "Slowly flame-roasted over direct wood fire, fresh rosemary-infused bone reduction, garlic-confit puree.",
        tags: ["Gluten-Free"]
      }
    ]
  },
  {
    id: 'grand-finale',
    title: 'Grand Finale',
    subtitle: "L'Apothéose-Sucrée",
    description: "A gallery of sweet kinetic sculptures. Watch our pastry artisans pour warm coulis, blow fine glass-sugar domes, and custom-spin desserts tailored to your palate.",
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800', // chocolate sphere dessert
    items: [
      {
        name: "The Lumière Chocolate Eclipse",
        description: "Dark chocolate sphere, toasted Madagascar vanilla pod ice cream core, hot salted caramel pour-over melt.",
        tags: ["Signature", "Vegetarian"]
      },
      {
        name: "Ambrose Soufflé de Grand Marnier",
        description: "Exquisite rising orange cognac soufflé, hand-whipped double cream, grated Valrhona chocolate dust.",
        tags: ["Baked Fresh", "Vegetarian"]
      },
      {
        name: "Botanist Pâtisserie Macarons",
        description: "Assorted shells piped with rose liqueur, lavender ganache, and golden jasmine-infused cream.",
        tags: ["Gluten-Free", "Vegetarian"]
      }
    ]
  }
];

export const DRESS_CODE_POLICY = "Sophisticated Cocktail Attire. Collared shirts, tailored blazers, and elegant dresses are highly encouraged. Athletic apparel, beachwear, and open-toed shoes for gentlemen are respectfully prohibited.";

export const RESERVATION_POLICY = "Reservations are held for a maximum grace period of 15 minutes. Cancellations or party-size modifications must be submitted at least 24 hours prior to block schedule. Each culinary expedition is budgeted for 2.5 hours of tableside service.";

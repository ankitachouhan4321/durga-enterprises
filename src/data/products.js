

/* ==========================================
   DURGA ENTERPRISES - PRODUCT DATABASE

   Add all products in this single file.
   Each category has its own products array.
========================================== */

export const productCategories = [
  {
    id: 1,
    name: "Safety Products",
    slug: "safety-products",
    description:
      "Explore industrial safety equipment and protective products for workshops, fabrication units, construction sites and other workplaces.",

    products: [
      {
        id: "s1",
        name: "Leather Hand Gloves",
        model: "KT-101",
        image: "/img/safety/1.png",
        description:
          "Leather hand gloves for suitable industrial handling and workshop applications.",
      },
      {
        id: "s2",
        name: "Industrial Ear Muff",
        model: "KT-118",
        image: "/images/products/safety/ear-muff.jpg",
        description:
          "Hearing protection earmuffs for use in suitable industrial work environments.",
      },
      {
        id: "s3",
        name: "Half Body Safety Belt",
        model: "KT-141",
        image: "/images/products/safety/safety-belt.jpg",
        description:
          "Industrial safety belt. Confirm intended use and compatibility before selecting.",
      },
      {
        id: "s4",
        name: "Barricade Traffic Cone",
        model: "KT-143",
        image: "/images/products/safety/traffic-cone.jpg",
        description:
          "Traffic cone for identifying and marking suitable work zones and restricted areas.",
      },
    ],
  },

  {
    id: 2,
    name: "MIG & TIG Torches",
    slug: "mig-tig-torches",
    description:
      "Browse MIG and TIG welding torches and related torch components for industrial welding applications.",

    products: [
      {
        id: "mig-701",
        name: "MIG Welding Torch",
        model: "KT-701",
        image: "/images/products/mig-tig/mig-torch.jpg",
        description:
          "MIG welding torch available in different configurations. Confirm the required model and compatibility before ordering.",
      },
      {
        id: "mig-705",
        name: "MIG Torch Conical Nozzle",
        model: "KT-705",
        image: "/images/products/mig-tig/conical-nozzle.jpg",
        description:
          "Conical nozzle component for compatible MIG welding torch assemblies.",
      },
    ],
  },

  {
    id: 3,
    name: "Gas Cutters & PUG Cutting Machines",
    slug: "gas-cutters-pug-machines",
    description:
      "Explore gas cutting equipment, PUG cutting machines and related products for metal cutting applications.",

    products: [
      // Add gas cutting products here.
    ],
  },

  {
    id: 4,
    name: "Welding Accessories & Regulators",
    slug: "welding-accessories-regulators",
    description:
      "Explore welding accessories, regulators and related equipment for industrial and fabrication requirements.",

    products: [
      // Add welding accessories and regulators here.
    ],
  },

  {
    id: 5,
    name: "Brass Parts",
    slug: "brass-parts",
    description:
      "Browse brass components and fittings available for relevant industrial applications.",

    products: [
      // Add brass parts here.
    ],
  },
];

/* Total number of products */
export const getTotalProducts = () =>
  productCategories.reduce(
    (total, category) => total + category.products.length,
    0
  );

/* Find a category using its URL slug */
export const getCategoryBySlug = (slug) =>
  productCategories.find(
    (category) => category.slug === slug
  );
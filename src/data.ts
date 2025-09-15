const dropdownValueTypes = {
  type1: ["none", "mild", "moderate", "severe"],
  type2: ["none", "occasional", "frequent"],
  type3: ["none", "light", "heavy"],
};
const { type1, type2, type3 } = dropdownValueTypes;

export const accordionContent = [
  {
    accordionName: "Q1 — Safety & basics (Tier-0 gates)",
    data: [
      {
        group: "sex",
        questions: [
          {
            text: "Male at birth",
            features: [
              { id: "Male Length", weight: "Require", gate: "M" },
              { id: "Female Length", weight: "Contraindicated", gate: "M" },
              { id: "Female Length+", weight: "Contraindicated", gate: "M" },
              { id: "Handle", weight: "Contraindicated", gate: "M" },
            ],
          },
          {
            text: "Female at birth",
            features: [
              { id: "Female Length", weight: "Stongly prefer", gate: "F" },
              { id: "Female Length+", weight: "Stongly prefer", gate: "F" },
              { id: "Smaller Diameter", weight: "", gate: "F" }, //
            ],
          },
        ],
      },
      /*{
        text: "Has latex allergy",
        features: [{ id: "red_rubber_latex", weight: -999, goalWeight: 1 }],
      },*/
      {
        text: "Neobladder",
        features: [
          { id: "2-4 eyelets", weight: "Require" },
          { id: "Open-ended", weight: "Require" },
          { id: "Microhole eyelets", weight: "Contraindicated" },
        ],
      },
    ],
  },
  {
    accordionName: "Q2 — Anatomy & passage (structural/pathway issues)",
    data: [
      {
        text: "Stricture",
        features: [
          { id: "Less Rigid Core", weight: "Avoid" },
          { id: "More Rigid Core", weight: "Prefer" },
          { id: "Wider diameter", weight: "Prefer" },
        ],
      },
      {
        text: "BPH",
        features: [
          { id: "More Rigid Core", weight: "Prefer", gate: "M" },
          { id: "Tapered / Tiemann tips", weight: "Stongly prefer", gate: "M" },
          { id: "Olice, Flex, Ergothan tips", weight: "Prefer", gate: "M" },
          { id: "Stripe", weight: "Stongly prefer", gate: "M" },
          { id: "Straight tips", weight: "Neutral", gate: "M" }, //
          { id: "Less Rigid Core", weight: "Avoid", gate: "M" },
        ],
      },
      {
        text: "Tortuous urethra",
        features: [
          { id: "More Rigid Core", weight: "Prefer" },
          { id: "Olice, Flex, Ergothan tips", weight: "Stongly prefer" },
          { id: "Tapered / Tiemann tips", weight: "Avoid" },
          { id: "Less Rigid Core", weight: "Avoid" },
        ],
      },
      {
        text: "Pelvic prolapse",
        features: [
          { id: "More Rigid Core", weight: "Stongly prefer", gate: "F" },
          { id: "Less Rigid Core", weight: "Strongly avoid", gate: "F" },
        ],
      },
      {
        text: "False passage",
        features: [{ id: "More Rigid Core", weight: "Prefer" }],
      },
      /*{
        group: "obesity",
        questions: type1.map((x) => ({
          text: `Obesity / body habitus: ${x}`,
          features: [
            {
              id: "Female Length+",
              requiredScale: 2,
              weight: 2,
              goalWeight: 1,
            },
          ],
        })),
      },*/
    ],
  },
  {
    accordionName: "Q3 — Infection, drainage & debris risk",
    data: [
      {
        group: "recurrent UTIs",
        questions: type2.map((x) => ({
          text: `Recurrent UTIs: ${x}`,
          features: [
            { id: "Bag sleeve", requiredScale: 1, weight: "Prefer" },
            {
              id: "Introducer tips",
              requiredScale: 1,
              weight: "Stongly prefer",
            },
            { id: "Pre-lubricate", requiredScale: 1, weight: "Neutral" }, //
            {
              id: "Hydrophillic coated",
              requiredScale: 1,
              weight: "Stongly prefer",
            },
            {
              id: "IAS (integrated ampiphillic surfactant)",
              requiredScale: 1,
              weight: "Prefer",
            },
            { id: "2-4 eyelets", requiredScale: 1, weight: "Neutral" }, //
            {
              id: "Complete/closed system",
              requiredScale: 2,
              weight: "Stongly prefer",
            },
            { id: "Full sleeve", requiredScale: 1, weight: "Prefer" },
            { id: "Partial sleeve", requiredScale: 1, weight: "Prefer" },
            { id: "Manual lubrication", requiredScale: 1, weight: "Avoid" },
            { id: "Microhole eyelets", requiredScale: 1, weight: "Neutral" }, //
          ],
        })),
      },
      {
        text: "Immunosupression",
        features: [{ id: "Complete/closed system", weight: "Stongly prefer" }],
      },
      {
        text: "Trouble fully draining (due to external anatomy)",
        features: [{ id: "Female Length+", weight: "Prefer", gate: "F" }],
      },
      {
        group: "Sediment, mucus, or visible particles",
        questions: type3.map((x) => ({
          text: `Sediment, mucus, or visible particles: ${x}`,
          features: [
            { id: "2-4 eyelets", requiredScale: 1, weight: "Stongly prefer" },
            {
              id: "Microhole eyelets",
              requiredScale: 1,
              weight: "Contraindicated",
            },
          ],
        })),
      },
      {
        group: "Incomplete emptying",
        questions: type1.map((x) => ({
          text: `Incomplete emptying: ${x}`,
          features: [
            { id: "Microhole eyelets", requiredScale: 1, weight: "Prefer" },
            { id: "2-4 eyelets", requiredScale: 1, weight: "Prefer" },
          ],
        })),
      },
    ],
  },
  {
    accordionName: "Q4 — Neuro / sensation",
    data: [
      {
        text: "SCI",
        features: [
          { id: "Straight tips", weight: "Neutral" }, //
          { id: "Tapered / Tiemann tips", weight: "Neutral" }, //
        ],
      },
      {
        text: "Early SCI",
        features: [{ id: "Microhole eyelets", weight: "Strongly avoid" }],
      },
      {
        text: "Neuropathic bladder",
        features: [
          { id: "2-4 eyelets", weight: "Neutral" }, //
        ],
      },
      {
        group: "Reduced sensitivity",
        questions: type1.map((x) => ({
          text: `Reduced sensitivity: ${x}`,
          features: [
            { id: "Stripe", requiredScale: 1, weight: "Prefer" },
            {
              id: "Tapered / Tiemann tips",
              requiredScale: 1,
              weight: "Neutral",
            }, //
          ],
        })),
      },
    ],
  },
  {
    accordionName: "Q5 — Symptoms during use (insertion/withdrawal)",
    data: [
      {
        group: "Pain/discomfort",
        questions: type1.map((x) => ({
          text: `Pain/discomfort: ${x}`,
          features: [
            { id: "Less Rigid Core", requiredScale: 1, weight: "Prefer" },
            { id: "Hydrophillic coated", requiredScale: 1, weight: "Prefer" },
            {
              id: "IAS (integrated ampiphillic surfactant)",
              requiredScale: 1,
              weight: "Prefer",
            },
            { id: "Smaller Diameter", requiredScale: 1, weight: "Neutral" }, //
            {
              id: "Smoothed eyelets",
              requiredScale: 1,
              weight: "Stongly prefer",
            },
            { id: "More Rigid Core", requiredScale: 1, weight: "Avoid" },
            { id: "Pre-lubricate", requiredScale: 1, weight: "Neutral" }, //
            { id: "Manual lubrication", requiredScale: 1, weight: "Neutral" }, //
            { id: "Wider diameter", requiredScale: 1, weight: "Neutral" }, //
            { id: "2-4 eyelets", requiredScale: 1, weight: "Neutral" }, //
          ],
        })),
      },
      {
        group: "Sticking or dragging",
        questions: type1.map((x) => ({
          text: `Sticking or dragging: ${x}`,
          features: [
            {
              id: "IAS (integrated ampiphillic surfactant)",
              requiredScale: 1,
              weight: "Stongly prefer",
            },
            { id: "Hydrophillic coated", requiredScale: 1, weight: "Avoid" }, //
          ],
        })),
      },
      {
        group: "Bleeding",
        questions: type1.map((x) => ({
          text: `Bleeding: ${x}`,
          features: [
            {
              id: "Smoothed eyelets",
              requiredScale: 1,
              weight: "Stongly prefer",
            },
            { id: "Less Rigid Core", requiredScale: 1, weight: "Prefer" },
            { id: "Hydrophillic coated", requiredScale: 1, weight: "Prefer" },
            {
              id: "IAS (integrated ampiphillic surfactant)",
              requiredScale: 1,
              weight: "Stongly prefer",
            },
            { id: "More Rigid Core", requiredScale: 1, weight: "Avoid" },
            { id: "Pre-lubricate", requiredScale: 1, weight: "Neutral" }, //
            { id: "2-4 eyelets", requiredScale: 1, weight: "Stongly prefer" },
            { id: "Microhole eyelets", requiredScale: 1, weight: "Neutral" }, //
          ],
        })),
      },
    ],
  },
  {
    accordionName: "Q6 — Dexterity, cognition & support",
    data: [
      {
        group: "Poor dexterity",
        questions: type1.map((x) => ({
          text: `Poor dexterity: ${x}`,
          features: [
            {
              id: "Female Length+",
              requiredScale: 1,
              weight: "Neutral",
              gate: "F",
            }, //
            { id: "More Rigid Core", requiredScale: 1, weight: "Neutral" }, //
            { id: "Hydrophillic coated", requiredScale: 1, weight: "Neutral" }, //
            {
              id: "IAS (integrated ampiphillic surfactant)",
              requiredScale: 1,
              weight: "Neutral", //
            },
            { id: "Pre-lubricate", requiredScale: 1, weight: "Prefer" },
            { id: "Full sleeve", requiredScale: 1, weight: "Stongly prefer" },
            { id: "Partial sleeve", requiredScale: 1, weight: "Prefer" },
            { id: "Manual lubrication", requiredScale: 1, weight: "Avoid" },
            {
              id: "Female Length",
              requiredScale: 1,
              weight: "Neutral",
              gate: "F",
            }, //
            { id: "Handle", requiredScale: 1, weight: "Neutral", gate: "F" }, //
            { id: "Introducer tips", requiredScale: 1, weight: "Neutral" }, //
            {
              id: "Separate water sachet",
              requiredScale: 1,
              weight: "Neutral",
            }, //
            {
              id: "Compact or pocket size",
              requiredScale: 1,
              weight: "Neutral",
            }, //
          ],
        })),
      },
      {
        text: "Wheelchair use (female)",
        features: [
          { id: "Male Length", weight: "Prefer", gate: "F" },
          { id: "Complete/closed system", weight: "Prefer", gate: "F" },
        ],
      },
      {
        text: "Wheelchair use (male)",
        features: [
          { id: "Complete/closed system", weight: "Prefer", gate: "M" },
        ],
      },
      {
        text: "Trouble reaching genitals",
        features: [{ id: "Male Length", weight: "Prefer", gate: "F" }],
      },
      {
        text: "First time or inexperienced",
        features: [
          { id: "Less Rigid Core", weight: "Neutral" }, //
          { id: "Microhole eyelets", weight: "Neutral" }, //
          { id: "More Rigid Core", weight: "Neutral" }, //
          { id: "Partial sleeve", weight: "Neutral" }, //
          { id: "Introducer tips", weight: "Neutral" }, //
        ],
      },
    ],
  },
  {
    accordionName: "Q7 — Lifestyle, constraints & environment",
    data: [
      {
        text: "Active / on the go",
        features: [
          { id: "Compact or pocket size", weight: "Stongly prefer" },
          { id: "Pre-lubricate", weight: "Prefer" },
          { id: "Hydrophillic coated", weight: "Prefer" },
          { id: "IAS (integrated ampiphillic surfactant)", weight: "Prefer" },
          { id: "Full sleeve", weight: "Stongly prefer" },
          { id: "Manual lubrication", weight: "Avoid" },
        ],
      },
      {
        text: "Discretion",
        features: [
          { id: "Female Length", weiht: "Stongly prefer", gate: "F" },
          { id: "Female Length+", weiht: "Stongly prefer", gate: "F" },
          { id: "Compact or pocket size", weiht: "Stongly prefer", gate: "F" },
          { id: "Simple packaging (medical)", weight: "Avoid" },
          { id: "Complete/closed system", weight: "Avoid" },
        ],
      },
      {
        text: "Convenience",
        features: [
          { id: "Compact or pocket size", weight: "Prefer" },
          { id: "Funnel bag compatability", weight: "Prefer" },
        ],
      },
    ],
  },
];

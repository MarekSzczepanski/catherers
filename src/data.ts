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
              { id: "Male Length", score: 1198.8, gate: "M" },
              { id: "Female Length", score: -1198.8, gate: "M" },
              { id: "Female Length+", score: -1198.8, gate: "M" },
              { id: "Handle", score: -1198.8, gate: "M" },
            ],
          },
          {
            text: "Female at birth",
            features: [
              { id: "Female Length", score: 8.8, gate: "F" },
              { id: "Female Length+", score: 3.6, gate: "F" },
              { id: "Smaller Diameter", score: 0, gate: "F" }, //
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
          { id: "2-4 eyelets", score: 1118.88 },
          { id: "Open-ended", score: 1118.88 },
          { id: "Microhole eyelets", score: -1118.88 },
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
          { id: "Less Rigid Core", score: -1.8 },
          { id: "More Rigid Core", score: 1.8 },
          { id: "Wider diameter", score: 1.8 },
        ],
      },
      {
        text: "BPH",
        features: [
          { id: "More Rigid Core", score: 5.7, gate: "M" },
          { id: "Tapered / Tiemann tips", score: 3.6, gate: "M" },
          { id: "Olice, Flex, Ergothan tips", score: 1.8, gate: "M" },
          { id: "Stripe", score: 3.6, gate: "M" },
          { id: "Straight tips", score: 0, gate: "M" }, //
          { id: "Less Rigid Core", score: -1.8, gate: "M" },
        ],
      },
      {
        text: "Tortuous urethra",
        features: [
          { id: "More Rigid Core", score: 1.8 },
          { id: "Olice, Flex, Ergothan tips", score: 2.7 },
          { id: "Tapered / Tiemann tips", score: -1.35 },
          { id: "Less Rigid Core", score: -1.8 },
        ],
      },
      {
        text: "Pelvic prolapse",
        features: [
          { id: "More Rigid Core", score: 2.7, gate: "F" },
          { id: "Less Rigid Core", score: 0, gate: "F" },
        ],
      },
      {
        text: "False passage",
        features: [{ id: "More Rigid Core", score: 1.8 }],
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
            { id: "Bag sleeve", requiredScale: 1, score: 4.5 },
            { id: "Introducer tips", requiredScale: 1, score: 12 },
            { id: "Pre-lubricate", requiredScale: 1, score: 0 }, //
            { id: "Hydrophillic coated", requiredScale: 1, score: 12 },
            {
              id: "IAS (integrated ampiphillic surfactant)",
              requiredScale: 1,
              score: 6,
            },
            { id: "2-4 eyelets", requiredScale: 1, score: 0 }, //
            { id: "Complete/closed system", requiredScale: 2, score: 12 },
            { id: "Full sleeve", requiredScale: 1, score: 4.5 },
            { id: "Partial sleeve", requiredScale: 1, score: 4.5 },
            { id: "Manual lubrication", requiredScale: 1, score: -6 },
            { id: "Microhole eyelets", requiredScale: 1, score: 0 }, //
          ],
        })),
      },
      {
        text: "Immunosupression",
        features: [{ id: "Complete/closed system", score: 12 }],
      },
      {
        text: "Trouble fully draining (due to external anatomy)",
        features: [{ id: "Female Length+", score: 1.2, gate: "F" }],
      },
      {
        group: "Sediment, mucus, or visible particles",
        questions: type3.map((x) => ({
          text: `Sediment, mucus, or visible particles: ${x}`,
          features: [
            { id: "2-4 eyelets", requiredScale: 1, score: 3.36 },
            { id: "Microhole eyelets", requiredScale: 1, score: -839.16 },
          ],
        })),
      },
      {
        group: "Incomplete emptying",
        questions: type1.map((x) => ({
          text: `Incomplete emptying: ${x}`,
          features: [
            { id: "Microhole eyelets", requiredScale: 1, score: 0.6 },
            { id: "2-4 eyelets", requiredScale: 1, score: 0.6 },
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
          { id: "Straight tips", score: 0 }, //
          { id: "Tapered / Tiemann tips", score: 0 }, //
        ],
      },
      {
        text: "Early SCI",
        features: [{ id: "Microhole eyelets", score: -10 }],
      },
      {
        text: "Neuropathic bladder",
        features: [
          { id: "2-4 eyelets", score: 0 }, //
        ],
      },
      {
        group: "Reduced sensitivity",
        questions: type1.map((x) => ({
          text: `Reduced sensitivity: ${x}`,
          features: [
            { id: "Stripe", requiredScale: 1, score: 1.8 },
            { id: "Tapered / Tiemann tips", requiredScale: 1, score: 0 }, //
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
            { id: "Less Rigid Core", requiredScale: 1, score: 3.6 },
            { id: "Hydrophillic coated", requiredScale: 1, score: 3.6 },
            {
              id: "IAS (integrated ampiphillic surfactant)",
              requiredScale: 1,
              score: 3.6,
            },
            { id: "Smaller Diameter", requiredScale: 1, score: 0 }, //
            { id: "Smoothed eyelets", requiredScale: 1, score: 7.2 },
            { id: "More Rigid Core", requiredScale: 1, score: -3.6 },
            { id: "Pre-lubricate", requiredScale: 1, score: 0 }, //
            { id: "Manual lubrication", requiredScale: 1, score: 0 }, //
            { id: "Wider diameter", requiredScale: 1, score: 0 }, //
            { id: "2-4 eyelets", requiredScale: 1, score: 0 }, //
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
              score: 9.6,
            },
            { id: "Hydrophillic coated", requiredScale: 1, score: 0 }, //
          ],
        })),
      },
      {
        group: "Bleeding",
        questions: type1.map((x) => ({
          text: `Bleeding: ${x}`,
          features: [
            { id: "Smoothed eyelets", requiredScale: 1, score: 9.6 },
            { id: "Less Rigid Core", requiredScale: 1, score: 4.8 },
            { id: "Hydrophillic coated", requiredScale: 1, score: 4.8 },
            {
              id: "IAS (integrated ampiphillic surfactant)",
              requiredScale: 1,
              score: 9.6,
            },
            { id: "More Rigid Core", requiredScale: 1, score: -4.8 },
            { id: "Pre-lubricate", requiredScale: 1, score: 0 }, //
            { id: "2-4 eyelets", requiredScale: 1, score: 9.6 },
            { id: "Microhole eyelets", requiredScale: 1, score: 0 }, //
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
            { id: "Female Length+", requiredScale: 1, score: 0, gate: "F" }, //
            { id: "More Rigid Core", requiredScale: 1, score: 0 }, //
            { id: "Hydrophillic coated", requiredScale: 1, score: 0 }, //
            {
              id: "IAS (integrated ampiphillic surfactant)",
              requiredScale: 1,
              score: 0, //
            },
            { id: "Pre-lubricate", requiredScale: 1, score: 1.8 },
            { id: "Full sleeve", requiredScale: 1, score: 3.6 },
            { id: "Partial sleeve", requiredScale: 1, score: 1.8 },
            { id: "Manual lubrication", requiredScale: 1, score: -1.8 },
            { id: "Female Length", requiredScale: 1, score: 0, gate: "F" }, //
            { id: "Handle", requiredScale: 1, score: 0, gate: "F" }, //
            { id: "Introducer tips", requiredScale: 1, score: 0 }, //
            { id: "Separate water sachet", requiredScale: 1, score: 0 }, //
            { id: "Compact or pocket size", requiredScale: 1, score: 0 }, //
          ],
        })),
      },
      {
        text: "Wheelchair use (female)",
        features: [
          { id: "Male Length", score: 1.8, gate: "F" },
          { id: "Complete/closed system", score: 1.8, gate: "F" },
        ],
      },
      {
        text: "Wheelchair use (male)",
        features: [{ id: "Complete/closed system", score: 1.8, gate: "M" }],
      },
      {
        text: "Trouble reaching genitals",
        features: [{ id: "Male Length", score: 1.2, gate: "F" }],
      },
      {
        text: "First time or inexperienced",
        features: [
          { id: "Less Rigid Core", score: 0 }, //
          { id: "Microhole eyelets", score: 0 }, //
          { id: "More Rigid Core", score: 0 }, //
          { id: "Partial sleeve", score: 0 }, //
          { id: "Introducer tips", score: 0 }, //
        ],
      },
    ],
  },
  {
    accordionName: "Q9 — Lifestyle, constraints & environment",
    data: [
      {
        text: "Active / on the go",
        features: [
          { id: "Compact or pocket size", score: 1.2 },
          { id: "Pre-lubricate", score: 6.3 },
          { id: "Hydrophillic coated", score: 6.3 },
          { id: "IAS (integrated ampiphillic surfactant)", score: 6.3 },
          { id: "Full sleeve", score: 13.8 },
          { id: "Manual lubrication", score: -6.9 },
        ],
      },
      {
        text: "Discretion",
        features: [
          { id: "Female Length", score: 1.2, gate: "F" },
          { id: "Female Length+", score: 1.2, gate: "F" },
          { id: "Compact or pocket size", score: 1.2, gate: "F" },
          { id: "Simple packaging (medical)", score: -0.6 },
          { id: "Complete/closed system", score: -0.6 },
        ],
      },
      {
        text: "Convenience",
        features: [
          { id: "Compact or pocket size", score: 0.6 },
          { id: "Funnel bag compatability", score: 1.8 },
        ],
      },
    ],
  },
];

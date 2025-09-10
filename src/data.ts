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
              { id: "Male Length", score: 1198.8 },
              { id: "Female Length", score: -1198.8 },
              { id: "Female Length+", score: -1198.8 },
              { id: "Handle", score: -1198.8 },
            ],
          },
          {
            text: "Female at birth",
            features: [
              { id: "Female Length", score: 8.8 },
              { id: "Female Length+", score: 4.8 },
              { id: "Smaller Diameter", score: 0 }, //
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
          { id: "Less Rigid Core", score: 1.2 },
          { id: "More Rigid Core", score: 3.6 },
          { id: "Wider diameter", score: 3.6 },
        ],
      },
      {
        text: "BPH",
        features: [
          { id: "More Rigid Core", score: 11.4 },
          { id: "Tapered / Tiemann tips", score: 4.8 },
          { id: "Olice, Flex, Ergothan tips", score: 3.6 },
          { id: "Stripe", score: 4.8 },
          { id: "Straight tips", score: 0 }, //
          { id: "Less Rigid Core", score: 1.2 },
        ],
      },
      {
        text: "Tortuous urethra",
        features: [
          { id: "More Rigid Core", score: 3.6 },
          { id: "Olice, Flex, Ergothan tips", score: 3.6 },
          { id: "Tapered / Tiemann tips", score: 0.9 },
          { id: "Less Rigid Core", score: 1.2 },
        ],
      },
      {
        text: "Pelvic prolapse",
        features: [
          { id: "More Rigid Core", score: 3.6 },
          { id: "Less Rigid Core", score: 0 },
        ],
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
            { id: "Bag sleeve", requiredScale: 1, score: 9 },
            { id: "Introducer tips", requiredScale: 1, score: 16 },
            { id: "Pre-lubricate", requiredScale: 1, score: 0 }, //
            { id: "Hydrophillic coated", requiredScale: 1, score: 16 },
            {
              id: "IAS (integrated ampiphillic surfactant)",
              requiredScale: 1,
              score: 12,
            },
            { id: "2-4 eyelets", requiredScale: 1, score: 8 },
            { id: "Complete/closed system", requiredScale: 2, score: 16 },
            { id: "Full sleeve", requiredScale: 1, score: 9 },
            { id: "Partial sleeve", requiredScale: 1, score: 9 },
            { id: "Manual lubrication", requiredScale: 1, score: 4 },
            { id: "Microhole eyelets", requiredScale: 1, score: 0 }, //
          ],
        })),
      },
      {
        text: "Immunosupression",
        features: [{ id: "Complete/closed system", score: 16 }],
      },
      {
        text: "Trouble fully draining (due to external anatomy)",
        features: [{ id: "Female Length+", score: 2.4 }],
      },
      {
        group: "Sediment, mucus, or visible particles",
        questions: type3.map((x) => ({
          text: `Sediment, mucus, or visible particles: ${x}`,
          features: [
            { id: "2-4 eyelets", requiredScale: 1, score: 4.48 },
            { id: "Microhole eyelets", requiredScale: 1, score: -839.16 },
          ],
        })),
      },
      {
        group: "Incomplete emptying",
        questions: type1.map((x) => ({
          text: `Incomplete emptying: ${x}`,
          features: [
            { id: "Microhole eyelets", requiredScale: 1, score: 1.2 },
            { id: "2-4 eyelets", requiredScale: 1, score: 1.2 },
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
        features: [
          { id: "Microhole eyelets", score: 0 }, //
        ],
      },
      {
        text: "Neuropathic bladder",
        features: [
          { id: "2-4 eyelets", score: 0 }, //
        ],
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
            { id: "Less Rigid Core", requiredScale: 1, score: 7.2 },
            { id: "Hydrophillic coated", requiredScale: 1, score: 7.2 },
            {
              id: "IAS (integrated ampiphillic surfactant)",
              requiredScale: 1,
              score: 7.2,
            },
            { id: "Smaller Diameter", requiredScale: 1, score: 4.8 },
            { id: "Smoothed eyelets", requiredScale: 1, score: 9.6 },
            { id: "More Rigid Core", requiredScale: 1, score: 2.4 },
            { id: "Pre-lubricate", requiredScale: 1, score: 4.8 },
            { id: "Manual lubrication", requiredScale: 1, score: 4.8 },
            { id: "Wider diameter", requiredScale: 1, score: 4.8 },
            { id: "2-4 eyelets", requiredScale: 1, score: 4.8 },
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
              score: 12.8,
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
            { id: "Smoothed eyelets", requiredScale: 1, score: 12.8 },
            { id: "Less Rigid Core", requiredScale: 1, score: 9.6 },
            { id: "Hydrophillic coated", requiredScale: 1, score: 9.6 },
            {
              id: "IAS (integrated ampiphillic surfactant)",
              requiredScale: 1,
              score: 12.8,
            },
            { id: "More Rigid Core", requiredScale: 1, score: 3.2 },
            { id: "Pre-lubricate", requiredScale: 1, score: 6.4 },
            { id: "2-4 eyelets", requiredScale: 1, score: 12.8 },
            { id: "Microhole eyelets", requiredScale: 1, score: 6.4 },
          ],
        })),
      },
    ],
  },
  {
    accordionName: "Q6 — Dexterity, cognition & support",
    data: [
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
      {
        group: "Poor dexterity",
        questions: type1.map((x) => ({
          text: `Poor dexterity: ${x}`,
          features: [
            { id: "Female Length+", requiredScale: 1, score: 2.4 },
            { id: "More Rigid Core", requiredScale: 1, score: 2.4 },
            { id: "Hydrophillic coated", requiredScale: 1, score: 2.4 },
            {
              id: "IAS (integrated ampiphillic surfactant)",
              requiredScale: 1,
              score: 2.4,
            },
            { id: "Pre-lubricate", requiredScale: 1, score: 3.6 },
            { id: "Full sleeve", requiredScale: 1, score: 4.8 },
            { id: "Partial sleeve", requiredScale: 1, score: 3.6 },
            { id: "Manual lubrication", requiredScale: 1, score: 1.2 },
            { id: "Female Length", requiredScale: 1, score: 2.4 },
            { id: "Handle", requiredScale: 1, score: 2.4 },
            { id: "Introducer tips", requiredScale: 1, score: 2.4 },
            { id: "Separate water sachet", requiredScale: 1, score: 2.4 },
            { id: "Compact or pocket size", requiredScale: 1, score: 2.4 },
          ],
        })),
      },
      {
        text: "Wheelchair use (female)",
        features: [
          { id: "Male Length", score: 3.6 },
          { id: "Complete/closed system", score: 3.6 },
        ],
      },
      {
        text: "Wheelchair use (male)",
        features: [{ id: "Complete/closed system", score: 3.6 }],
      },
      {
        text: "Trouble reaching genitals",
        features: [{ id: "Male Length", score: 2.4 }],
      },
    ],
  },
  {
    accordionName: "Q9 — Lifestyle, constraints & environment",
    data: [
      {
        text: "Active / on the go",
        features: [
          { id: "Compact or pocket size", score: 1.6 },
          { id: "Pre-lubricate", score: 12.6 },
          { id: "Hydrophillic coated", score: 12.6 },
          { id: "IAS (integrated ampiphillic surfactant)", score: 12.6 },
          { id: "Full sleeve", score: 18.4 },
          { id: "Manual lubrication", score: 4.6 },
        ],
      },
      {
        text: "Discretion",
        features: [
          { id: "Female Length", score: 1.6, gate: "F" },
          { id: "Female Length+", score: 1.6, gate: "F" },
          { id: "Compact or pocket size", score: 1.6, gate: "F" },
          { id: "Simple packaging (medical)", score: 0.4 },
          { id: "Complete/closed system", score: 0.4 },
        ],
      },
      {
        text: "Convenience",
        features: [
          { id: "Compact or pocket size", score: 1.2 },
          { id: "Funnel bag compatability", score: 3.6 },
        ],
      },
    ],
  },
];

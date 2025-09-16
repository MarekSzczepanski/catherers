import type { AccordionContent } from "./types";

const dropdownValueTypes = {
  type1: ["none", "mild", "moderate", "severe"],
  type2: ["none", "occasional", "frequent"],
  type3: ["none", "light", "heavy"],
};
const { type1, type2, type3 } = dropdownValueTypes;

export const accordionContent: AccordionContent = [
  {
    accordionName: "Q1 — Safety & basics (Tier-0 gates)",
    data: [
      {
        group: "sex",
        questions: [
          {
            text: "Male at birth",
            features: [
              {
                id: "Male Length",
                weight: "Require",
                goalWeight: "anatomical_fit",
                priorityWeight: "Critical_safety",
                gate: "M",
              },
              {
                id: "Female Length",
                weight: "Contraindicated",
                goalWeight: "anatomical_fit",
                priorityWeight: "Critical_safety",
                gate: "M",
              },
              {
                id: "Female Length+",
                weight: "Contraindicated",
                goalWeight: "anatomical_fit",
                priorityWeight: "Critical_safety",
                gate: "M",
              },
              {
                id: "Handle",
                weight: "Contraindicated",
                goalWeight: "anatomical_fit",
                priorityWeight: "Critical_safety",
                gate: "M",
              },
            ],
          },
          {
            text: "Female at birth",
            features: [
              {
                isMultipleRow: true,
                data: [
                  {
                    id: "Female Length",
                    weight: "Strongly prefer",
                    goalWeight: "anatomical_fit",
                    priorityWeight: "High_clinical_effectiveness",
                    gate: "F",
                    isHighest: true,
                  },
                  {
                    id: "Female Length",
                    weight: "Prefer",
                    goalWeight: "discretion_portability",
                    priorityWeight: "Low_convenience_lifestyle",
                    gate: "F",
                  },
                  {
                    id: "Female Length",
                    weight: "Strongly prefer",
                    goalWeight: "ease_of_use_dexterity",
                    priorityWeight: "Medium_comfort_easeofuse",
                    gate: "F",
                  },
                ],
              },
              {
                id: "Female Length+",
                weight: "Strongly prefer",
                goalWeight: "navigation_difficult_anatomy",
                priorityWeight: "High_clinical_effectiveness",
                gate: "F",
              },
              {
                id: "Smaller Diameter",
                weight: "",
                goalWeight: "anatomical_fit",
                priorityWeight: "Medium_comfort_easeofuse",
                gate: "F",
              }, //
            ],
          },
        ],
      },
      {
        text: "Neobladder",
        features: [
          {
            id: "2-4 eyelets",
            weight: "Require",
            goalWeight: "debris_management",
            priorityWeight: "High_clinical_effectiveness",
          },
          {
            id: "Open-ended",
            weight: "Require",
            goalWeight: "debris_management",
            priorityWeight: "High_clinical_effectiveness",
          },
          {
            id: "Microhole eyelets",
            weight: "Contraindicated",
            goalWeight: "debris_management",
            priorityWeight: "High_clinical_effectiveness",
          },
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
          {
            id: "Less Rigid Core",
            weight: "Avoid",
            goalWeight: "navigation_difficult_anatomy",
            priorityWeight: "High_clinical_effectiveness",
          },
          {
            id: "More Rigid Core",
            weight: "Prefer",
            goalWeight: "navigation_difficult_anatomy",
            priorityWeight: "High_clinical_effectiveness",
          },
          {
            id: "Wider diameter",
            weight: "Prefer",
            goalWeight: "navigation_difficult_anatomy",
            priorityWeight: "High_clinical_effectiveness",
          },
        ],
      },
      {
        text: "BPH",
        features: [
          {
            isMultipleRow: true,
            data: [
              {
                id: "More Rigid Core",
                weight: "Prefer",
                goalWeight: "navigation_difficult_anatomy",
                priorityWeight: "High_clinical_effectiveness",
                gate: "M",
              },
              {
                id: "More Rigid Core",
                weight: "Prefer",
                goalWeight: "trauma_minimization",
                priorityWeight: "High_clinical_effectiveness",
                gate: "M",
                isHighest: true,
              },
            ],
          },
          {
            id: "Tapered / Tiemann tips",
            weight: "Strongly prefer",
            goalWeight: "navigation_difficult_anatomy",
            priorityWeight: "High_clinical_effectiveness",
            gate: "M",
          },
          {
            id: "Olice, Flex, Ergothan tips",
            weight: "Prefer",
            goalWeight: "navigation_difficult_anatomy",
            priorityWeight: "High_clinical_effectiveness",
            gate: "M",
          },
          {
            id: "Stripe",
            weight: "Strongly prefer",
            goalWeight: "navigation_difficult_anatomy",
            priorityWeight: "High_clinical_effectiveness",
            gate: "M",
          },
          {
            id: "Straight tips",
            weight: "Neutral",
            goalWeight: "navigation_difficult_anatomy",
            priorityWeight: "High_clinical_effectiveness",
            gate: "M",
          }, //
          {
            id: "Less Rigid Core",
            weight: "Avoid",
            goalWeight: "navigation_difficult_anatomy",
            priorityWeight: "High_clinical_effectiveness",
            gate: "M",
          },
        ],
      },
      {
        text: "Tortuous urethra",
        features: [
          {
            id: "More Rigid Core",
            weight: "Prefer",
            goalWeight: "navigation_difficult_anatomy",
            priorityWeight: "High_clinical_effectiveness",
          },
          {
            id: "Olice, Flex, Ergothan tips",
            weight: "Strongly prefer",
            goalWeight: "navigation_difficult_anatomy",
            priorityWeight: "Medium_comfort_easeofuse",
          },
          {
            id: "Tapered / Tiemann tips",
            weight: "Avoid",
            goalWeight: "navigation_difficult_anatomy",
            priorityWeight: "Medium_comfort_easeofuse",
          },
          {
            id: "Less Rigid Core",
            weight: "Avoid",
            goalWeight: "navigation_difficult_anatomy",
            priorityWeight: "High_clinical_effectiveness",
          },
        ],
      },
      {
        text: "Pelvic prolapse",
        features: [
          {
            id: "More Rigid Core",
            weight: "Strongly prefer",
            goalWeight: "navigation_difficult_anatomy",
            priorityWeight: "Medium_comfort_easeofuse",
            gate: "F",
          },
          {
            id: "Less Rigid Core",
            weight: "Strongly avoid",
            goalWeight: "navigation_difficult_anatomy",
            priorityWeight: "Medium_comfort_easeofuse",
            gate: "F",
          },
        ],
      },
      {
        text: "False passage",
        features: [
          {
            id: "More Rigid Core",
            weight: "Prefer",
            goalWeight: "navigation_difficult_anatomy",
            priorityWeight: "High_clinical_effectiveness",
          },
        ],
      },
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
            {
              id: "Bag sleeve",
              requiredScale: 1,
              weight: "Prefer",
              goalWeight: "infection_risk_reduction",
              priorityWeight: "Medium_comfort_easeofuse",
            },
            {
              id: "Introducer tips",
              requiredScale: 1,
              weight: "Strongly prefer",
              goalWeight: "infection_risk_reduction",
              priorityWeight: "High_clinical_effectiveness",
            },
            {
              id: "Pre-lubricate",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "infection_risk_reduction",
              priorityWeight: "High_clinical_effectiveness",
            }, //
            {
              id: "Hydrophillic coated",
              requiredScale: 1,
              weight: "Strongly prefer",
              goalWeight: "infection_risk_reduction",
              priorityWeight: "High_clinical_effectiveness",
            },
            {
              id: "IAS (integrated ampiphillic surfactant)",
              requiredScale: 1,
              weight: "Prefer",
              goalWeight: "infection_risk_reduction",
              priorityWeight: "High_clinical_effectiveness",
            },
            {
              id: "2-4 eyelets",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "infection_risk_reduction",
              priorityWeight: "High_clinical_effectiveness",
            }, //
            {
              id: "Complete/closed system",
              requiredScale: 2,
              weight: "Strongly prefer",
              goalWeight: "infection_risk_reduction",
              priorityWeight: "High_clinical_effectiveness",
            },
            {
              id: "Full sleeve",
              requiredScale: 1,
              weight: "Prefer",
              goalWeight: "infection_risk_reduction",
              priorityWeight: "Medium_comfort_easeofuse",
            },
            {
              id: "Partial sleeve",
              requiredScale: 1,
              weight: "Prefer",
              goalWeight: "infection_risk_reduction",
              priorityWeight: "Medium_comfort_easeofuse",
            },
            {
              id: "Manual lubrication",
              requiredScale: 1,
              weight: "Avoid",
              goalWeight: "infection_risk_reduction",
              priorityWeight: "High_clinical_effectiveness",
            },
            {
              id: "Microhole eyelets",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "infection_risk_reduction",
              priorityWeight: "High_clinical_effectiveness",
            }, //
          ],
        })),
      },
      {
        text: "Immunosupression",
        features: [
          {
            id: "Complete/closed system",
            weight: "Strongly prefer",
            goalWeight: "infection_risk_reduction",
            priorityWeight: "High_clinical_effectiveness",
          },
        ],
      },
      {
        text: "Trouble fully draining (due to external anatomy)",
        features: [
          {
            id: "Female Length+",
            weight: "Prefer",
            goalWeight: "anatomical_fit",
            priorityWeight: "High_clinical_effectiveness",
            gate: "F",
          },
        ],
      },
      {
        group: "Sediment, mucus, or visible particles",
        questions: type3.map((x) => ({
          text: `Sediment, mucus, or visible particles: ${x}`,
          features: [
            {
              id: "2-4 eyelets",
              requiredScale: 1,
              weight: "Strongly prefer",
              goalWeight: "debris_management",
              priorityWeight: "High_clinical_effectiveness",
            },
            {
              id: "Microhole eyelets",
              requiredScale: 1,
              weight: "Contraindicated",
              goalWeight: "debris_management",
              priorityWeight: "Medium_comfort_easeofuse",
            },
          ],
        })),
      },
      {
        group: "Incomplete emptying",
        questions: type1.map((x) => ({
          text: `Incomplete emptying: ${x}`,
          features: [
            {
              id: "Microhole eyelets",
              requiredScale: 1,
              weight: "Prefer",
              goalWeight: "Improved_drainage",
              priorityWeight: "Low_convenience_lifestyle",
            },
            {
              id: "2-4 eyelets",
              requiredScale: 1,
              weight: "Prefer",
              goalWeight: "Improved_drainage",
              priorityWeight: "Low_convenience_lifestyle",
            },
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
          {
            id: "Straight tips",
            weight: "Neutral",
            goalWeight: "ease_of_use_dexterity",
            priorityWeight: "Medium_comfort_easeofuse",
          }, //
          {
            id: "Tapered / Tiemann tips",
            weight: "Neutral",
            goalWeight: "ease_of_use_dexterity",
            priorityWeight: "Medium_comfort_easeofuse",
          }, //
        ],
      },
      {
        text: "Early SCI",
        features: [
          {
            id: "Microhole eyelets",
            weight: "Strongly avoid",
            goalWeight: "infection_risk_reduction",
            priorityWeight: "High_clinical_effectiveness",
          },
        ],
      },
      {
        text: "Neuropathic bladder",
        features: [
          {
            id: "2-4 eyelets",
            weight: "Neutral",
            goalWeight: "trauma_minimization",
            priorityWeight: "High_clinical_effectiveness",
          }, //
        ],
      },
      {
        group: "Reduced sensitivity",
        questions: type1.map((x) => ({
          text: `Reduced sensitivity: ${x}`,
          features: [
            {
              id: "Stripe",
              requiredScale: 1,
              weight: "Prefer",
              goalWeight: "ease_of_use_dexterity",
              priorityWeight: "Medium_comfort_easeofuse",
            },
            {
              id: "Tapered / Tiemann tips",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "trauma_minimization",
              priorityWeight: "Medium_comfort_easeofuse",
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
            {
              id: "Less Rigid Core",
              requiredScale: 1,
              weight: "Prefer",
              goalWeight: "trauma_minimization",
              priorityWeight: "Medium_comfort_easeofuse",
            },
            {
              id: "Hydrophillic coated",
              requiredScale: 1,
              weight: "Prefer",
              goalWeight: "trauma_minimization",
              priorityWeight: "Medium_comfort_easeofuse",
            },
            {
              id: "IAS (integrated ampiphillic surfactant)",
              requiredScale: 1,
              weight: "Prefer",
              goalWeight: "trauma_minimization",
              priorityWeight: "Medium_comfort_easeofuse",
            },
            {
              id: "Smaller Diameter",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "trauma_minimization",
              priorityWeight: "Medium_comfort_easeofuse",
            }, //
            {
              id: "Smoothed eyelets",
              requiredScale: 1,
              weight: "Strongly prefer",
              goalWeight: "trauma_minimization",
              priorityWeight: "Medium_comfort_easeofuse",
            },
            {
              id: "More Rigid Core",
              requiredScale: 1,
              weight: "Avoid",
              goalWeight: "trauma_minimization",
              priorityWeight: "Medium_comfort_easeofuse",
            },
            {
              id: "Pre-lubricate",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "trauma_minimization",
              priorityWeight: "Medium_comfort_easeofuse",
            }, //
            {
              id: "Manual lubrication",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "trauma_minimization",
              priorityWeight: "Medium_comfort_easeofuse",
            }, //
            {
              id: "Wider diameter",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "trauma_minimization",
              priorityWeight: "Medium_comfort_easeofuse",
            }, //
            {
              id: "2-4 eyelets",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "trauma_minimization",
              priorityWeight: "Medium_comfort_easeofuse",
            }, //
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
              weight: "Strongly prefer",
              goalWeight: "trauma_minimization",
              priorityWeight: "High_clinical_effectiveness",
            },
            {
              id: "Hydrophillic coated",
              requiredScale: 1,
              weight: "Avoid",
              goalWeight: "trauma_minimization",
              priorityWeight: "High_clinical_effectiveness",
            }, //
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
              weight: "Strongly prefer",
              goalWeight: "trauma_minimization",
              priorityWeight: "High_clinical_effectiveness",
            },
            {
              id: "Less Rigid Core",
              requiredScale: 1,
              weight: "Prefer",
              goalWeight: "trauma_minimization",
              priorityWeight: "High_clinical_effectiveness",
            },
            {
              id: "Hydrophillic coated",
              requiredScale: 1,
              weight: "Prefer",
              goalWeight: "trauma_minimization",
              priorityWeight: "High_clinical_effectiveness",
            },
            {
              id: "IAS (integrated ampiphillic surfactant)",
              requiredScale: 1,
              weight: "Strongly prefer",
              goalWeight: "trauma_minimization",
              priorityWeight: "High_clinical_effectiveness",
            },
            {
              id: "More Rigid Core",
              requiredScale: 1,
              weight: "Avoid",
              goalWeight: "trauma_minimization",
              priorityWeight: "High_clinical_effectiveness",
            },
            {
              id: "Pre-lubricate",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "trauma_minimization",
              priorityWeight: "High_clinical_effectiveness",
            }, //
            {
              id: "2-4 eyelets",
              requiredScale: 1,
              weight: "Strongly prefer",
              goalWeight: "trauma_minimization",
              priorityWeight: "High_clinical_effectiveness",
            },
            {
              id: "Microhole eyelets",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "trauma_minimization",
              priorityWeight: "High_clinical_effectiveness",
            }, //
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
              goalWeight: "ease_of_use_dexterity",
              priorityWeight: "Medium_comfort_easeofuse",
              gate: "F",
            }, //
            {
              id: "More Rigid Core",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "ease_of_use_dexterity",
              priorityWeight: "Medium_comfort_easeofuse",
            }, //
            {
              id: "Hydrophillic coated",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "ease_of_use_dexterity",
              priorityWeight: "Medium_comfort_easeofuse",
            }, //
            {
              id: "IAS (integrated ampiphillic surfactant)",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "ease_of_use_dexterity",
              priorityWeight: "Medium_comfort_easeofuse", //
            },
            {
              id: "Pre-lubricate",
              requiredScale: 1,
              weight: "Prefer",
              goalWeight: "ease_of_use_dexterity",
              priorityWeight: "Medium_comfort_easeofuse",
            },
            {
              id: "Full sleeve",
              requiredScale: 1,
              weight: "Strongly prefer",
              goalWeight: "ease_of_use_dexterity",
              priorityWeight: "Medium_comfort_easeofuse",
            },
            {
              id: "Partial sleeve",
              requiredScale: 1,
              weight: "Prefer",
              goalWeight: "ease_of_use_dexterity",
              priorityWeight: "Medium_comfort_easeofuse",
            },
            {
              id: "Manual lubrication",
              requiredScale: 1,
              weight: "Avoid",
              goalWeight: "ease_of_use_dexterity",
              priorityWeight: "Medium_comfort_easeofuse",
            },
            {
              id: "Female Length",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "ease_of_use_dexterity",
              priorityWeight: "Medium_comfort_easeofuse",
              gate: "F",
            }, //
            {
              id: "Handle",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "ease_of_use_dexterity",
              priorityWeight: "Medium_comfort_easeofuse",
              gate: "F",
            }, //
            {
              id: "Introducer tips",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "ease_of_use_dexterity",
              priorityWeight: "Medium_comfort_easeofuse",
            }, //
            {
              id: "Separate water sachet",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "ease_of_use_dexterity",
              priorityWeight: "Medium_comfort_easeofuse",
            }, //
            {
              id: "Compact or pocket size",
              requiredScale: 1,
              weight: "Neutral",
              goalWeight: "ease_of_use_dexterity",
              priorityWeight: "Medium_comfort_easeofuse",
            }, //
          ],
        })),
      },
      {
        text: "Wheelchair use (female)",
        features: [
          {
            id: "Male Length",
            weight: "Prefer",
            goalWeight: "ease_of_use_dexterity",
            priorityWeight: "Medium_comfort_easeofuse",
            gate: "F",
          },
          {
            id: "Complete/closed system",
            weight: "Prefer",
            goalWeight: "ease_of_use_dexterity",
            priorityWeight: "Medium_comfort_easeofuse",
            gate: "F",
          },
        ],
      },
      {
        text: "Wheelchair use (male)",
        features: [
          {
            id: "Complete/closed system",
            weight: "Prefer",
            goalWeight: "ease_of_use_dexterity",
            priorityWeight: "Medium_comfort_easeofuse",
            gate: "M",
          },
        ],
      },
      {
        text: "Trouble reaching genitals",
        features: [
          {
            id: "Male Length",
            weight: "Prefer",
            goalWeight: "anatomical_fit",
            priorityWeight: "High_clinical_effectiveness",
            gate: "F",
          },
        ],
      },
      {
        text: "First time or inexperienced",
        features: [
          {
            id: "Less Rigid Core",
            weight: "Neutral",
            goalWeight: "trauma_minimization",
            priorityWeight: "High_clinical_effectiveness",
          }, //
          {
            id: "Microhole eyelets",
            weight: "Neutral",
            goalWeight: "trauma_minimization",
            priorityWeight: "High_clinical_effectiveness",
          }, //
          {
            id: "More Rigid Core",
            weight: "Neutral",
            goalWeight: "trauma_minimization",
            priorityWeight: "High_clinical_effectiveness",
          }, //
          {
            id: "Partial sleeve",
            weight: "Neutral",
            goalWeight: "infection_risk_reduction",
            priorityWeight: "High_clinical_effectiveness",
          }, //
          {
            id: "Introducer tips",
            weight: "Neutral",
            goalWeight: "infection_risk_reduction",
            priorityWeight: "High_clinical_effectiveness",
          }, //
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
          {
            id: "Compact or pocket size",
            weight: "Strongly prefer",
            goalWeight: "discretion_portability",
            priorityWeight: "Low_convenience_lifestyle",
          },
          {
            isMultipleRow: true,
            data: [
              {
                id: "Pre-lubricate",
                weight: "Prefer",
                goalWeight: "discretion_portability",
                priorityWeight: "Low_convenience_lifestyle",
              },
              {
                id: "Pre-lubricate",
                weight: "Prefer",
                goalWeight: "infection_risk_reduction",
                priorityWeight: "High_clinical_effectiveness",
                isHighest: true,
              },
            ],
          },
          {
            isMultipleRow: true,
            data: [
              {
                id: "Hydrophillic coated",
                weight: "Prefer",
                goalWeight: "discretion_portability",
                priorityWeight: "Low_convenience_lifestyle",
              },
              {
                id: "Hydrophillic coated",
                weight: "Prefer",
                goalWeight: "infection_risk_reduction",
                priorityWeight: "High_clinical_effectiveness",
                isHighest: true,
              },
            ],
          },
          {
            isMultipleRow: true,
            data: [
              {
                id: "IAS (integrated ampiphillic surfactant)",
                weight: "Prefer",
                goalWeight: "discretion_portability",
                priorityWeight: "Low_convenience_lifestyle",
              },
              {
                id: "IAS (integrated ampiphillic surfactant)",
                weight: "Prefer",
                goalWeight: "infection_risk_reduction",
                priorityWeight: "High_clinical_effectiveness",
                isHighest: true,
              },
            ],
          },
          {
            id: "Funnel bag compatability",
            weight: "Prefer",
            goalWeight: "ease_of_use_dexterity",
            priorityWeight: "Medium_comfort_easeofuse",
          },
          {
            id: "Complete/closed system",
            weight: "Strongly prefer",
            goalWeight: "infection_risk_reduction",
            priorityWeight: "High_clinical_effectiveness",
          },
          {
            isMultipleRow: true,
            data: [
              {
                id: "Full sleeve",
                weight: "Strongly prefer",
                goalWeight: "infection_risk_reduction",
                priorityWeight: "High_clinical_effectiveness",
                isHighest: true,
              },
              {
                id: "Full sleeve",
                weight: "Strongly prefer",
                goalWeight: "ease_of_use_dexterity",
                priorityWeight: "Medium_comfort_easeofuse",
              },
            ],
          },
          {
            isMultipleRow: true,
            data: [
              {
                id: "Manual lubrication",
                weight: "Avoid",
                goalWeight: "infection_risk_reduction",
                priorityWeight: "High_clinical_effectiveness",
                isHighest: true,
              },
              {
                id: "Manual lubrication",
                weight: "Avoid",
                goalWeight: "ease_of_use_dexterity",
                priorityWeight: "Medium_comfort_easeofuse",
              },
            ],
          },
        ],
      },
      {
        text: "Discretion",
        features: [
          {
            id: "Female Length",
            weight: "Strongly prefer",
            goalWeight: "discretion_portability",
            priorityWeight: "Low_convenience_lifestyle",
            gate: "F",
          },
          {
            id: "Female Length+",
            weight: "Strongly prefer",
            goalWeight: "discretion_portability",
            priorityWeight: "Low_convenience_lifestyle",
            gate: "F",
          },
          {
            id: "Compact or pocket size",
            weight: "Strongly prefer",
            goalWeight: "discretion_portability",
            priorityWeight: "Low_convenience_lifestyle",
            gate: "F",
          },
          {
            id: "Simple packaging (medical)",
            weight: "Avoid",
            goalWeight: "discretion_portability",
            priorityWeight: "Low_convenience_lifestyle",
          },
          {
            id: "Complete/closed system",
            weight: "Avoid",
            goalWeight: "discretion_portability",
            priorityWeight: "Low_convenience_lifestyle",
          },
        ],
      },
      {
        text: "Convenience",
        features: [
          {
            id: "Compact or pocket size",
            weight: "Prefer",
            goalWeight: "discretion_portability",
            priorityWeight: "Low_convenience_lifestyle",
          },
          {
            id: "Funnel bag compatability",
            weight: "Prefer",
            goalWeight: "ease_of_use_dexterity",
            priorityWeight: "Medium_comfort_easeofuse",
          },
        ],
      },
    ],
  },
];

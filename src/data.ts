import type { AccordionContent } from "./types";

const dropdownValueTypes = {
  type1: ["none", "mild", "moderate", "severe"],
  type2: ["none", "occasional", "frequent"],
  type3: ["none", "light", "heavy"],
};
const { type1, type2, type3 } = dropdownValueTypes;

export const accordionContent: AccordionContent = [
  {
    accordionName: "Q1 - Sex at birth",
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
    ],
  },
  {
    accordionName: "Q2 - Medical history (Select any that apply)",
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
        text: "Enlarged prostate (BPH)",
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
        text: "Curved / tortuous urethra",
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
        text: "Pelvic organ prolapse",
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
        text: "Previous false passage",
        features: [
          {
            id: "More Rigid Core",
            weight: "Prefer",
            goalWeight: "navigation_difficult_anatomy",
            priorityWeight: "High_clinical_effectiveness",
          },
        ],
      },
      {
        text: "Bladder reconstruction (Neobladder)",
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
      {
        text: "Low immunity (immunosupression)",
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
        text: "Spinal cord injury",
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
        text: "Early Spinal Cord Injury (within 1 year)",
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
        text: "Nerve Bladder problem (Neuropathic Bladder)",
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
    ],
  },
  {
    accordionName:
      "Q3 - Reduced sensitivity in your pubic area (how would you describe it?)",
    data: [
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
    accordionName:
      "Q4 - Manual dexterity + reach | how would you describe your hand use? (Select any that apply)",
    data: [
      {
        group: "Manual dexterity",
        questions: type1.map((x) => ({
          text: `Manual dexterity: ${x}`,
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
        text: "Hard to see or reach urethra",
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
    ],
  },
  {
    accordionName:
      "Q5 - Have you catheterised before? (If so, select any that apply)",
    data: [
      {
        group: "Pain or discomfort during use",
        questions: type1.map((x) => ({
          text: `Pain or discomfort during use: ${x}`,
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
        group: "Sticking or dragging on withdrawal",
        questions: type1.map((x) => ({
          text: `Sticking or dragging on withdrawal: ${x}`,
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
        group: "Bleeding during use",
        questions: type1.map((x) => ({
          text: `Bleeding during use: ${x}`,
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
      {
        text: "Difficulty emptying (despite feeling 'all the way in')",
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
        text: "This is my first time / I’m still inexperienced",
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
    accordionName: "Q6 - Your lifestyle and preferences",
    data: [
      {
        text: "I am active / on the go",
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
        text: "I value discretion",
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
        text: "I value convenience",
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

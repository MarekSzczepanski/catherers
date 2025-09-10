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
              { id: "male_length", score: 1198.8 },
              { id: "female_length", score: -1198.8 },
              { id: "female_length_plus", score: -1198.8 },
              { id: "handle_lo_fric", score: -1198.8 },
            ],
          },
          {
            text: "Female at birth",
            features: [
              { id: "female_length", score: 8.8 },
              { id: "female_length_plus", score: 4.8 },
              { id: "smaller_diameter", score: 0 }, //
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
          { id: "eyelets_2_4", score: 1118.88 },
          { id: "open_ended", score: 1118.88 },
          { id: "microhole_eyelets", score: -1118.88 },
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
          { id: "less_rigid_core", score: 1.2 },
          { id: "more_rigid_core", score: 3.6 },
          { id: "wider_diameter", score: 3.6 },
        ],
      },
      {
        text: "BPH",
        features: [
          { id: "more_rigid_core", score: 11.4 },
          { id: "tapered_tiemann_tip", score: 4.8 },
          { id: "olive_flex_ergothan_tip", score: 3.6 },
          { id: "stripe_marker", score: 4.8 },
          { id: "straight_tip", score: 0 }, //
          { id: "less_rigid_core", score: 1.2 },
        ],
      },
      {
        text: "Tortuous urethra",
        features: [
          { id: "more_rigid_core", score: 3.6 },
          { id: "olive_flex_ergothan_tip", score: 3.6 },
          { id: "tapered_tiemann_tip", score: 0.9 },
          { id: "less_rigid_core", score: 1.2 },
        ],
      },
      {
        text: "Pelvic prolapse",
        features: [
          { id: "more_rigid_core", score: 3.6 },
          { id: "less_rigid_core", score: 0 },
        ],
      },
      /*{
        group: "obesity",
        questions: type1.map((x) => ({
          text: `Obesity / body habitus: ${x}`,
          features: [
            {
              id: "female_length_plus",
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
            { id: "sleeve_bag", requiredScale: 1, score: 9 },
            { id: "introducer_tip", requiredScale: 1, score: 16 },
            { id: "pre_lubricate", requiredScale: 1, score: 0 }, //
            { id: "hydrophilic_coated", requiredScale: 1, score: 16 },
            { id: "ias", requiredScale: 1, score: 12 },
            { id: "eyelets_2_4", requiredScale: 1, score: 8 },
            { id: "closed_system_complete", requiredScale: 2, score: 16 },
            { id: "sleeve_full", requiredScale: 1, score: 9 },
            { id: "sleeve_partial", requiredScale: 1, score: 9 },
            { id: "manual_lubrication", requiredScale: 1, score: 4 },
            { id: "microhole_eyelets", requiredScale: 1, score: 0 }, //
          ],
        })),
      },
      {
        text: "Immunosupression",
        features: [{ id: "closed_system_complete", score: 16 }],
      },
      {
        text: "Trouble fully draining (due to external anatomy)",
        features: [{ id: "female_length_plus", score: 2.4 }],
      },
      {
        group: "Sediment, mucus, or visible particles",
        questions: type3.map((x) => ({
          text: `Sediment, mucus, or visible particles: ${x}`,
          features: [
            { id: "eyelets_2_4", requiredScale: 1, score: 4.48 },
            { id: "microhole_eyelets", requiredScale: 1, score: -839.16 },
          ],
        })),
      },
      {
        group: "Incomplete emptying",
        questions: type1.map((x) => ({
          text: `Incomplete emptying: ${x}`,
          features: [
            { id: "microhole_eyelets", requiredScale: 1, score: 1.2 },
            { id: "eyelets_2_4", requiredScale: 1, score: 1.2 },
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
          { id: "straight_tip", score: 0 }, //
          { id: "tapered_tiemann_tip", score: 0 }, //
        ],
      },
      {
        text: "Early SCI",
        features: [
          { id: "microhole_eyelets", score: 0 }, //
        ],
      },
      {
        text: "Neuropathic bladder",
        features: [
          { id: "eyelets_2_4", score: 0 }, //
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
            { id: "less_rigid_core", requiredScale: 1, score: 7.2 },
            { id: "hydrophilic_coated", requiredScale: 1, score: 7.2 },
            { id: "ias", requiredScale: 1, score: 7.2 },
            { id: "smaller_diameter", requiredScale: 1, score: 4.8 },
            { id: "smoothed_eyelets", requiredScale: 1, score: 9.6 },
            { id: "more_rigid_core", requiredScale: 1, score: 2.4 },
            { id: "pre_lubricate", requiredScale: 1, score: 4.8 },
            { id: "manual_lubrication", requiredScale: 1, score: 4.8 },
            { id: "wider_diameter", requiredScale: 1, score: 4.8 },
            { id: "eyelets_2_4", requiredScale: 1, score: 4.8 },
          ],
        })),
      },
      {
        group: "Sticking or dragging",
        questions: type1.map((x) => ({
          text: `Sticking or dragging: ${x}`,
          features: [
            { id: "ias", requiredScale: 1, score: 12.8 },
            { id: "hydrophilic_coated", requiredScale: 1, score: 0 }, //
          ],
        })),
      },
      {
        group: "Bleeding",
        questions: type1.map((x) => ({
          text: `Bleeding: ${x}`,
          features: [
            { id: "smoothed_eyelets", requiredScale: 1, score: 12.8 },
            { id: "less_rigid_core", requiredScale: 1, score: 9.6 },
            { id: "hydrophilic_coated", requiredScale: 1, score: 9.6 },
            { id: "ias", requiredScale: 1, score: 12.8 },
            { id: "more_rigid_core", requiredScale: 1, score: 3.2 },
            { id: "pre_lubricate", requiredScale: 1, score: 6.4 },
            { id: "eyelets_2_4", requiredScale: 1, score: 12.8 },
            { id: "microhole_eyelets", requiredScale: 1, score: 6.4 },
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
          { id: "less_rigid_core", score: 0 }, //
          { id: "microhole_eyelets", score: 0 }, //
          { id: "more_rigid_core", score: 0 }, //
          { id: "sleeve_partial", score: 0 }, //
          { id: "introducer_tip", score: 0 }, //
        ],
      },
      {
        group: "Poor dexterity",
        questions: type1.map((x) => ({
          text: `Poor dexterity: ${x}`,
          features: [
            { id: "female_length_plus", requiredScale: 1, score: 2.4 },
            { id: "more_rigid_core", requiredScale: 1, score: 2.4 },
            { id: "hydrophilic_coated", requiredScale: 1, score: 2.4 },
            { id: "ias", requiredScale: 1, score: 2.4 },
            { id: "pre_lubricate", requiredScale: 1, score: 3.6 },
            { id: "sleeve_full", requiredScale: 1, score: 4.8 },
            { id: "sleeve_partial", requiredScale: 1, score: 3.6 },
            { id: "manual_lubrication", requiredScale: 1, score: 1.2 },
            { id: "female_length", requiredScale: 1, score: 2.4 },
            { id: "handle_lo_fric", requiredScale: 1, score: 2.4 },
            { id: "introducer_tip", requiredScale: 1, score: 2.4 },
            { id: "water_sachet_separate", requiredScale: 1, score: 2.4 },
            { id: "compact_pocket_size", requiredScale: 1, score: 2.4 },
          ],
        })),
      },
      {
        text: "Wheelchair use (female)",
        features: [
          { id: "male_length", score: 3.6 },
          { id: "closed_system_complete", score: 3.6 },
        ],
      },
      {
        text: "Wheelchair use (male)",
        features: [{ id: "closed_system_complete", score: 3.6 }],
      },
      {
        text: "Trouble reaching genitals",
        features: [{ id: "male_length", score: 2.4 }],
      },
    ],
  },
  {
    accordionName: "Q9 — Lifestyle, constraints & environment",
    data: [
      {
        text: "Active / on the go",
        features: [
          { id: "compact_pocket_size", score: 1.6 },
          { id: "pre_lubricate", score: 12.6 },
          { id: "hydrophilic_coated", score: 12.6 },
          { id: "ias", score: 12.6 },
          { id: "sleeve_full", score: 18.4 },
          { id: "manual_lubrication", score: 4.6 },
        ],
      },
      {
        text: "Discretion",
        features: [
          { id: "female_length", score: 1.6, gate: "F" },
          { id: "female_length_plus", score: 1.6, gate: "F" },
          { id: "compact_pocket_size", score: 1.6, gate: "F" },
          { id: "packaging_simple_medical", score: 0.4 },
          { id: "closed_system_complete", score: 0.4 },
        ],
      },
      {
        text: "Convenience",
        features: [
          { id: "compact_pocket_size", score: 1.2 },
          { id: "funnel_bag_compatible", score: 3.6 },
        ],
      },
    ],
  },
];

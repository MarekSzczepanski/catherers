export const titles = ["Safety & basics", "Known anatomy issues"];
const dropdownValueTypes = {
  type1: ["none", "mild", "moderate", "severe"],
};
const { type1 } = dropdownValueTypes;

export const accordionContent = [
  {
    accordionName: "Safety & basics",
    data: [
      {
        group: "sex",
        questions: [
          {
            text: "Male at birth",
            features: [{ id: "male_length", weight: 3, goalWeight: 1 }],
          },
          {
            text: "Female at birth",
            features: [
              { id: "female_length", weight: 3, goalWeight: 1 },
              { id: "female_length_plus", weight: 2, goalWeight: 1 },
            ],
          },
        ],
      },
      {
        text: "Has latex allergy",
        features: [{ id: "red_rubber_latex", weight: -999, goalWeight: 1 }],
      },
      {
        text: "Has neobladder",
        features: [
          { id: "open_ended", weight: 2, goalWeight: 1 },
          { id: "wider_diameter", weight: 2, goalWeight: 1 },
          { id: "microhole_eyelets", weight: -2, goalWeight: 1 },
        ],
      },
    ],
  },
  {
    accordionName: "Known anatomy issues",
    data: [
      {
        text: "Stricture",
        features: [
          { id: "tapered_tiemann_tip", weight: 2, goalWeight: 1 },
          { id: "olive_flex_ergothan_tip", weight: 1, goalWeight: 1 },
          { id: "more_rigid_core", weight: -1, goalWeight: 1 },
        ],
      },
      {
        text: "BPH",
        features: [
          { id: "tapered_tiemann_tip", weight: 2, goalWeight: 1 },
          { id: "more_rigid_core", weight: 1, goalWeight: 1 },
          { id: "straight_tip", weight: -2, goalWeight: 1 },
        ],
      },
      {
        text: "Pelvic prolapse",
        features: [
          { id: "tapered_tiemann_tip", weight: 1, goalWeight: 1 },
          { id: "manual_lubrication", weight: 2, goalWeight: 1.1 },
        ],
      },
      {
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
      },
    ],
  },
];

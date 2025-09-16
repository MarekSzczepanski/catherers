// Allowed weights
type Weight =
  | "Require"
  | "Contraindicated"
  | "Strongly prefer"
  | "Prefer"
  | "Neutral"
  | "Avoid"
  | "Strongly avoid"
  | "";

// Allowed priority weights
type PriorityWeight =
  | "Critical_safety"
  | "High_clinical_effectiveness"
  | "Medium_comfort_easeofuse"
  | "Low_convenience_lifestyle";

type GoalWeight =
  | "infection_risk_reduction"
  | "trauma_minimization"
  | "ease_of_use_dexterity"
  | "navigation_difficult_anatomy"
  | "debris_management"
  | "discretion_portability"
  | "cost_containment"
  | "sustainability"
  | "training_measurement"
  | "anatomical_fit"
  | "general_clinical_benefit"
  | "Improved_drainage";

// Allowed gates
type Gate = "M" | "F";

// Feature object
export interface Feature {
  id: string;
  weight: Weight;
  priorityWeight: PriorityWeight;
  goalWeight: GoalWeight;
  gate?: Gate;
  requiredScale?: number;
  isHighest?: boolean;
}

export interface MultipleFeatures {
  isMultipleRow: boolean;
  data: Feature[];
}

// Basic Question
export interface Question {
  text: string;
  features: (Feature | MultipleFeatures)[];
}

// Data item can be a question OR a grouped set of questions
type DataItem =
  | (Question & { group?: never; questions?: never }) // plain Q
  | {
      group: string;
      questions: Question[];
      text?: never;
      features?: never;
    };

// Accordion entry
export interface AccordionEntry {
  accordionName: string;
  data: DataItem[];
}

// Whole dataset
export type AccordionContent = AccordionEntry[];

export type Group = {
  group: string;
  questions: Question[];
};

// An AccordionDataItem is either a Question or a Group
export type AccordionDataItem = Question | Group;

export type AccordionSection = {
  accordionName: string;
  data: AccordionDataItem[];
};

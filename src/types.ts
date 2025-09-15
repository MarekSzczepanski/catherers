export type Feature = {
  id: string;
  weight: string;
  gate?: string;
  requiredScale?: number; // <--- change this
};

export type Question = {
  text: string;
  features: Feature[];
  value?: string;
};

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

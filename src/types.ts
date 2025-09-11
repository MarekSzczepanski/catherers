export type Feature = {
  id: string;
  requiredScale?: number;
  score: number;
  gate?: string;
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

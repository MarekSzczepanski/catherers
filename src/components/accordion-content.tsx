import { Box, Button } from "@mui/material";
import ButtonGroup from "./button-group";
import type {
  Feature,
  AccordionSection,
  AccordionDataItem,
  Question,
  Group,
} from "../types";

function isGroup(item: AccordionDataItem): item is Group {
  return "group" in item;
}

export interface AccordionItem {
  data: any;
  text: string;
  features: Feature[];
  dropdown?: string[]; // optional: renders as button group if present
}

interface Props {
  data: AccordionSection;
  handleClick: (buttonText: string, features: Feature[]) => void;
  clickedButtons: Set<string>;
  lockedButtons: Set<string>;
}

const AccordionContent: React.FC<Props> = ({
  data,
  handleClick,
  clickedButtons,
  lockedButtons,
}) => {
  const buildDataAttrs = (features: Feature[]) =>
    features.reduce((acc: Record<string, string>, f) => {
      acc[`data-${f.id}`] = String(f.weight);
      return acc;
    }, {});

  return (
    <Box
      mb={2}
      mt={2}
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      gap={1}
    >
      {data.data.map((x: AccordionDataItem) => {
        if (isGroup(x)) {
          // It's a group → use x.group and x.questions
          return (
            <ButtonGroup
              data={x.questions.map((d: Question) => ({
                value: d.text,
                text: d.text,
                features: d.features,
                group: x.group,
              }))}
              handleClick={handleClick}
              clickedButtons={clickedButtons}
              lockedButtons={lockedButtons}
            />
          );
        } else {
          // It's a question → safe to use x.text and x.features
          const itemKey = x.text.toLowerCase().trim();

          return (
            <Button
              key={itemKey}
              variant={"contained"}
              disabled={lockedButtons.has(itemKey)}
              onClick={() => handleClick(x.text, x.features)}
              {...(buildDataAttrs(x.features) as any)}
              sx={{
                backgroundColor: clickedButtons.has(itemKey)
                  ? "#C7C2F0"
                  : "#FCE5FC",
                color: "#121212",
                fontWeight: "700",
                borderRadius: "20px",
              }}
            >
              {x.text}
            </Button>
          );
        }
      })}
    </Box>
  );
};

export default AccordionContent;

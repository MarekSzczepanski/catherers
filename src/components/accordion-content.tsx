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
  dropdown?: string[];
}

interface Props {
  data: AccordionSection;
  handleClick: (buttonText: string) => void;
  clickedButtons: Set<string>;
  lockedButtons: Set<string>;
}

const AccordionContent: React.FC<Props> = ({
  data,
  handleClick,
  clickedButtons,
  lockedButtons,
}) => {
  const buildDataAttrs = (features: /*Feature[]*/ any) =>
    features.reduce((acc: Record<string, string>, f: any) => {
      acc[`data-${f.id}`] = String(f.weight);
      return acc;
    }, {});

  // count how many "single" buttons there are
  const singleButtons = data.data.filter((x) => !isGroup(x));
  const singleCount = singleButtons.length;

  return (
    <Box
      mb={2}
      mt={2}
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="flex-start"
      gap={1}
    >
      {data.data.map((x: AccordionDataItem) => {
        if (isGroup(x)) {
          return (
            <ButtonGroup
              key={x.group}
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
          const itemKey = x.text.toLowerCase().trim();

          return (
            <Button
              key={itemKey}
              variant="contained"
              disabled={lockedButtons.has(itemKey)}
              onClick={() => handleClick(x.text)}
              {...buildDataAttrs(x.features)}
              sx={{
                flex: `1 1 calc(${singleCount >= 3 ? "33.33%" : "50%"} - 8px)`,
                maxWidth: `calc(${singleCount >= 3 ? "33.33%" : "50%"} - 8px)`,
                padding: "16px",
                backgroundColor: clickedButtons.has(itemKey)
                  ? "#DCDAF5"
                  : "#F8F1F6",
                color: "#1c1b1d",
                fontWeight: clickedButtons.has(itemKey) ? 700 : 500,
                borderRadius: "25px",
                boxShadow: 0,
                fontSize: "14px",
                textTransform: "none",
                transition: "background-color 0.2s",
                "&:hover": {
                  backgroundColor: clickedButtons.has(itemKey)
                    ? "#9B96E2"
                    : "#E9D3E2",
                  boxShadow: 0,
                },
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

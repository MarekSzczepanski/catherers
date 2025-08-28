import { useState } from "react";
import { Box, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import type { SelectChangeEvent } from "@mui/material/Select";

export interface Feature {
  id: string;
  weight: number;
  goalWeight: number;
  requiredScale?: number;
}

interface AccordionItem {
  text: string;
  features: Feature[];
  dropdown?: string[];
}

interface AccordionContentProps {
  data: AccordionItem[];
  updateFeatureScore: (id: string, features: Feature[], add: boolean) => void;
  handleClick: (buttonText: string, features: Feature[]) => void;
  clickedButtons: Set<string>;
  lockedButtons: Set<string>;
}

const AccordionContent: React.FC<AccordionContentProps> = ({
  data,
  handleClick,
  clickedButtons,
  lockedButtons,
  updateFeatureScore,
}) => {
  // Store dropdown values per item
  const [dropdownValues, setDropdownValues] = useState<Record<string, string>>(
    {}
  );

  const handleChange = (event: SelectChangeEvent, itemKey: string) => {
    const newValueStr = event.target.value;
    if (newValueStr === "") return; // placeholder selected, do nothing

    const newValue = Number(newValueStr);
    const prevValue = dropdownValues[itemKey]
      ? Number(dropdownValues[itemKey])
      : 0;

    setDropdownValues((prev) => ({
      ...prev,
      [itemKey]: newValueStr,
    }));

    const features =
      data.find((x) => x.text.toLowerCase() === itemKey)?.features || [];

    features.forEach((f) => {
      if (f.requiredScale !== undefined) {
        if (prevValue >= f.requiredScale && newValue < f.requiredScale) {
          updateFeatureScore(itemKey, [f], false);
        } else if (prevValue < f.requiredScale && newValue >= f.requiredScale) {
          updateFeatureScore(itemKey, [f], true);
        }
      }
    });
  };

  const buildDataAttrs = (features: Feature[]) =>
    features.reduce((acc: Record<string, string>, f) => {
      acc[`data-${f.id}`] = String(f.weight);
      return acc;
    }, {});

  return (
    <Box mb={2} display="flex" flexWrap="wrap" alignItems="center" gap={1}>
      {data.map((x) => {
        const buttonId = x.text.toLowerCase();
        const isLocked = lockedButtons.has(buttonId);

        return x.dropdown ? (
          <FormControl sx={{ minWidth: 250 }}>
            <InputLabel id={`${buttonId}-label`}>{x.text}</InputLabel>
            <Select
              labelId={`${buttonId}-label`}
              id={`${buttonId}-select`}
              value={dropdownValues[buttonId] || ""}
              label={x.text}
              onChange={(e) => handleChange(e, buttonId)}
            >
              <MenuItem value="">
                <em>Select...</em>
              </MenuItem>
              {x.dropdown.map((opt, i) => (
                <MenuItem key={i} value={i.toString()}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <Button
            key={x.text}
            variant={clickedButtons.has(buttonId) ? "outlined" : "contained"}
            color={clickedButtons.has(buttonId) ? "success" : "primary"}
            sx={{
              minWidth: 120,
              margin: 0,
              height: 36,
              borderColor: clickedButtons.has(buttonId) ? "green" : undefined,
              "&:hover": {
                borderColor: clickedButtons.has(buttonId)
                  ? "darkgreen"
                  : undefined,
                backgroundColor: clickedButtons.has(buttonId)
                  ? "rgba(0,128,0,0.3)"
                  : undefined,
              },
              "&.Mui-disabled": {
                backgroundColor: "gray",
                color: "white",
              },
            }}
            onClick={() => handleClick(x.text, x.features)}
            disabled={isLocked}
            {...(buildDataAttrs(x.features) as any)}
          >
            {x.text}
          </Button>
        );
      })}
    </Box>
  );
};

export default AccordionContent;

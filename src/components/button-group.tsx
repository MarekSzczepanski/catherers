import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import type { Feature, Question } from "../types";

type Props = {
  data: Question[];
  handleClick: (text: string, features: Feature[]) => void;
  clickedButtons: Set<string>;
  lockedButtons: Set<string>;
};

const ButtonGroup = ({
  data,
  handleClick,
  clickedButtons,
  lockedButtons,
}: Props) => {
  return (
    <ToggleButtonGroup exclusive sx={{ borderRadius: "20px", margin: "8px 0" }}>
      {data.map((opt) => {
        const isSelected = clickedButtons.has(opt.text.toLowerCase());
        const isLocked = lockedButtons.has(opt.text.toLowerCase());

        return (
          <ToggleButton
            key={opt.text} // use text instead of value
            value={opt.text} // same here
            selected={isSelected}
            disabled={isLocked}
            onClick={() => handleClick(opt.text, opt.features)}
            sx={{
              backgroundColor: isSelected ? "#C7C2F0" : "#FCE5FC",
              fontWeight: 700,
              borderRadius: "20px",
              border: "0 !important",
              marginLeft: 0,
              "&:hover": {
                backgroundColor: isSelected ? "rgba(0,128,0,0.3)" : undefined,
              },
            }}
          >
            {opt.text}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};

export default ButtonGroup;

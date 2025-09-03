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
    <ToggleButtonGroup
      exclusive
      sx={{
        borderRadius: "25px",
        margin: "8px 0",
        width: "100%",
        display: "flex",
        backgroundColor: "#FCE5FC",
      }}
    >
      {data.map((opt, i) => {
        const isSelected = clickedButtons.has(opt.text.toLowerCase());
        const isLocked = lockedButtons.has(opt.text.toLowerCase());
        const isLast = i === data.length - 1;

        // Check if the next button is selected
        const isNextSelected =
          !isLast && clickedButtons.has(data[i + 1].text.toLowerCase());

        return (
          <ToggleButton
            key={opt.text} // use text instead of value
            value={opt.text} // same here
            selected={isSelected}
            disabled={isLocked}
            onClick={() => handleClick(opt.text, opt.features)}
            sx={{
              flex: 1, // <-- this makes each button take equal width
              padding: "16px",
              backgroundColor: isSelected ? "#C7C2F0 !important" : "#FCE5FC",
              color: "#121212",
              fontWeight: 700,
              fontSize: "12px",
              borderRadius: "25px !important",
              border: "0 !important",
              textTransform: "none",
              marginLeft: 0,
              "&:hover": {
                backgroundColor: isSelected
                  ? "#b2aed6 !important"
                  : "rgba(0, 0, 0, 0.12)",
              },
              "&::after": {
                content: '""', // must be a string
                width: "1px",
                height: "100%",
                backgroundColor:
                  isLast || isSelected || isNextSelected
                    ? "transparent"
                    : "#C7C2F0",
                zIndex: 2,
                position: "absolute",
                right: 0,
                transition: "background-color 0.2s",
              },
              "&::before": {
                content: '""', // must be a string
                width: "1px",
                height: "100%",
                zIndex: 3,
                position: "absolute",
                left: 0,
                transition: "background-color 0.2s",
              },
              "&:hover::after": {
                backgroundColor: "transparent",
              },
              "&:hover::before": {
                backgroundColor: !i ? "transparent" : "#FCE5FC",
              },
              "&::first-letter": {
                textTransform: "uppercase", // only first character
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

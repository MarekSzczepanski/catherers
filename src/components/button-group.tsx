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
        backgroundColor: data.some((opt) =>
          lockedButtons.has(opt.text.toLowerCase())
        )
          ? "#d3d3d3" // background if any button is disabled
          : "#F8F1F6", // default background
        transition: "background-color 0.2s",
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
              backgroundColor: isSelected ? "#DCDAF5 !important" : "#F8F1F6",
              color: "#1c1b1d",
              fontWeight: isSelected ? 700 : 500,
              fontSize: "14px",
              borderRadius: "25px !important",
              border: "0 !important",
              textTransform: "none",
              marginLeft: 0,
              transition: "background-color 0.2s",
              "&:hover": {
                backgroundColor: isSelected ? "#9B96E2 !important" : "#E9D3E2",
              },
              "&::after": {
                content: '""', // must be a string
                width: "1px",
                height: "100%",
                backgroundColor:
                  isLast || isSelected || isNextSelected
                    ? "transparent"
                    : "#DCDAF5",
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
                backgroundColor: !i ? "transparent" : "#F8F1F6",
              },
              "&::first-letter": {
                textTransform: "uppercase", // only first character
              },
              "&.Mui-disabled": {
                backgroundColor: "#d3d3d3 !important", // <-- change disabled bg here
                color: "#888888", // optional: change text color
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

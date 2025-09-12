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
          ? "#d3d3d3"
          : "#F8F1F6",
        transition: "background-color 0.2s",

        // 👇 when group is hovered → affect all buttons
        "&:hover .MuiToggleButton-root::after, &:hover .MuiToggleButton-root::before":
          {
            backgroundColor: "transparent",
          },
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
            key={opt.text}
            value={opt.text}
            selected={isSelected}
            disabled={isLocked}
            onClick={() => handleClick(opt.text, opt.features)}
            sx={{
              display: opt.text.includes("none") ? "none" : "block",
              margin: "0px 1px",
              flex: 1,
              padding: "16px",
              backgroundColor: isSelected ? "#DCDAF5 !important" : "#F8F1F6",
              color: "#1c1b1d",
              fontWeight: isSelected ? 700 : 500,
              fontSize: "14px",
              borderRadius: "25px !important",
              border: "0 !important",
              textTransform: "none",
              position: "relative", // required for ::after/::before positioning
              transition: "background-color 0.2s",
              "&:hover": {
                backgroundColor: isSelected ? "#9B96E2 !important" : "#E9D3E2",
              },
              "&::after": {
                content: '""',
                width: "1px",
                height: "32px",
                backgroundColor:
                  isLast || isSelected || isNextSelected
                    ? "transparent"
                    : "#DCDAF5",
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                transition: "background-color 0.2s",
              },
              "&::before": {
                content: '""',
                width: "1px",
                height: "100%",
                position: "absolute",
                left: 0,
                top: 0,
                transition: "background-color 0.2s",
              },
              "&::first-letter": {
                textTransform: "uppercase",
              },
              "&.Mui-disabled": {
                backgroundColor: "#d3d3d3 !important",
                color: "#888888",
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

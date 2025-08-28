import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionContent from "./accordion-content";
import { Typography } from "@mui/material";

const AccordionWrap = (props: any) => {
  return (
    <Accordion
      sx={{
        minHeight: 80,
        marginTop: "8px",
        borderRadius: "20px !important",
        overflow: "hidden",
        "&:before": { display: "none" },
        "&.Mui-focused, &:focus-visible": {
          outline: "none",
          boxShadow: "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          minHeight: 80,
          backgroundColor: "#FCE5FC",
          borderRadius: "20px",
          border: "1px solid #F2B8F2",
          "& .MuiAccordionSummary-content": {
            alignItems: "center", // vertically center text
          },
        }}
      >
        <Typography component="span">{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <AccordionContent
          data={props.data}
          updateFeatureScore={props.updateFeatureScore}
          handleClick={props.handleClick}
          clickedButtons={props.clickedButtons}
          lockedButtons={props.lockedButtons}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionWrap;

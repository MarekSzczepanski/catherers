import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionContent from './accordion-content';
import { Typography } from '@mui/material';

const AccordionWrap = (props: any) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
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

export default AccordionWrap

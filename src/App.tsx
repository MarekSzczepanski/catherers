import './App.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionQuestionBoolean from './components/accordion-question-boolean';
import type { Feature } from './components/accordion-question-boolean';
import React, {useState} from 'react';
import { Box, Typography } from '@mui/material';

type Score = Record<string, number>;

const accordionContent = [
  {text: 'Male at birth', features: [{id: 'male_length', weight: 3, goalWeight: 1}]},
  {text: 'Female at birth', features: [{id: 'female_length', weight: 3, goalWeight: 1}, {id: 'female_length_plus', weight: 2, goalWeight: 1}]},
  {text: 'Has latex allergy', features: [{id: 'red_rubber_latex', weight: -999, goalWeight: 1}]},
  {text: 'Has neobladder', features: [{id: 'open_ended', weight: 2, goalWeight: 1}, {id: 'wider_diameter', weight: 2, goalWeight: 1}, {id: 'microhole_eyelets', weight: -2, goalWeight: 1}]},
]

function App() {
  const [score, setScore] = useState<Score>({
    red_rubber_latex: 0,
    pvc_core: 0,
    silicone_core: 0,
    tpe_core: 0,
    pobe_core: 0,
    pe_core: 0,
    less_rigid_core: 0,
    more_rigid_core: 0,
    pre_lubricate: 0,
    hydrophilic_coated: 0,
    ias_coated: 0,
    manual_lubrication: 0,
    male_length: 0,
    female_length: 0,
    female_length_plus: 0,
    smaller_diameter: 0,
    wider_diameter: 0,
    straight_tip: 0,
    tapered_tiemann_tip: 0,
    olive_flex_ergothan_tip: 0,
    eyelets_2_4: 0,
    microhole_eyelets: 0,
    smoothed_eyelets: 0,
    open_ended: 0,
    sleeve_full: 0,
    sleeve_partial: 0,
    sleeve_bag: 0,
    handle_lo_fric: 0,
    funnel_connector: 0,
    introducer_tip: 0,
    stripe_marker: 0,
    water_sachet_separate: 0,
    compact_pocket_size: 0,
    packaging_simple_medical: 0,
    funnel_bag_compatible: 0,
    closed_system_complete: 0
  });

  const handlePillClick = (_id: string, features: Feature[], add: boolean) => {
    setScore((prev) => {
      const newScore = { ...prev };

      features.forEach(f => {
        if (f.id in newScore) {
          newScore[f.id] += add ? f.weight : -f.weight; // add or subtract based on toggle
        }
      });

      return newScore;
    });
  };

  return (
    <>
      <h1>Catherers</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Fundamentals</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionQuestionBoolean data={accordionContent} handlePillClick={handlePillClick}/>
        </AccordionDetails>
      </Accordion>
     <Box mt={5}>
  <Typography variant="h6">Score</Typography>
  {Object.entries(score)
    .filter(([_, value]) => value > 0) // only values greater than 0
    .map(([key, value]) => (
      <Typography key={key}>
        {key}: {value as React.ReactNode}
      </Typography>
    ))}
</Box>

    </>
  )
}

export default App

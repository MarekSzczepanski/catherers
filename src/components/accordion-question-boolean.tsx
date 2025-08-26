import { Box, Button } from '@mui/material';
import { useState } from 'react';

export interface Feature {
  id: string;
  weight: number;
  goalWeight: number;
}

interface AccordionItem {
  text: string;
  features: Feature[];
}

interface AccordionQuestionBooleanProps {
  data: AccordionItem[];
  handlePillClick: (id: string, features: Feature[], add: boolean) => void;
}

const lockRelations: Record<string, string[]> = {
  "male at birth": ['female at birth'],
  "female at birth": ['male at birth'],
};

const AccordionQuestionBoolean: React.FC<AccordionQuestionBooleanProps> = ({ data, handlePillClick }) => {
  const [clickedButtons, setClickedButtons] = useState<Set<string>>(new Set());
  const [lockedButtons, setLockedButtons] = useState<Set<string>>(new Set());

  const handleClick = (buttonText: string, features: Feature[]) => {
    const buttonId = buttonText.toLowerCase();
    const isClicked = clickedButtons.has(buttonId);

    const newClicked = new Set(clickedButtons);
    const newLocked = new Set(lockedButtons);

    if (isClicked) {
      // unclick
      newClicked.delete(buttonId);

      // unlock buttons that were locked by this button
      const toUnlock = lockRelations[buttonId] || [];
      toUnlock.forEach(btn => newLocked.delete(btn.toLowerCase()));

      handlePillClick(buttonId, features, false);
    } else {
      // click
      newClicked.add(buttonId);

      // lock related buttons
      const toLock = lockRelations[buttonId] || [];
      toLock.forEach(btn => newLocked.add(btn.toLowerCase()));

      handlePillClick(buttonId, features, true);
    }

    setClickedButtons(newClicked);
    setLockedButtons(newLocked);
  };

  const buildDataAttrs = (features: Feature[]) =>
    features.reduce((acc: Record<string, string>, f) => {
      acc[`data-${f.id}`] = String(f.weight);
      return acc;
    }, {});

  return (
    <Box mb={2}>
      {data.map((x) => {
        const buttonId = x.text.toLowerCase();
        const isLocked = lockedButtons.has(buttonId);

        return (
          <Button
            key={x.text}
            variant={clickedButtons.has(x.text.toLowerCase()) ? "outlined" : "contained"}
  					color={clickedButtons.has(x.text.toLowerCase()) ? "success" : "primary"}
            sx={{
              margin: '0 10px',
							borderColor: clickedButtons.has(x.text.toLowerCase()) ? 'green' : undefined,
    					'&:hover': {
      					borderColor: clickedButtons.has(x.text.toLowerCase()) ? 'darkgreen' : undefined,
      					backgroundColor: clickedButtons.has(x.text.toLowerCase()) ? 'rgba(0,128,0,0.3)' : undefined,
    					},
              '&.Mui-disabled': {
                backgroundColor: 'gray',
                color: 'white',
              },
            }}
            onClick={() => handleClick(x.text, x.features)}
            disabled={isLocked} // locked buttons cannot be clicked
            {...(buildDataAttrs(x.features) as any)}
          >
            {x.text}
          </Button>
        );
      })}
    </Box>
  );
};

export default AccordionQuestionBoolean;

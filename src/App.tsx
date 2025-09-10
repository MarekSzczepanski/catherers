import "./App.css";
import AccordionWrap from "./components/accordion-wrap";
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import type {
  Feature,
  AccordionSection,
  AccordionDataItem,
  Question,
} from "./types";
import SideButton from "./components/side-button";
import RoundButton from "./components/round-button";
import { accordionContent } from "./data";

type Score = Record<string, number>;

function collectClickedFeatures(
  accordionContent: AccordionSection[],
  clickedButtons: Set<string>
): Feature[] {
  const features: Feature[] = [];

  const traverse = (items: AccordionDataItem[], parentGroup?: Question[]) => {
    for (const item of items) {
      if ("text" in item && clickedButtons.has(item.text.toLowerCase())) {
        // Check requiredScale if parentGroup is defined
        const filteredFeatures = item.features.filter((f) => {
          if (f.requiredScale === undefined || !parentGroup) return true;

          // Find index of clicked item in its group
          const index = parentGroup.findIndex(
            (q) => q.text.toLowerCase() === item.text.toLowerCase()
          );
          return index >= f.requiredScale;
        });

        features.push(...filteredFeatures);
      }

      if ("questions" in item)
        traverse(item.questions as AccordionDataItem[], item.questions);
      if ("data" in item) traverse(item.data as AccordionDataItem[]);
    }
  };

  traverse(accordionContent.flatMap((s) => s.data));

  return features;
}

function calculateScore(
  accordionContent: any[],
  clickedButtons: Set<string>,
  prevScore: Score
): Score {
  const features = collectClickedFeatures(accordionContent, clickedButtons);

  // Reset scores
  const newScore: Score = Object.fromEntries(
    Object.keys(prevScore).map((key) => [key, 0])
  ) as Score;

  // Apply weights
  for (const f of features) {
    newScore[f.id] = (newScore[f.id] ?? 0) + f.score;
  }

  return newScore;
}

const initialScore = {};

function App() {
  const [score, setScore] = useState<Score>(initialScore);
  const [clickedButtons, setClickedButtons] = useState<Set<string>>(new Set());
  const [lockedButtons, setLockedButtons] = useState<Set<string>>(new Set());

  const lockRelations: Record<string, string[]> = {
    "male at birth": [
      "pelvic prolapse",
      "obesity / body habitus: none",
      "obesity / body habitus: mild",
      "obesity / body habitus: moderate",
      "obesity / body habitus: severe",
    ],
    "female at birth": ["bph"],
  };

  const handleClick = (buttonText: string) => {
    const buttonId = buttonText.toLowerCase();
    const isClicked = clickedButtons.has(buttonId);
    const newClicked = new Set(clickedButtons);

    if (isClicked) {
      newClicked.delete(buttonId);
    } else {
      newClicked.add(buttonId);

      const matchedDataItem = accordionContent
        .map((accordion) =>
          accordion.data.find(
            (z) =>
              "questions" in z &&
              z.questions?.some((y) => y.text.toLowerCase() === buttonId)
          )
        )
        .find(Boolean); // filters out undefined

      // Safe traversal
      if (matchedDataItem && "questions" in matchedDataItem) {
        (matchedDataItem.questions ?? []).forEach((x: Question) => {
          const text = x.text.toLowerCase();
          if (text !== buttonId) {
            newClicked.delete(text);
          }
        });
      }
    }

    const buttonsToLock = new Set(
      Object.entries(lockRelations)
        .filter(([prop]) => newClicked.has(prop))
        .flatMap(([, vals]) => vals)
    );

    setClickedButtons(
      new Set([...newClicked].filter((x) => !buttonsToLock.has(x)))
    );
    setLockedButtons(buttonsToLock);
  };

  useEffect(() => {
    setScore((prev) => calculateScore(accordionContent, clickedButtons, prev));
  }, [clickedButtons]);

  const handleReset = () => {
    setScore(initialScore);
    setClickedButtons(new Set());
    setLockedButtons(new Set());
  };

  const handleDownload = () => {};

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Box
        sx={{
          position: "fixed", // keep fixed on scroll
          top: 0, // start from top
          left: 0, // align to left
          width: "20%", // keep same width
          height: "100vh", // fill viewport height
          backgroundColor: "#F8F1F6",
          display: "flex",
          overflowY: "auto", // allow scrolling inside box if content overflows
        }}
      >
        <Box
          sx={{
            width: "35%",
            borderRight: "1px solid #ddd",
            display: "flex",
            flexDirection: "column",
            height: "calc(100vh - 32px)", // full viewport height
            minHeight: 0, // allow flex children to shrink
            alignItems: "center",
          }}
        >
          {/* Top button or content */}
          <SideButton />

          {/* Middle content scrolls if needed */}
          <Box
            sx={{
              flex: 1, // takes remaining space
              overflowY: "auto", // scroll if content is taller than space
            }}
          >
            {/* Any scrollable content can go here */}
          </Box>

          {/* Bottom buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              mt: "auto", // push to bottom
              width: "100%",
              alignItems: "center",
            }}
          >
            <RoundButton imageName="reset" click={handleReset} />
            <RoundButton imageName="download" click={handleDownload} />
          </Box>
        </Box>

        <Box p={3} sx={{ width: "75%", textAlign: "left" }}>
          <Typography variant="h2" sx={{ fontSize: "16px", fontWeight: 600 }}>
            Features
          </Typography>
          <Box mt={5} sx={{ overflowWrap: "anywhere" }}>
            {Object.entries(score)
              .filter(([_, value]) => value > 0)
              .map(([key, value]) => (
                <Typography
                  key={key}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    "& span": {
                      whiteSpace: "nowrap",
                      paddingLeft: "8px",
                    },
                  }}
                >
                  {key}
                  <span>{value as React.ReactNode}</span>
                </Typography>
              ))}
          </Box>
        </Box>
      </Box>
      <Box p={1} sx={{ marginLeft: "20%" }}>
        <Box mb={3} sx={{ display: "flex" }}>
          <Box
            p={4}
            sx={{
              backgroundColor: "#F8F1F6",
              borderRadius: "20px",
              width: "66%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: "80px", textAlign: "left", fontWeight: 600 }}
            >
              Catheter Selection Tool
            </Typography>
            <Typography mt={2} sx={{ textAlign: "left" }}>
              The purpose of this prototype is to verify correct feature
              prioritization. Enter your medical attributes below, and a
              prioritised cathetrer feature list will be calculated on the left.
            </Typography>
          </Box>
          <img
            src="/blob.jpg"
            alt="image"
            style={{
              maxWidth: "33%",
              marginLeft: "8px",
              borderRadius: "20px",
            }}
          />
        </Box>
        {accordionContent.map((x, i) => (
          <AccordionWrap
            key={i}
            data={x}
            handleClick={handleClick}
            clickedButtons={clickedButtons}
            lockedButtons={lockedButtons}
            title={accordionContent[i].accordionName}
          />
        ))}
      </Box>
    </Box>
  );
}

export default App;

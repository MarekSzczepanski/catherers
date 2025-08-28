import "./App.css";
import AccordionWrap from "./components/accordion-wrap";
import type { Feature } from "./components/accordion-content";
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

type Score = Record<string, number>;

const titles = ["Safety & basics", "Known anatomy issues"];

const dropdownValueTypes = {
  type1: ["none", "mild", "moderate", "severe"],
};
const { type1 } = dropdownValueTypes;
const accordionContent = [
  [
    {
      text: "Male at birth",
      features: [{ id: "male_length", weight: 3, goalWeight: 1 }],
    },
    {
      text: "Female at birth",
      features: [
        { id: "female_length", weight: 3, goalWeight: 1 },
        { id: "female_length_plus", weight: 2, goalWeight: 1 },
      ],
    },
    {
      text: "Has latex allergy",
      features: [{ id: "red_rubber_latex", weight: -999, goalWeight: 1 }],
    },
    {
      text: "Has neobladder",
      features: [
        { id: "open_ended", weight: 2, goalWeight: 1 },
        { id: "wider_diameter", weight: 2, goalWeight: 1 },
        { id: "microhole_eyelets", weight: -2, goalWeight: 1 },
      ],
    },
  ],
  [
    {
      text: "stricture",
      features: [
        { id: "tapered_tiemann_tip", weight: 2, goalWeight: 1 },
        { id: "olive_flex_ergothan_tip", weight: 1, goalWeight: 1 },
        { id: "more_rigid_core", weight: -1, goalWeight: 1 },
      ],
    },
    {
      text: "BPH",
      features: [
        { id: "tapered_tiemann_tip", weight: 2, goalWeight: 1 },
        { id: "more_rigid_core", weight: 1, goalWeight: 1 },
        { id: "straight_tip", weight: -2, goalWeight: 1 },
      ],
    },
    {
      text: "Pelvic prolapse",
      features: [
        { id: "tapered_tiemann_tip", weight: 1, goalWeight: 1 },
        { id: "manual_lubrication", weight: 2, goalWeight: 1.1 },
      ],
    },
    {
      dropdown: type1,
      text: "Obesity / Body habitus",
      features: [
        {
          id: "female_length_plus",
          requiredScale: 2,
          weight: 2,
          goalWeight: 1,
        },
      ],
    },
  ],
  [
    {
      text: "stricture",
      features: [
        { id: "tapered_tiemann_tip", weight: 2, goalWeight: 1 },
        { id: "olive_flex_ergothan_tip", weight: 1, goalWeight: 1 },
        { id: "more_rigid_core", weight: -1, goalWeight: 1 },
      ],
    },
    {
      text: "BPH",
      features: [
        { id: "tapered_tiemann_tip", weight: 2, goalWeight: 1 },
        { id: "more_rigid_core", weight: 1, goalWeight: 1 },
        { id: "straight_tip", weight: -2, goalWeight: 1 },
      ],
    },
    {
      text: "Pelvic prolapse",
      features: [
        { id: "tapered_tiemann_tip", weight: 1, goalWeight: 1 },
        { id: "manual_lubrication", weight: 2, goalWeight: 1.1 },
      ],
    },
    {
      dropdown: type1,
      text: "Obesity / Body habitus",
      features: [
        {
          id: "female_length_plus",
          requiredScale: 2,
          weight: 2,
          goalWeight: 1,
        },
      ],
    },
  ],
  [
    {
      text: "stricture",
      features: [
        { id: "tapered_tiemann_tip", weight: 2, goalWeight: 1 },
        { id: "olive_flex_ergothan_tip", weight: 1, goalWeight: 1 },
        { id: "more_rigid_core", weight: -1, goalWeight: 1 },
      ],
    },
    {
      text: "BPH",
      features: [
        { id: "tapered_tiemann_tip", weight: 2, goalWeight: 1 },
        { id: "more_rigid_core", weight: 1, goalWeight: 1 },
        { id: "straight_tip", weight: -2, goalWeight: 1 },
      ],
    },
    {
      text: "Pelvic prolapse",
      features: [
        { id: "tapered_tiemann_tip", weight: 1, goalWeight: 1 },
        { id: "manual_lubrication", weight: 2, goalWeight: 1.1 },
      ],
    },
    {
      dropdown: type1,
      text: "Obesity / Body habitus",
      features: [
        {
          id: "female_length_plus",
          requiredScale: 2,
          weight: 2,
          goalWeight: 1,
        },
      ],
    },
  ],
];

/*{text: '', features: [{id: '', weight: , goalWeight: }]},
, {id: '', weight: , goalWeight: }*/

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
    closed_system_complete: 0,
  });
  const [clickedButtons, setClickedButtons] = useState<Set<string>>(new Set());
  const [lockedButtons, setLockedButtons] = useState<Set<string>>(new Set());

  const lockRelations: Record<string, string[]> = {
    "male at birth": [
      "female at birth",
      "pelvic prolapse",
      "obesity / body habitus",
    ],
    "female at birth": ["male at birth", "bph"],
  };

  const handleClick = (buttonText: string, features: Feature[]) => {
    const buttonId = buttonText.toLowerCase();
    const isClicked = clickedButtons.has(buttonId);

    const newClicked = new Set(clickedButtons);
    const newLocked = new Set(lockedButtons);

    if (isClicked) {
      // unclick
      newClicked.delete(buttonId);
      // unlock related
      const toUnlock = lockRelations[buttonId] || [];
      toUnlock.forEach((btn) => newLocked.delete(btn.toLowerCase()));
      updateFeatureScore(buttonId, features, false);
    } else {
      // click
      newClicked.add(buttonId);
      // lock related
      const toLock = lockRelations[buttonId] || [];
      toLock.forEach((btn) => newLocked.add(btn.toLowerCase()));
      updateFeatureScore(buttonId, features, true);
    }

    setClickedButtons(newClicked);
    setLockedButtons(newLocked);
  };

  const updateFeatureScore = (
    _id: string,
    features: Feature[],
    add: boolean
  ) => {
    setScore((prev) => {
      const newScore = { ...prev };

      features.forEach((f) => {
        if (f.id in newScore) {
          newScore[f.id] += add ? f.weight : -f.weight; // add or subtract based on toggle
        }
      });

      return newScore;
    });
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Box
        sx={{
          position: "fixed", // keep fixed on scroll
          top: 0, // start from top
          left: 0, // align to left
          width: "25%", // keep same width
          height: "100vh", // fill viewport height
          backgroundColor: "#FCE5FC",
          display: "flex",
          overflowY: "auto", // allow scrolling inside box if content overflows
        }}
      >
        <Box
          sx={{
            width: "25%",
            borderRight: "1px solid #ddd",
            display: "flex",
            flexDirection: "column",
            height: "calc(100vh - 32px)", // full viewport height
            minHeight: 0, // allow flex children to shrink
            padding: 2,
          }}
        >
          {/* Top button or content */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f9d7f9",
              width: "100%",
              aspectRatio: "1 / 1",
              boxShadow: "none",
              borderRadius: "22px",
              "&:hover": {
                backgroundColor: "#f8c5f8",
              },
            }}
          ></Button>

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
              gap: 2,
              mt: "auto", // push to bottom
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f9d7f9",
                width: "100%",
                aspectRatio: "1 / 1",
                boxShadow: "none",
                borderRadius: "22px",
                "&:hover": {
                  backgroundColor: "#f8c5f8",
                },
              }}
            ></Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f9d7f9",
                width: "100%",
                aspectRatio: "1 / 1",
                boxShadow: "none",
                borderRadius: "22px",
                "&:hover": {
                  backgroundColor: "#f8c5f8",
                },
              }}
            ></Button>
          </Box>
        </Box>

        <Box p={3} sx={{ width: "75%", textAlign: "left" }}>
          <Typography variant="h2" sx={{ fontSize: "16px", fontWeight: 600 }}>
            Features
          </Typography>
          <Box mt={5}>
            {Object.entries(score)
              .filter(([_, value]) => value > 0)
              .map(([key, value]) => (
                <Typography
                  key={key}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between", // push content to edges
                  }}
                >
                  {key}
                  <span>{value as React.ReactNode}</span>
                </Typography>
              ))}
          </Box>
        </Box>
      </Box>
      <Box p={1} sx={{ marginLeft: "25%" }}>
        <Box mb={3} sx={{ display: "flex" }}>
          <Box
            p={4}
            sx={{
              backgroundColor: "#FCE5FC",
              borderRadius: "20px",
              width: "65%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: "80px", textAlign: "left" }}
            >
              Catherer Selection Tool
            </Typography>
            <Typography mt={2} sx={{ textAlign: "left" }}>
              The purpose of this prototype is to verify correct feature
              prioritization. Enter your medical attributes below, and a
              prioritised catherer feature list will be calculated on the left.
            </Typography>
          </Box>
          <img
            src="/blob.jpg"
            alt="image"
            style={{
              maxWidth: "35%",
              marginLeft: "8px",
              borderRadius: "20px",
            }}
          />
        </Box>
        {accordionContent.map((x, i) => (
          <AccordionWrap
            key={i}
            data={x}
            updateFeatureScore={updateFeatureScore}
            handleClick={handleClick}
            clickedButtons={clickedButtons}
            lockedButtons={lockedButtons}
            title={`Q${i + 1}. ${titles[i]}`}
          />
        ))}
      </Box>
    </Box>
  );
}

export default App;

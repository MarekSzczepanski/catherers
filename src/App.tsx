import "./App.css";
import AccordionWrap from "./components/accordion-wrap";
import { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Modal,
  Paper,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import type {
  Feature,
  AccordionSection,
  AccordionDataItem,
  Question,
  MultipleFeatures,
} from "./types";
import SideButton from "./components/side-button";
import RoundButton from "./components/round-button";
import { accordionContent } from "./data";
import CloseIcon from "@mui/icons-material/Close";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

type Score = Record<string, number>;

function collectClickedFeatures(
  accordionContent: AccordionSection[],
  clickedButtons: Set<string>
): (Feature | MultipleFeatures)[] {
  const features: (Feature | MultipleFeatures)[] = [];

  const traverse = (items: AccordionDataItem[], parentGroup?: Question[]) => {
    for (const item of items) {
      if ("text" in item && clickedButtons.has(item.text.toLowerCase())) {
        // Check requiredScale if parentGroup is defined
        const filteredFeatures = item.features.filter((f: any) => {
          if (f.requiredScale === undefined || !parentGroup) return true;

          // Find index of clicked item in its group
          const index = parentGroup.findIndex(
            (q) => q.text.toLowerCase() === item.text.toLowerCase()
          );
          return index >= Number(f.requiredScale);
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
  prevScore: Score,
  recommendations: { label: string; weight: number }[],
  clinicalPriority: { label: string; priorityWeight: number }[],
  goals: { label: string; goalWeight: number }[]
): Score {
  const features = collectClickedFeatures(accordionContent, clickedButtons);
  // Reset scores
  const newScore: Score = Object.fromEntries(
    Object.keys(prevScore).map((key) => [key, 0])
  ) as Score;

  // Apply weights
  for (const f of features as any) {
    const assignNewScore = () => {
      if (f.isMultipleRow) {
        const data = f.data;
        let highest = 0;
        const nonHighestRowsValues = [];
        for (const x of data) {
          const recommendationsObj = recommendations.find(
            (r) => r.label === x.weight
          );
          const recommendationsValue = recommendationsObj
            ? recommendationsObj.weight
            : 0;
          const clinicalPriorityObj = clinicalPriority.find(
            (r) => r.label === x.priorityWeight
          );
          const clinicalPriorityValue = clinicalPriorityObj
            ? clinicalPriorityObj.priorityWeight
            : 0;

          const goalsObj = goals.find((r) => r.label === x.goalWeight);
          const goalsValue = goalsObj ? goalsObj.goalWeight : 0;

          const result =
            recommendationsValue * clinicalPriorityValue * goalsValue;
          if (x.isHighest) {
            highest = result;
          } else {
            nonHighestRowsValues.push(result);
          }
        }
        const nonHighestSum = nonHighestRowsValues.reduce(
          (accumulator, currentValue) => {
            return accumulator + currentValue;
          },
          0
        );
        const finalResult = highest + nonHighestSum * 0.5;
        newScore[f.data[0].id] = (newScore[f.data[0].id] ?? 0) + finalResult;
      } else {
        const recommendationsObj = recommendations.find(
          (r) => r.label === f.weight
        );
        const recommendationsValue = recommendationsObj
          ? recommendationsObj.weight
          : 0;
        const clinicalPriorityObj = clinicalPriority.find(
          (r) => r.label === f.priorityWeight
        );
        const clinicalPriorityValue = clinicalPriorityObj
          ? clinicalPriorityObj.priorityWeight
          : 0;
        const goalsObj = goals.find((r) => r.label === f.goalWeight);
        const goalsValue = goalsObj ? goalsObj.goalWeight : 0;
        newScore[f.id] =
          (newScore[f.id] ?? 0) +
          recommendationsValue * clinicalPriorityValue * goalsValue;
      }
    };

    const gate = f.gate;
    if (gate) {
      const isFemaleGate = gate === "F";
      if (
        (isFemaleGate && clickedButtons.has("female at birth")) ||
        (!isFemaleGate && clickedButtons.has("male at birth"))
      ) {
        assignNewScore();
      }
    } else {
      assignNewScore();
    }
  }

  return newScore;
}

const initialScore = {};
const initialRecommendations = [
  { label: "Require", weight: 999 },
  { label: "Strongly prefer", weight: 3 },
  { label: "Prefer", weight: 1.5 },
  { label: "Neutral", weight: 0 },
  { label: "Avoid", weight: -1.5 },
  { label: "Strongly avoid", weight: -2.5 },
  { label: "Contraindicated", weight: -999 },
];
const initialClinicalPriority = [
  { label: "Critical_safety", priorityWeight: 1.2 },
  { label: "High_clinical_effectiveness", priorityWeight: 1.1 },
  { label: "Medium_comfort_easeofuse", priorityWeight: 0.45 },
  { label: "Low_convenience_lifestyle", priorityWeight: 0.4 },
];
const initialGoals = [
  { label: "infection_risk_reduction", goalWeight: 5 },
  { label: "trauma_minimization", goalWeight: 4 },
  { label: "ease_of_use_dexterity", goalWeight: 2 },
  { label: "navigation_difficult_anatomy", goalWeight: 1.5 },
  { label: "debris_management", goalWeight: 1.4 },
  { label: "discretion_portability", goalWeight: 1 },
  { label: "cost_containment", goalWeight: 1 },
  { label: "sustainability", goalWeight: 1 },
  { label: "training_measurement", goalWeight: 1 },
  { label: "anatomical_fit", goalWeight: 1 },
  { label: "general_clinical_benefit", goalWeight: 1 },
  { label: "Improved_drainage", goalWeight: 1 },
];

function App() {
  const [score, setScore] = useState<Score>(initialScore);
  useAlignRequiredAndNoB();
  const [clickedButtons, setClickedButtons] = useState<Set<string>>(new Set());
  const [lockedButtons, setLockedButtons] = useState<Set<string>>(new Set());
  const [modal, setModal] = useState<boolean>(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [recommendations, setRecommendations] = useState(
    initialRecommendations
  );
  const [clinicalPriority, setClinicalPriority] = useState(
    initialClinicalPriority
  );
  const [goals, setGoals] = useState(initialGoals);

  const hey3Ref = useRef<HTMLDivElement>(null);
  const hey4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function alignHeightsAndPosition() {
      if (hey3Ref.current && hey4Ref.current) {
        const hey4Height = hey4Ref.current.offsetHeight;
        const parentTop =
          hey3Ref.current.parentElement?.getBoundingClientRect().top ?? 0;
        const hey4Top = hey4Ref.current.getBoundingClientRect().top;

        const offset = hey4Top - parentTop;

        // Set height & transform
        hey3Ref.current.style.height = `${hey4Height}px`;
        hey3Ref.current.style.transform = `translateY(${offset}px)`;

        // Set opacity based on number of children
        if (hey4Ref.current.children.length < 5) {
          hey3Ref.current.style.opacity = "0";
        } else {
          hey3Ref.current.style.opacity = "1";
        }
      }
    }

    alignHeightsAndPosition();
    window.addEventListener("resize", alignHeightsAndPosition);

    return () => {
      window.removeEventListener("resize", alignHeightsAndPosition);
    };
  }, [score]); // rerun when score changes

  // temporary edits live here
  const [draftRecommendations, setDraftRecommendations] = useState<
    { label: string; weight: number }[]
  >([]);
  const [draftClinicalPriority, setDraftClinicalPriority] = useState<
    { label: string; priorityWeight: number }[]
  >([]);
  const [draftGoals, setDraftGoals] = useState<
    { label: string; goalWeight: number }[]
  >([]);

  const lockRelations: Record<string, string[]> = {
    "male at birth": [
      "pelvic organ prolapse",
      "wheelchair use (female)",
      "hard to see or reach urethra",
      "difficulty emptying (despite feeling 'all the way in')",
    ],
    "female at birth": ["enlarged prostate (bph)", "wheelchair use (male)"],
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
    console.log(buttonsToLock);
    setLockedButtons(buttonsToLock);
  };

  useEffect(() => {
    setScore((prev) =>
      calculateScore(
        accordionContent,
        clickedButtons,
        prev,
        recommendations,
        clinicalPriority,
        goals
      )
    );
  }, [clickedButtons, recommendations, clinicalPriority, goals]);

  const handleReset = () => {
    setScore(initialScore);
    setRecommendations(initialRecommendations);
    setClinicalPriority(initialClinicalPriority);
    setGoals(initialGoals);
    setClickedButtons(new Set());
    setLockedButtons(new Set());
  };

  const handleWeightEdit = () => {
    setDraftRecommendations(recommendations.map((r) => ({ ...r }))); // clone
    setDraftClinicalPriority(clinicalPriority.map((r) => ({ ...r }))); // clone
    setDraftGoals(goals.map((r) => ({ ...r }))); // clone
    setModal(true);
  };

  function arraysEqual<T>(a: T[], b: T[], key: keyof T): boolean {
    if (a.length !== b.length) return false;
    return a.every((item, i) => item[key] === b[i][key]);
  }

  const hasChanges =
    !arraysEqual(draftRecommendations, recommendations, "weight") ||
    !arraysEqual(draftClinicalPriority, clinicalPriority, "priorityWeight") ||
    !arraysEqual(draftGoals, goals, "goalWeight");

  const handleExport = () => {
    // ---- First sheet: Scores ----
    const rows = Object.entries(score)
      .map(([key, value]) => ({ Feature: key, Value: value }))
      .sort((a, b) => b.Value - a.Value); // sort descending by Value

    const ws1 = XLSX.utils.json_to_sheet(rows);

    // ---- Apply formatting to Scores sheet ----
    const range = XLSX.utils.decode_range(ws1["!ref"] || "");
    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cell_address = { c: C, r: R };
        const cell_ref = XLSX.utils.encode_cell(cell_address);
        if (!ws1[cell_ref]) continue;
        if (R === 0) {
          ws1[cell_ref].s = {
            font: { bold: true },
            alignment: { horizontal: "center" },
          };
        } else if (C === 1) {
          ws1[cell_ref].t = "n"; // ensure numeric
          ws1[cell_ref].z = "0.0"; // 1 decimal point
          ws1[cell_ref].s = {
            font: {
              color: {
                rgb: rows[R - 1].Value >= 0 ? "007700" : "FF0000", // use sorted row value
              },
            },
          };
        }
      }
    }

    // ---- Second sheet: Clicked Buttons ----
    const clickedRows = Array.from(clickedButtons).map((btn) => ({
      Button: btn,
    }));
    const ws2 = XLSX.utils.json_to_sheet(clickedRows);
    ws2["!cols"] = [{ wch: 30 }]; // widen column

    // ---- Third sheet: Weights ----
    const combinedRows = [
      ...recommendations.map((r) => ({
        Type: "Recommendation",
        Label: r.label,
        Weight: r.weight,
      })),
      ...clinicalPriority.map((c) => ({
        Type: "Clinical Priority",
        Label: c.label,
        Weight: c.priorityWeight,
      })),
      ...goals.map((g) => ({
        Type: "Goal",
        Label: g.label,
        Weight: g.goalWeight,
      })),
    ];
    const ws3 = XLSX.utils.json_to_sheet(combinedRows);
    ws3["!cols"] = [{ wch: 20 }, { wch: 40 }, { wch: 12 }]; // set column widths

    // ---- Create workbook and append all sheets ----
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws1, "Scores");
    XLSX.utils.book_append_sheet(wb, ws2, "Selected characteristics");
    XLSX.utils.book_append_sheet(wb, ws3, "Weights");

    // ---- Export workbook ----
    const excelBuffer = XLSX.write(wb, {
      bookType: "xlsx",
      type: "array",
      cellStyles: true,
    });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "file-test.xlsx");
  };

  function useAlignRequiredAndNoB() {
    useEffect(() => {
      function updateMargins() {
        // Find the maximum width of any .required-b element
        const requiredWidths = Array.from(
          document.querySelectorAll<HTMLElement>(".required-b")
        ).map((el) => el.offsetWidth);

        const maxRequiredWidth =
          requiredWidths.length > 0 ? Math.max(...requiredWidths) : 0;

        console.log(maxRequiredWidth);

        // Apply marginLeft to every .no-b
        document.querySelectorAll<HTMLElement>(".no-b").forEach((el) => {
          console.log(el);
          el.style.marginLeft = `${maxRequiredWidth + 24 - el.offsetWidth}px`;
        });
      }

      // Run once on mount
      updateMargins();

      // Update on window resize
      window.addEventListener("resize", updateMargins);

      return () => {
        window.removeEventListener("resize", updateMargins);
      };
    }, [score]);
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Box
        sx={{
          position: "fixed", // keep fixed on scroll
          top: 0, // start from top
          left: 0, // align to left
          width: "30%", // keep same width
          height: "100vh", // fill viewport height
          backgroundColor: "#F2ECEE",
          display: "flex",
          overflowY: "auto", // allow scrolling inside box if content overflows
        }}
      >
        <Box
          sx={{
            width: "15%",
            borderRight: "1px solid #ddd",
            display: "flex",
            flexDirection: "column",
            height: "100%", // full viewport height
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
              paddingBottom: "32px",
            }}
          >
            <RoundButton imageName="edit" click={handleWeightEdit} />
            <RoundButton imageName="reset" click={handleReset} />
            <RoundButton imageName="download" click={handleExport} />
          </Box>
        </Box>

        <Box p={3} sx={{ width: "75%", textAlign: "left" }}>
          <Typography variant="h2" sx={{ fontSize: "16px", fontWeight: 600 }}>
            Features
          </Typography>
          <Box mt={5} sx={{ overflowWrap: "anywhere" }}>
            <Box mt={5} pb={2} sx={{ overflowWrap: "anywhere" }}>
              {/* Positive & Neutral results */}
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    gap: 6,
                    alignItems: "stretch",
                  }}
                >
                  <Box
                    className="hey2"
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      {/* High scores */}
                      <Box className="required-scores-container">
                        {Object.entries(score)
                          .filter(([_, value]) => value > 0 && value >= 100)
                          .sort((a, b) => b[1] - a[1])
                          .map(([key, value]) => (
                            <Typography
                              key={key}
                              sx={{
                                padding: "2px 0",
                                fontSize: "13px",
                                display: "flex",
                                justifyContent: "space-between",
                                color: "#79AC78",
                                "& span": {
                                  whiteSpace: "nowrap",
                                  paddingLeft: 3,
                                },
                              }}
                            >
                              {key}
                              <span>
                                <b
                                  data-value={String(value)}
                                  className="required-b"
                                >
                                  Required
                                </b>
                              </span>
                            </Typography>
                          ))}
                      </Box>

                      {/* Non-high scores */}
                      <Box className="hey4" ref={hey4Ref}>
                        {Object.entries(score)
                          .filter(([_, value]) => value > 0 && value < 100)
                          .sort((a, b) => b[1] - a[1])
                          .map(([key, value]) => (
                            <Typography
                              key={key}
                              sx={{
                                fontSize: "13px",
                                display: "flex",
                                justifyContent: "space-between",
                                "& span": {
                                  whiteSpace: "nowrap",
                                  paddingLeft: 3,
                                },
                              }}
                            >
                              {key}
                              <span className="no-b">{value.toFixed(1)}</span>
                            </Typography>
                          ))}
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    className="hey3"
                    ref={hey3Ref}
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between", // optional: distribute items evenly
                    }}
                  >
                    <Typography sx={{ fontSize: "13px", color: "#969696" }}>
                      Strongly
                    </Typography>
                    <Typography sx={{ fontSize: "13px", color: "#969696" }}>
                      Prefer
                    </Typography>

                    {/* Triangle arrow stays at top */}
                    <Box
                      sx={{
                        width: 0,
                        height: 0,
                        borderLeft: "3px solid transparent",
                        borderRight: "3px solid transparent",
                        borderBottom: `${Math.sqrt(3) * 3}px solid #969696`,
                        margin: "5px auto 0",
                      }}
                    />

                    {/* Vertical line stretches */}
                    <Box
                      sx={{
                        width: "1px",
                        flex: 1, // <--- grows to fill remaining height
                        backgroundColor: "#969696",
                        margin: "0 auto 5px",
                      }}
                    />

                    <Typography sx={{ fontSize: "13px", color: "#969696" }}>
                      Prefer
                    </Typography>
                  </Box>
                </Box>

                <Box
                  mt={8}
                  sx={{
                    display: "flex",
                    width: "100%",
                    gap: 6,
                    alignItems: "stretch",
                  }}
                >
                  <Box
                    className="hey2"
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    {Object.entries(score)
                      .filter(([_, value]) => value < 0) // only negative
                      .filter(([_, value]) => value !== 0) // skip zero
                      .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))
                      .map(([key, value]) => {
                        const isVeryNegative = value <= -100;
                        return (
                          <Typography
                            key={key}
                            sx={{
                              padding: "2px 0",
                              fontSize: "13px",
                              display: "flex",
                              justifyContent: "space-between",
                              color: "crimson",
                              "& span": {
                                whiteSpace: "nowrap",
                                paddingLeft: 3,
                              },
                            }}
                          >
                            {key}
                            <span>
                              {isVeryNegative ? <b>CI*</b> : value.toFixed(1)}
                            </span>
                          </Typography>
                        );
                      })}

                    {Object.values(score).some((v) => v < 0) && (
                      <Typography
                        mt={"75px"}
                        sx={{ color: "crimson", fontSize: "13px" }}
                      >
                        *Ci = Contraindication
                      </Typography>
                    )}
                  </Box>
                  <Box className="hey" sx={{ textAlign: "left", opacity: 0 }}>
                    <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                      Strongly
                    </Typography>
                    <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                      Prefer
                    </Typography>

                    <Box
                      sx={{
                        width: "0",
                        height: "0",
                        borderLeft: "5px solid transparent",
                        borderRight: "5px solid transparent",
                        borderBottom: "5px solid black",
                        margin: "0 auto",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        width: "1px",
                        height: "100px",
                        backgroundColor: "black",
                        margin: "0 auto",
                      }}
                    ></Box>

                    <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                      Prefer
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box p={1} sx={{ marginLeft: "30%" }}>
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
              sx={{ fontSize: "60px", textAlign: "left", fontWeight: 600 }}
            >
              Intermittent Catheter Selection Tool
            </Typography>
            <Typography mt={2} sx={{ textAlign: "left" }}>
              For personalized, confident selection of intermittent catheters.
            </Typography>
          </Box>
          <img
            src="/hero.png"
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
      <Box>
        <Modal
          open={modal}
          onClose={() => setModal(false)}
          aria-labelledby="weight-edit-modal-title"
          aria-describedby="weight-edit-modal-description"
        >
          <Paper
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              height: "75vh",
              borderRadius: 4,
              boxShadow: 24,
              padding: "75px",
              display: "flex",
              flexDirection: "column",
              transition: "height 0.2s ease",
            }}
          >
            {/* Header with close button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                id="weight-edit-modal-title"
                variant="h6"
                fontWeight="600"
              >
                Edit Weights
              </Typography>
              <IconButton
                sx={{
                  transform: "translateX(12px)",
                  "&:hover": {
                    paddingRight: "8px",
                  },
                }}
                onClick={() => setModal(false)}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Tabs */}
            <Tabs
              value={tabIndex}
              onChange={(_, newValue) => setTabIndex(newValue)}
              sx={{
                mt: 2,
                borderBottom: 1,
                borderColor: "divider",
                "& .MuiTabs-flexContainer": {
                  justifyContent: "space-between",
                },
              }}
            >
              <Tab
                label="Recommendations"
                sx={{ width: "33%", alignItems: "flex-start" }}
              />
              <Tab
                label="Goal ID"
                sx={{ width: "33%", alignItems: "flex-start" }}
              />
              <Tab
                label="Clinical Priority"
                sx={{ width: "33%", alignItems: "flex-start" }}
              />
            </Tabs>

            {/* Tab panels */}
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                mt: 2,
                borderBottom: "1px solid #ddd",
              }}
            >
              {tabIndex === 0 && (
                <Typography>
                  {tabIndex === 0 && (
                    <Box>
                      <table
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          tableLayout: "fixed",
                        }}
                      >
                        <thead>
                          <tr>
                            <th
                              style={{
                                textAlign: "left",
                                padding: "8px",
                                width: "66%",
                                paddingRight: 0,
                              }}
                            >
                              Recommendation
                            </th>
                            <th
                              style={{
                                textAlign: "left",
                                padding: "8px 8px 8px 16px",
                              }}
                            >
                              Weight
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {draftRecommendations.map((row, index) => (
                            <tr key={row.label}>
                              <td
                                style={{
                                  padding: "8px",
                                  width: "66%",
                                  paddingRight: 0,
                                }}
                              >
                                {row.label}
                              </td>
                              <td
                                style={{
                                  padding: "8px 8px 8px 16px",
                                  width: "20%",
                                }}
                              >
                                <input
                                  type="number"
                                  value={row.weight}
                                  onChange={(e) => {
                                    const raw = e.target.value;

                                    // allow user to type "-" without instantly breaking parseFloat
                                    const newValue =
                                      raw === "" || raw === "-"
                                        ? raw
                                        : parseFloat(raw);

                                    setDraftRecommendations((prev) =>
                                      prev.map((r, i) =>
                                        i === index
                                          ? { ...r, weight: newValue as number }
                                          : r
                                      )
                                    );
                                  }}
                                  style={{
                                    padding: "4px",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc",
                                    paddingRight: 0,
                                    width: "50%",
                                  }}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </Box>
                  )}
                </Typography>
              )}
              {tabIndex === 1 && (
                <Typography>
                  {tabIndex === 1 && (
                    <Box>
                      <table
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          tableLayout: "fixed",
                        }}
                      >
                        <thead>
                          <tr>
                            <th
                              style={{
                                textAlign: "left",
                                padding: "8px",
                                width: "66%",
                                paddingRight: 0,
                              }}
                            >
                              Goal ID
                            </th>
                            <th
                              style={{
                                textAlign: "left",
                                padding: "8px 8px 8px 16px",
                              }}
                            >
                              Goal Weight
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {draftGoals.map((row, index) => (
                            <tr key={row.label}>
                              <td
                                style={{
                                  padding: "8px",
                                  width: "66%",
                                  paddingRight: 0,
                                }}
                              >
                                {row.label}
                              </td>
                              <td
                                style={{
                                  padding: "8px 8px 8px 16px",
                                  width: "20%",
                                }}
                              >
                                <input
                                  type="number"
                                  value={row.goalWeight}
                                  onChange={(e) => {
                                    const raw = e.target.value;

                                    // allow user to type "-" without instantly breaking parseFloat
                                    const newValue =
                                      raw === "" || raw === "-"
                                        ? raw
                                        : parseFloat(raw);

                                    setDraftGoals((prev) =>
                                      prev.map((r, i) =>
                                        i === index
                                          ? {
                                              ...r,
                                              goalWeight: newValue as number,
                                            }
                                          : r
                                      )
                                    );
                                  }}
                                  style={{
                                    padding: "4px",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc",
                                    paddingRight: 0,
                                    width: "50%",
                                  }}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </Box>
                  )}
                </Typography>
              )}
              {tabIndex === 2 && (
                <Typography>
                  {tabIndex === 2 && (
                    <Box>
                      <table
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          tableLayout: "fixed",
                        }}
                      >
                        <thead>
                          <tr>
                            <th
                              style={{
                                textAlign: "left",
                                padding: "8px",
                                width: "66%",
                                paddingRight: 0,
                              }}
                            >
                              Clinical Priority
                            </th>
                            <th
                              style={{
                                textAlign: "left",
                                padding: "8px 8px 8px 16px",
                              }}
                            >
                              Priority Weight
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {draftClinicalPriority.map((row, index) => (
                            <tr key={row.label}>
                              <td
                                style={{
                                  padding: "8px",
                                  width: "66%",
                                  paddingRight: 0,
                                }}
                              >
                                {row.label}
                              </td>
                              <td
                                style={{
                                  padding: "8px 8px 8px 16px",
                                  width: "20%",
                                }}
                              >
                                <input
                                  type="number"
                                  value={row.priorityWeight}
                                  onChange={(e) => {
                                    const raw = e.target.value;

                                    // allow user to type "-" without instantly breaking parseFloat
                                    const newValue =
                                      raw === "" || raw === "-"
                                        ? raw
                                        : parseFloat(raw);

                                    setDraftClinicalPriority((prev) =>
                                      prev.map((r, i) =>
                                        i === index
                                          ? {
                                              ...r,
                                              priorityWeight:
                                                newValue as number,
                                            }
                                          : r
                                      )
                                    );
                                  }}
                                  style={{
                                    padding: "4px",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc",
                                    paddingRight: 0,
                                    width: "50%",
                                  }}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </Box>
                  )}
                </Typography>
              )}
            </Box>

            {/* Footer */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "75px",
                gap: 2,
              }}
            >
              <button onClick={() => setModal(false)}>Cancel</button>
              <button
                onClick={() => {
                  setRecommendations(draftRecommendations); // commit changes
                  setClinicalPriority(draftClinicalPriority);
                  setGoals(draftGoals);
                  setModal(false);
                }}
                style={{
                  background: hasChanges ? "#6a1b9a" : "#ccc",
                  color: "white",
                  padding: "6px 16px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: hasChanges ? "pointer" : "not-allowed",
                }}
                disabled={!hasChanges}
              >
                Recalculate
              </button>
            </Box>
          </Paper>
        </Modal>
      </Box>
    </Box>
  );
}

export default App;

import { Button } from "@mui/material";

const SideButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        padding: 0,
        backgroundColor: "#F1D3F9",
        minWidth: 0,
        marginTop: "15%",
        width: "65%",
        aspectRatio: "1 / 1",
        boxShadow: "none",
        borderRadius: "16px",
        display: "flex", // allow content alignment
        alignItems: "center", // vertical center
        justifyContent: "center", // horizontal center
        "&:hover": {
          backgroundColor: "#DE98F1",
        },
      }}
    >
      <img
        src="/home.png"
        alt="image"
        style={{
          width: "50%",
        }}
      />
    </Button>
  );
};

export default SideButton;

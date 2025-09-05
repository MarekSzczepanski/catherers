import { Button } from "@mui/material";

const RoundButton = (props: any) => {
  return (
    <Button
      variant="contained"
      onClick={props.click}
      sx={{
        padding: 0,
        backgroundColor: "transparent",
        minWidth: 0,
        width: "60%",
        aspectRatio: "1 / 1",
        boxShadow: "none",
        borderRadius: "50%",
        border: "1px solid #808080",
        display: "flex", // allow content alignment
        alignItems: "center", // vertical center
        justifyContent: "center", // horizontal center
        "&:hover": {
          backgroundColor: "#F1D3F9",
        },
      }}
    >
      <img
        src={`/${props.imageName}.png`}
        alt="image"
        style={{
          width: "40%",
        }}
      />
    </Button>
  );
};

export default RoundButton;

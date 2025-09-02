import { Button } from "@mui/material";

const SideButton = () => {
  return (
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
  );
};

export default SideButton;

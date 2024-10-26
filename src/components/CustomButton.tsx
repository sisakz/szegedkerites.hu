import { Button } from "@mui/material";

interface CustomButtonProps {
  children: React.ReactNode;
  outlined?: boolean;
}
const CustomButton = ({ children, outlined }: CustomButtonProps) => {
  return (
    <Button
      variant={outlined ? "outlined" : "contained"}
      sx={{
        color: "primary.contrastText",
        // backgroundColor: "primary.main",
        py: "10px",
        px: "15px",
        margin: "10px",
        borderColor: outlined ? "primary.contrastText" : "transparent",
        maxWidth: "200px",
        minWidth: "150px",
      }}
    >
      {children}
    </Button>
  );
};
export default CustomButton;

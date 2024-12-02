import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface CustomButtonProps {
  children: React.ReactNode;
  outlined?: boolean;
  to?: string;
  backgroundColor?: string;
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success"
    | "inherit"
    | "light"
    | undefined;
}
const CustomButton = ({
  children,
  outlined,
  to,
  color = "primary",
}: CustomButtonProps) => {
  const CustomButton_ = (
    <Button
      variant={outlined ? "outlined" : "contained"}
      color={color}
      sx={{
        // backgroundColor: backgroundColor,
        py: "10px",
        px: "15px",
        margin: "10px",
        // borderColor: outlined ? "primary.contrastText" : "transparent",
        maxWidth: "200px",
        minWidth: "150px",
      }}
    >
      {children}
    </Button>
  );

  return (
    <>
      {to && <Link to={to}>{CustomButton_}</Link>}
      {!to && <>{CustomButton_}</>}
    </>
  );
};

export default CustomButton;

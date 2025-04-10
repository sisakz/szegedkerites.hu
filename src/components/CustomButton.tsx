import { Button } from "@mui/material";
import { Link } from "react-router-dom";

type ColorType =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success"
  | "inherit"
  | undefined;

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
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
}
const CustomButton = ({
  children,
  outlined,
  to,
  color = "primary",
  disabled = false,
  type,
}: CustomButtonProps) => {
  const CustomButton_ = (
    <Button
      variant={outlined ? "outlined" : "contained"}
      color={color as ColorType}
      disabled={disabled}
      sx={{
        py: "10px",
        px: "15px",
        margin: "10px",
        maxWidth: "200px",
        minWidth: "150px",
      }}
      type={type}
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

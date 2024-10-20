import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  key?: string;
}
const Link = ({ to, children }: LinkProps) => {
  return (
    <MuiLink component={RouterLink} to={to} sx={{ textDecoration: "none" }}>
      {children}
    </MuiLink>
  );
};

export default Link;

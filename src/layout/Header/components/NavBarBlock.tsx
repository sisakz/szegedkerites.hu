import { Box } from "@mui/material";

interface NavBarBlockProps {
  children?: React.ReactNode;
  align?: "left" | "center" | "right";
}
const NavBarBlock = ({ children, align }: NavBarBlockProps) => (
  <Box
    sx={{
      height: "56px",
      display: "flex",
      alignItems: "center",
      justifyContent:
        align === "center" ? "center" : align === "right" ? "right" : "left",
    }}
  >
    {children}
  </Box>
);

export default NavBarBlock;

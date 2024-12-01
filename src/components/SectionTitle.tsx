import { Typography } from "@mui/material";

interface SectionTitleProps {
  children: React.ReactNode;
  color?: string;
  align?: "left" | "center" | "right";
}

const SectionTitle = ({ children, color, align }: SectionTitleProps) => {
  return (
    <Typography
      variant="h2"
      textAlign={align}
      color={color}
      sx={{ width: "100%", mt: 8, mb: 2 }}
    >
      {children}
    </Typography>
  );
};
export default SectionTitle;

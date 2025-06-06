import { Typography } from "@mui/material";

interface SectionTitleProps {
  children: React.ReactNode;
  color?: string;
  align?: "left" | "center" | "right";
  mt?: number;
}

const SectionTitle = ({
  children,
  color,
  align,
  mt = 8,
}: SectionTitleProps) => {
  return (
    <Typography
      variant="h2"
      textAlign={align}
      color={color}
      sx={{ width: "100%", mt, mb: 2 }}
    >
      {children}
    </Typography>
  );
};
export default SectionTitle;

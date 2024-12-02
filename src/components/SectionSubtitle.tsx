import { Typography } from "@mui/material";

interface SectionSubtitleProps {
  children: React.ReactNode;
  color?: string;
  align?: "left" | "center" | "right";
  mt?: number;
}

const SectionSubtitle = ({
  children,
  color,
  align,
  mt = 8,
}: SectionSubtitleProps) => {
  return (
    <Typography
      variant="h6"
      textAlign={align}
      textTransform={"uppercase"}
      color={color}
      sx={{ width: "100%", mt, mb: 2 }}
    >
      {children}
    </Typography>
  );
};
export default SectionSubtitle;

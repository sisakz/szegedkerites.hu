import { Box, Container } from "@mui/material";

interface SectionProps {
  children: React.ReactNode;
  background?: "light" | "primary" | "secondary" | "success" | "info" | "dark";
  id?: string;
  backgroundImage?: string;
}
const Section = ({
  children,
  background,
  id,
  backgroundImage,
}: SectionProps) => {
  const backgroundColor = `${background}.main`;
  const color = background === "light" ? "black" : "primary.contrastText";
  return (
    <Box
      component="section"
      id={id}
      sx={{
        backgroundImage: backgroundImage
          ? `linear-gradient(rgba(235, 235, 235, 1) 0%, rgba(235, 235, 235, 1) 50%, rgba(235, 235, 235, 0.3) 100%), url(${backgroundImage})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: backgroundColor,
        width: "100%",
        pt: 3,
        pb: 9,
        color: `${color}`,
        minHeight: "500px",
        px: 1,
      }}
    >
      <Container sx={{}}>{children}</Container>
    </Box>
  );
};

export default Section;

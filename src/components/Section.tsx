import { Box, Container } from "@mui/material";

interface SectionProps {
  children: React.ReactNode;
  background?: "light" | "primary" | "secondary" | "success" | "info";
}
const Section = ({ children, background }: SectionProps) => {
  const backgroundColor =
    background === "light" ? "light.main" : `${background}.main`;
  const color = background === "light" ? "black" : "primary.contrastText";
  console.log("color", color, "backgroundColor", backgroundColor);
  return (
    <section>
      <Box
        id="section"
        sx={{
          backgroundColor: backgroundColor,
          width: "100%",
          pt: 3,
          pb: 9,
          color: `${color}`,
        }}
      >
        <Container>{children}</Container>
      </Box>
    </section>
  );
};

export default Section;

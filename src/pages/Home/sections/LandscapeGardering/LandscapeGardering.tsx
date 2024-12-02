import Section from "@/components/Section";
import SectionSubtitle from "@/components/SectionSubtitle";
import SectionTitle from "@/components/SectionTitle";
import { useStaticContents } from "@/hooks/dato";
import { Box, Stack, Typography } from "@mui/material";
import { StructuredText } from "react-datocms";

const LandscapeGardering = () => {
  const { content: landscapeGardering } = useStaticContents(
    "landscape-gardering-section"
  );
  const { title, content } = landscapeGardering;
  return (
    <>
      <Section id="kertepites" background="light">
        <Stack
          sx={{
            mb: 4,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            gap: 4,
            borderRadius: "30px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${landscapeGardering.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
          <Box sx={{ pl: 3, pr: 6, py: 6 }}>
            <SectionSubtitle align="left" mt={0}>
              {title}
            </SectionSubtitle>
            <SectionTitle mt={0} align="left">
              {title}
            </SectionTitle>
            <Typography textAlign="justify" variant="body2">
              <StructuredText data={content} />
            </Typography>
          </Box>
        </Stack>
      </Section>
    </>
  );
};

export default LandscapeGardering;

import CustomButton from "@/components/CustomButton";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { Box, Stack, Typography } from "@mui/material";
import { useStaticContents } from "@/hooks/dato";
import { StructuredText } from "react-datocms";

const Experiences = () => {
  const { content: experiences } = useStaticContents("experiences-section");
  const { title, content, image } = experiences;

  return (
    <Section background="light" id="rolunk">
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "5fr 2fr" },
          mt: { xs: 2, md: 8 },
        }}
        spacing={2}
        gap={4}
      >
        <Stack spacing={2} gap={2} sx={{ height: "100%", mr: 4 }}>
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ textTransform: "uppercase" }}
          >
            Rólunk
          </Typography>
          <SectionTitle color="primary">{title}</SectionTitle>
          <StructuredText data={content} />
          <Stack
            alignItems="left"
            justifyContent="space-between"
            sx={{ width: "100%", mt: 8 }}
          >
            <CustomButton to="/#ajanlat">Ajánlatot kérek</CustomButton>
          </Stack>
        </Stack>
        <Stack spacing={2} gap={2} alignItems="center" sx={{ ml: 8 }}>
          <Box>
            <img src={image} style={{ width: "100%" }} alt="Szabó István" />
          </Box>
          <Typography variant="h6" sx={{ mt: "-12px !important" }}>
            Szabó István, cégvezető
          </Typography>
        </Stack>
      </Stack>
    </Section>
  );
};

export default Experiences;

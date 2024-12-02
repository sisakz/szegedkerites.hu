import CustomButton from "@/components/CustomButton";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { Stack, Typography } from "@mui/material";
import ReferenceSlider from "./ReferenceSlider";
import { useMobile } from "@/hooks/useMobile";
import { useReferenceCards, useStaticContents } from "@/hooks/dato";
import { StructuredText } from "react-datocms";

const References = () => {
  const isMobile = useMobile();
  const { referenceCards } = useReferenceCards();
  const { content: referencesSection } =
    useStaticContents("references-section");
  const { title, content } = referencesSection;
  return (
    <Section background="light" id="referenciak">
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
          mt: { xs: 2, md: 8 },
        }}
        spacing={2}
        gap={2}
      >
        <Stack spacing={2} gap={2} sx={{ height: "100%" }}>
          <SectionTitle color="primary">{title}</SectionTitle>
          <Typography variant="body2">
            <StructuredText data={content} />
          </Typography>
          <Stack
            alignItems="left"
            justifyContent="space-between"
            sx={{ width: "100%", mt: 8 }}
          >
            {!isMobile && (
              <CustomButton to="/#ajanlat">Ajánlatot kérek</CustomButton>
            )}
          </Stack>
        </Stack>
        <ReferenceSlider referenceCards={referenceCards} />
      </Stack>
    </Section>
  );
};

export default References;

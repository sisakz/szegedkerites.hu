import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import benefitsBackground from "@/assets/images/benefits-background-1200x800.webp";
import { Box, Stack } from "@mui/material";
import BenefitCard from "./BenefitCard";
import { benefitCards } from "./benefitCards";
import CustomButton from "@/components/CustomButton";

const Benefits = () => {
  return (
    <Section
      id="benefits"
      background="light"
      backgroundImage={benefitsBackground}
    >
      <SectionTitle color="primary.main" align="center">
        Miért pont Szegedkerítés?
      </SectionTitle>
      <Box>
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: { sx: "1fr", md: "repeat(3,1fr)" },
            gap: 4,
            alignItems: "start", // Align items to the top vertically
            justifyItems: "center", // Center items horizontally
            mt: { xs: 2, md: 8 },
          }}
          spacing={2}
          gap={2}
        >
          {benefitCards.map((benefit, index) => (
            <BenefitCard key={index} title={benefit.title} icon={benefit.icon}>
              {benefit.description}
            </BenefitCard>
          ))}
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%", mt: 8 }}
        >
          <CustomButton>Ajánlatot kérek</CustomButton>
        </Stack>
      </Box>
    </Section>
  );
};

export default Benefits;

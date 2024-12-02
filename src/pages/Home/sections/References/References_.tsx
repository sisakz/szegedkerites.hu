import CustomButton from "@/components/CustomButton";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { Stack, Typography } from "@mui/material";
import ReferenceSlider from "./ReferenceSlider";
import { useMobile } from "@/hooks/useMobile";
import { useReferenceCards } from "@/hooks/dato";

const References = () => {
  const isMobile = useMobile();
  const { referenceCards } = useReferenceCards();
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
          <SectionTitle color="primary">Referencia munkáink</SectionTitle>
          <Typography variant="body2">
            Munkáink között olyan sikeres projektek szerepelnek, mint a Szegedi
            Lézerközpont, a szegedi és makói Continental és Contitech gyárak,
            valamint több, a kecskeméti Mercedes beruházásokhoz kapcsolódó
            kerítés telepítési projekt.
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

import CustomButton from "@/components/CustomButton";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { Stack, Typography } from "@mui/material";
import ReferenceCard from "./ReferenceCard";

const References = () => {
  return (
    <Section background="light">
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
          <SectionTitle color="primary">Munkáink</SectionTitle>
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
            <CustomButton>Ajánlatot kérek</CustomButton>
          </Stack>
        </Stack>
        <Stack spacing={2} gap={2} alignItems="center" flexDirection="row">
          <ReferenceCard name="Makói Continental" image="referencia-1">
            a
          </ReferenceCard>
          <ReferenceCard name="3D kerítések" image="referencia-1" details>
            A hajlított kialakítású 3D kerítések ideálisak nagyobb biztonságot
            igénylő ipari parkok, sportlétesítmények és közintézmények
            körbekerítésére.
          </ReferenceCard>
        </Stack>
      </Stack>
    </Section>
  );
};

export default References;

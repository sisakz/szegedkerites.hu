import CustomButton from "@/components/CustomButton";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { Box, Stack, Typography } from "@mui/material";

const Experiences = () => {
  return (
    <Section background="light">
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "4fr 3fr" },
          mt: { xs: 2, md: 8 },
        }}
        spacing={2}
        gap={2}
      >
        <Stack spacing={2} gap={2} sx={{ height: "100%" }}>
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ textTransform: "uppercase" }}
          >
            Rólunk
          </Typography>
          <SectionTitle color="primary">
            Tapasztalat és szakértelem
          </SectionTitle>
          <Typography variant="body2">
            2001-ben indult kertépítő vállalkozásom kínálatát 2010-ben
            bővítettük ipari kerítések forgalmazásával és telepítésével, mely
            gyorsan az egyik fő profilunkká vált a klasszikus kertépítési munkák
            mellett.
          </Typography>
          <Typography variant="body2">
            Az elmúlt 15 évben felhalmozott tudásnak és tapasztalatnak,
            széleskörű és prémium kínálatunknak, valamint szakszerű
            szolgáltatásink köszönhetően mára már több mint 100 sikeres kerítés
            telepítési projektet tudhatunk magunk mögött.{" "}
          </Typography>
          <Stack
            alignItems="left"
            justifyContent="space-between"
            sx={{ width: "100%", mt: 8 }}
          >
            <CustomButton>Ajánlatot kérek</CustomButton>
          </Stack>
        </Stack>
        <Stack spacing={2} gap={2} alignItems="center">
          <Box
            sx={{
              width: "80%",
              borderRadius: "500px",
              backgroundColor: "primary.main",
              aspectRatio: "1/1",
              overflow: "hidden",
            }}
          >
            <img src="" alt="" />
          </Box>
          <Typography variant="body2">
            Szabó István, Ügyvezető Igazgató
          </Typography>
        </Stack>
      </Stack>
    </Section>
  );
};

export default Experiences;

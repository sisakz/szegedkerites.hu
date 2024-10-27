import Section from "@/components/Section";
import { Stack, Typography } from "@mui/material";
import HeroContainer from "./HeroContainer";
import CustomButton from "@/components/CustomButton";

const Hero = () => {
  return (
    <Section background="light">
      <HeroContainer>
        <Typography variant="h1" sx={{ width: "100%" }}>
          2D-s és 3D-s kerítések azonnali készletről Szegeden
        </Typography>
        <Typography variant="body2" sx={{ width: "100%" }}>
          Széles választékkal, teljeskörű szolgáltatással és szakértő
          tanácsadással várjuk
        </Typography>
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <CustomButton to="/#ajanlat">Ajánlatot kérek</CustomButton>
          <CustomButton outlined>Bővebben</CustomButton>
        </Stack>
      </HeroContainer>
    </Section>
  );
};

export default Hero;

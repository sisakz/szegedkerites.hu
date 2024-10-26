import { Box, Stack } from "@mui/material";
import heroImage from "@/assets/images/hero-image.webp";

interface HeroContainerProps {
  children: React.ReactNode;
}

const HeroContainer = ({ children }: HeroContainerProps) => {
  return (
    <Stack
      id="hero"
      sx={{
        aspectRatio: "1150/650",
        backgroundColor: "dark.main",
        borderRadius: "50px",
        p: { xs: 3, md: 18 },

        backgroundImage: {
          xs: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.2) 100%), url(${heroImage})`,
          md: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 100%), url(${heroImage})`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center",

        color: "primary.contrastText",
        maxidth: "100%",
        mb: -8,
      }}
    >
      <Stack
        spacing={4}
        flexDirection="column"
        justifyContent="space-between"
        sx={{ width: { xs: "100%", md: "50%" } }}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default HeroContainer;

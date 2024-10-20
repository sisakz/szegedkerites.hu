import Section from "@/components/Section";
import { Button, Stack, Typography } from "@mui/material";
import heroImage from "@/assets/images/hero-image.webp";

const Hero = () => {
  return (
    <Section background="light">
      <Stack
        id="hero"
        spacing={3}
        sx={{
          // height: "100%",
          aspectRatio: "1150/750",
          backgroundColor: "dark.main",
          borderRadius: "50px",
          px: { xs: "25px", md: "100px" },
          py: { xs: "25px", md: "150px" },
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 100%), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-grow",
          color: "primary.contrastText",
          maxidth: "100%",
        }}
      >
        <Typography variant="h1" sx={{ width: "70%" }}>
          2D-s és 3D-s kerítések azonnali készletről Szegeden
        </Typography>
        <Typography variant="body2" sx={{ width: "70%" }}>
          Kérjen ajánlatot vagy tekintse meg magas minőségű kerítéstípusokból
          álló kollekciónkat.
        </Typography>
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <CustomButton>Ajánlatot kérek</CustomButton>
          <CustomButton outlined>Bővebben</CustomButton>
        </Stack>
      </Stack>
    </Section>
  );
};

interface CustomButtonProps {
  children: React.ReactNode;
  outlined?: boolean;
}

const CustomButton = ({ children, outlined }: CustomButtonProps) => {
  return (
    <Button
      variant={outlined ? "outlined" : "contained"}
      sx={{
        color: "primary.contrastText",
        // backgroundColor: "primary.main",
        padding: "15px",
        margin: "10px",
        borderColor: outlined ? "primary.contrastText" : "transparent",
        maxWidth: "200px",
      }}
    >
      {children}
    </Button>
  );
};

export default Hero;

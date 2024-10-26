import PageContainer from "@/components/PageContainer";
import { Box, Stack } from "@mui/material";
import benefitsBackground from "@/assets/images/benefits-background-1200x800.webp";

const Kapcsolat = () => {
  return (
    <PageContainer>
      <Box>
        <Box
          component="section"
          sx={{
            width: "100vw",
            minHeight: "200px",
            // height: "500px",
            background: `linear-gradient(rgba(235, 235, 235, 1) 0%, rgba(235, 235, 235, 1) 50%, rgba(235, 235, 235, 0.3) 100%), url(${benefitsBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: { sx: "1fr", md: "repeat(3,1fr)" },
              alignItems: "start", // Align items to the top vertically
              justifyItems: "center", // Center items horizontally
            }}
            spacing={2}
            gap={2}
          ></Stack>
        </Box>
      </Box>
      <Box>
        <h1>Form</h1>
      </Box>
    </PageContainer>
  );
};
export default Kapcsolat;

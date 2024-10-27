import { Box, Container, Stack } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: "dark.light",
          color: "primary.contrastText",
        }}
      >
        <Container>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ minHeight: "100px" }}
            mt={-4}
          >
            <Box>© 2024 Szabókert Kft.</Box>
          </Stack>
        </Container>
      </Box>
    </footer>
  );
};
export default Footer;

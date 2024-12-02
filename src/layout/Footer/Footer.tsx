import { useStaticContents } from "@/hooks/dato";
import { Box, Container, Stack, Typography } from "@mui/material";
import { StructuredText } from "react-datocms";

const Footer = () => {
  const { content: footer } = useStaticContents("footer");
  const { title, content } = footer;
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
            <Box textAlign="center" sx={{ my: 4 }}>
              <Typography variant="body2" fontWeight={600} sx={{ mb: 2 }}>
                {title}
              </Typography>
              <Typography variant="body2">
                <StructuredText data={content} />
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </footer>
  );
};
export default Footer;

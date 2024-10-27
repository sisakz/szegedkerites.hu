import PageContainer from "@/components/PageContainer";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { Stack, Typography } from "@mui/material";

const Contact = () => {
  return (
    <PageContainer>
      <Section>
        <Stack gap={2}>
          <SectionTitle color="primary.main">Kapcsolat</SectionTitle>
          <Typography variant="body1" color="primary.main">
            Ha bármilyen kérdése van, keressen minket az alábbi elérhetőségeken:
          </Typography>
          <Typography variant="body1" color="primary.main">
            Email:{" "}
            <a href="mailto:info@szegedkerites.hu">info@szegedkerites.hu</a>
          </Typography>
          <Typography variant="body1" color="primary.main">
            Telefon: +36 30 123 4567
          </Typography>
        </Stack>
      </Section>
    </PageContainer>
  );
};
export default Contact;

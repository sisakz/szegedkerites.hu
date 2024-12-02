import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { Stack, Typography } from "@mui/material";
import SeviceCard from "./ServiceCard";
import { StructuredText } from "react-datocms";
import { useStaticContents } from "@/hooks/dato";
import SectionSubtitle from "@/components/SectionSubtitle";
import CustomButton from "@/components/CustomButton";

const Services = () => {
  const { content: services } = useStaticContents("services-section");
  const { title, subtitle, content } = services;
  const { content: serviceCardAdvice } = useStaticContents(
    "service-card-advice"
  );
  const { content: serviceCardImplementation } = useStaticContents(
    "service-card-implementation"
  );
  return (
    <Section id="szolgaltatasok" background="dark">
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "3fr 3fr 3fr" },
          gap: 6,
          my: 4,
        }}
      >
        <Stack>
          <SectionSubtitle align="left" mt={0}>
            {subtitle}
          </SectionSubtitle>
          <SectionTitle align="left" mt={0}>
            {title}
          </SectionTitle>
          <Typography textAlign="left" variant="body2">
            <StructuredText data={content} />
          </Typography>
          <CustomButton to="/#ajanlat" color="light">
            Ajánlatot kérek
          </CustomButton>
        </Stack>
        <SeviceCard
          name={serviceCardAdvice.title}
          image={serviceCardAdvice.image}
        >
          <StructuredText data={serviceCardAdvice.content} />
        </SeviceCard>
        <SeviceCard
          name={serviceCardImplementation.title}
          image={serviceCardImplementation.image}
        >
          <StructuredText data={serviceCardAdvice.content} />
        </SeviceCard>
      </Stack>
    </Section>
  );
};

export default Services;

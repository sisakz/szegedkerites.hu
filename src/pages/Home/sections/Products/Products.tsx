import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { Box, Stack, Typography } from "@mui/material";
import ProductTypeCard from "./ProductCard";
import { useStaticContents } from "@/hooks/dato";
import { StructuredText } from "react-datocms";
import CustomButton from "@/components/CustomButton";

const Products = () => {
  const { content: productsSection } = useStaticContents("products-section");
  const { title, content } = productsSection;
  const { content: productCard2dKerites } = useStaticContents(
    "product-card-2d-kerites"
  );
  const { content: productCard3dKerites } = useStaticContents(
    "product-card-3d-kerites"
  );
  return (
    <Section id="termekeink" background="dark">
      <SectionTitle align="center">{title}</SectionTitle>
      <Stack>
        <Typography textAlign="left" variant="body2">
          <StructuredText data={content} />
        </Typography>
      </Stack>
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 6,
          my: 4,
        }}
      >
        <ProductTypeCard
          name={productCard2dKerites.title}
          image={productCard2dKerites.image}
        >
          <StructuredText data={productCard2dKerites.content} />
        </ProductTypeCard>
        <ProductTypeCard
          name={productCard3dKerites.title}
          image={productCard3dKerites.image}
        >
          <StructuredText data={productCard3dKerites.content} />
        </ProductTypeCard>
      </Stack>
      <Typography
        textAlign="center"
        variant="body2"
        fontWeight={600}
        sx={{ mb: 1 }}
      >
        További kérdése lenne?
      </Typography>
      <Typography textAlign="center" variant="body2">
        Vegye fel velünk a kapcsolatot vagy látogasson ki telephelyünkre, és
        tapasztalt kollegáink segítenek önnek kiválasztani a projektjéhez és
        igényeihez illeszkedő megoldást.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CustomButton
          to="/#ajanlat"
          backgroundColor="primaryContrastText"
          color="light"
        >
          Kapcsolat
        </CustomButton>
      </Box>
    </Section>
  );
};

export default Products;

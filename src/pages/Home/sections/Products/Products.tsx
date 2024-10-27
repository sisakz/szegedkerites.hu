import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { Stack, Typography } from "@mui/material";
import ProductTypeCard from "./ProductCard";

const Products = () => {
  return (
    <Section id="termekeink" background="dark">
      <SectionTitle align="center">Termékeink</SectionTitle>
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "3fr 3fr 3fr" },
          gap: 6,
          my: 4,
        }}
      >
        <Stack>
          <Typography textAlign="left" variant="body2" sx={{ mt: 2 }}>
            Kerítésmegoldásaink széles választékban elérhetők, hogy minden
            igényt kielégítsenek, legyen szó lakossági vagy ipari
            felhasználásról. Célunk, hogy minőségi és tartós kerítéseket
            biztosítsunk, amelyek hosszú távon megbízható védelmet nyújtanak.
            Kínálatunkban különböző típusú kerítések szerepelnek, amelyek
            ideálisak otthoni, közösségi vagy ipari alkalmazásra.
          </Typography>
          <Typography textAlign="left" variant="body2" sx={{ mt: 2 }}>
            Kerítéseink speciális bevonata ellenáll az időjárási
            viszontagságoknak, így a kerítés tartósan megőrzi minőségét és
            megjelenését.
          </Typography>
        </Stack>
        <ProductTypeCard name="2D kerítések" image="fence2d">
          A 2D kerítések egyszerű és elegáns megoldást nyújtanak kisebb
          területek, lakóövezetek és kertek számára.
        </ProductTypeCard>
        <ProductTypeCard name="3D kerítések" image="fence3d">
          A hajlított kialakítású 3D kerítések ideálisak nagyobb biztonságot
          igénylő ipari parkok, sportlétesítmények és közintézmények
          körbekerítésére.
        </ProductTypeCard>
      </Stack>
    </Section>
  );
};

export default Products;

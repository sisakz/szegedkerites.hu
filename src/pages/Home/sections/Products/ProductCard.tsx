import { Stack, Typography } from "@mui/material";

interface ProductCardProps {
  name: string;
  image: string;
  children: React.ReactNode;
}

const ProductTypeCard = ({ name, image, children }: ProductCardProps) => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "left",
        height: "100%",

        borderRadius: "30px",
        width: "100%",
        backgroundColor: "primary.contrastText",
        m: "0 !important",
        color: "primary.main",

        overflow: "hidden",
      }}
    >
      <img
        src={`/src/assets/images/${image}.webp`}
        alt="Warranty"
        style={{ width: "100%" }}
      />
      <Typography variant="h3" textAlign="left" sx={{ px: 4, pt: 4 }}>
        {name}
      </Typography>
      <Stack
        gap={2}
        justifyContent="space-between"
        sx={{ p: 4, height: "100%" }}
      >
        <Typography variant="body2">{children}</Typography>
        <Typography variant="body2" sx={{ textDecoration: "underline" }}>
          Részletek
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ProductTypeCard;

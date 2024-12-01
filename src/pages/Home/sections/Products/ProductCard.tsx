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
      <Stack
        sx={{
          aspectRatio: "2/1",
          width: "100%",
          backgroundImage: {
            xs: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.2) 100%), url(${image})`,
            md: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 100%), url(${image})`,
          },
          p: 4,
          color: "primary.contrastText",
          justifyContent: "flex-end",
        }}
      >
        <Typography variant="h3">{name}</Typography>{" "}
      </Stack>
      {/* <img
        src={image}
        alt="Warranty"
        style={{ width: "100%", aspectRatio: "16/7" }}
      /> */}

      <Stack
        gap={2}
        justifyContent="space-between"
        sx={{ p: 4, height: "100%" }}
      >
        <Typography variant="body2">{children}</Typography>
      </Stack>
    </Stack>
  );
};

export default ProductTypeCard;

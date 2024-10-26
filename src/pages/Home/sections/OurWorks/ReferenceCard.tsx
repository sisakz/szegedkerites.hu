import { Stack, Typography } from "@mui/material";

interface ReferenceCardProps {
  name: string;
  image: string;
  children: React.ReactNode;
  details?: boolean;
}

const ReferenceCard = ({
  name,
  image,
  children,
  details,
}: ReferenceCardProps) => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "left",
        height: "480px",

        borderRadius: "30px",
        width: "340px",
        backgroundColor: "primary.contrastText",
        m: "0 !important",
        color: "primary.main",

        overflow: "hidden",
        background: `url(/src/assets/images/${image}.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {!details && (
        <Stack
          justifyContent="center"
          alignContent="center"
          sx={{ px: 4, py: 2, backgroundColor: "dark.main" }}
        >
          <Typography
            variant="body2"
            textAlign="left"
            color="primary.contrastText"
            fontWeight={600}
          >
            {name}
          </Typography>
        </Stack>
      )}
      {details && (
        <Stack
          gap={2}
          justifyContent="space-between"
          sx={{ p: 4, height: "100%" }}
        >
          <Typography variant="body2">{children}</Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default ReferenceCard;

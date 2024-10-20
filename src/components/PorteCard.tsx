import { Box, Stack, Typography } from "@mui/material";

interface PortreCardProps {
  name: string;
  title: string;
  image: string;
  quote: string;
  company?: string;
  isMirrored?: boolean;
}
const PortreCard = ({
  name,
  title,
  image,
  quote,
  company,
  isMirrored,
}: PortreCardProps) => {
  console.log(company);
  return (
    <Box
      sx={{
        position: "relative",
        aspectRatio: "6/5",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 2,
      }}
    >
      <Box sx={{ position: "absolute", left: 0, top: 0, height: "100%" }}>
        <img src={image} alt={name} style={{ height: "100%" }} />
      </Box>
      <Stack
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "50%",
          transform: isMirrored ? "translateX(100%)" : "none",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          p: 2,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            fontSize: "3rem",
            color: "success.main",
            fontWeight: 900,
            fontFamily: "serif",
            mt: -2,
          }}
        >
          “
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.5rem", md: "0.9rem" },
            mt: -2,
            lineHeight: 1.2,
            fontWeight: 400,
          }}
        >
          {quote}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "success.main",
            fontSize: { xs: "1rem", md: "0.8rem" },
            fontWeight: 600,
            textTransform: "uppercase",
            mt: 3,
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "0.8rem", md: "0.6rem" },
            textTransform: "uppercase",
            color: "grey.600",
            mt: 0.5,
          }}
        >
          {title}, {company}
        </Typography>
      </Stack>
    </Box>
  );
};

export default PortreCard;

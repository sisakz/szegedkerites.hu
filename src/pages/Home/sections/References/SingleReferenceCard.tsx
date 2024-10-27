import { Stack, Typography } from "@mui/material";
import DetailLine from "./DetailLine";
import brand from "@/assets/images/icons/brand.svg";
import fence from "@/assets/images/icons/fence.svg";
import length from "@/assets/images/icons/length.svg";
import year from "@/assets/images/icons/year.svg";
import { Reference } from "./ReferenceCard";

interface SingleReferenceCardProps {
  name: string;
  image: string;
  details?: boolean;
  reference?: Reference;
}

const SingleReferenceCard = ({
  name,
  image,
  reference,
  details,
}: SingleReferenceCardProps) => {
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
        background: details
          ? `linear-gradient(#353C42CC, #353C42CC), url(/${image}.webp)`
          : `url(/${image}.webp)`,
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
            fontSize="1.1rem"
            fontWeight={600}
          >
            {name}
          </Typography>
        </Stack>
      )}
      {details && reference && (
        <Stack
          gap={2}
          justifyContent="flex-start"
          sx={{ p: 4, height: "100%" }}
        >
          <Typography variant="h3" color="primary.contrastText">
            {reference.name}
          </Typography>
          <DetailLine
            icon={fence}
            label="Kerítés típusa"
            value={reference.type}
          />
          <DetailLine icon={brand} label="Márka" value={reference.type} />
          <DetailLine icon={length} label="Hossz" value={reference.length} />
          <DetailLine
            icon={year}
            label="Telepítés éve"
            value={reference.year.toString()}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default SingleReferenceCard;

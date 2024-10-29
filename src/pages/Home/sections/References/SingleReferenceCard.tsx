import { Stack, Typography } from "@mui/material";
import DetailLine from "./DetailLine";
import brandIcon from "@/assets/images/icons/brand.svg";
import fenceIcon from "@/assets/images/icons/fence.svg";
import lengthIcon from "@/assets/images/icons/length.svg";
import yearIcon from "@/assets/images/icons/year.svg";
import { Reference } from "./ReferenceCard";

interface SingleReferenceCardProps {
  details?: boolean;
  reference: Reference;
}

const SingleReferenceCard = ({
  reference,
  details,
}: SingleReferenceCardProps) => {
  const { name, image, brand, type, year, length } = reference;
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "left",
        height: "480px",
        borderRadius: "30px",
        width: { xs: "270px", md: "340px" },
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
            {name}
          </Typography>
          <DetailLine icon={fenceIcon} label="Kerítés típusa" value={type} />
          <DetailLine icon={brandIcon} label="Márka" value={brand} />
          <DetailLine icon={lengthIcon} label="Hossz" value={length} />
          <DetailLine
            icon={yearIcon}
            label="Telepítés éve"
            value={year.toString()}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default SingleReferenceCard;

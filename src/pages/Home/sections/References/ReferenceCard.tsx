import { Stack } from "@mui/material";
import SingleReferenceCard from "./SingleReferenceCard";

export type Reference = {
  name: string;
  image: string;
  brand: string;
  length: string;
  details: string;
  type: string;
  year: number;
};

interface ReferenceCardProps {
  reference: Reference;
  index: number;
  cardWidth: number;
}

const ReferenceCard = ({ reference, index, cardWidth }: ReferenceCardProps) => {
  return (
    <Stack
      spacing={2}
      gap={"20px"}
      margin={"0 10px !important"}
      padding={0}
      width={cardWidth}
      height={480}
      alignItems="center"
      flexDirection="row"
      key={index}
    >
      <SingleReferenceCard reference={reference} />
      <SingleReferenceCard details reference={reference} />
    </Stack>
  );
};

export default ReferenceCard;

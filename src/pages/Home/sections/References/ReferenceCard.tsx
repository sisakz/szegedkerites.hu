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
}

const ReferenceCard = ({ reference, index }: ReferenceCardProps) => {
  return (
    <Stack
      spacing={2}
      gap={"20px"}
      margin={"0 10px !important"}
      padding={0}
      width={700}
      height={480}
      alignItems="center"
      flexDirection="row"
      key={index}
    >
      <SingleReferenceCard name="Makói Continental" image="referencia-1" />
      <SingleReferenceCard
        name="3D kerítések"
        image="referencia-1"
        details
        reference={reference}
      />
    </Stack>
  );
};

export default ReferenceCard;

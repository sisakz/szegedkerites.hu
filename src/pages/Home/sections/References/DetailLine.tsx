import { Stack, Typography } from "@mui/material";

const DetailLine = ({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) => {
  return (
    <Stack direction="row" gap={1} alignItems="center">
      <img src={icon} alt="" />
      <Typography
        variant="body2"
        color="primary.contrastText"
        fontSize="1.1rem"
        fontWeight={400}
      >
        {`${label}: ${value}`}
      </Typography>
    </Stack>
  );
};

export default DetailLine;

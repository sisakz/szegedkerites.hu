import { Stack, Typography } from "@mui/material";

interface BenefitCardProps {
  title: string;
  children: React.ReactNode;
  icon: string;
}

const BenefitCard = ({ title, children, icon }: BenefitCardProps) => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        px: 4,
        py: 6,
        borderRadius: "30px",
        width: "100%",
        backgroundColor: "primary.contrastText",
        m: "0 !important",
        color: "primary.main",
        gap: 4,
      }}
    >
      <img src={icon} alt={icon} />
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body2" textAlign="center">
        {children}
      </Typography>
    </Stack>
  );
};

export default BenefitCard;

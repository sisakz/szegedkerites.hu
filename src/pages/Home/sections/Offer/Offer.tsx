import CustomButton from "@/components/CustomButton";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

const Offer = () => {
  return (
    <Section background="primary" id="ajanlat">
      <SectionTitle>Kérjen ajánlatot</SectionTitle>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: 400,
          "& .MuiTextField-root": {
            m: 1,
            width: "100%",
            backgroundColor: "white",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <CustomTextField required id="name" label="Név" />
        <CustomTextField required id="email" label="Email cím" />
        <CustomTextField required id="phone" label="Telefon" />
        <CustomTextField
          id="message"
          label="A projekt rövid leírása"
          multiline
          rows={4}
        />
        <Typography variant="body2" color="white">
          A *-gal jelölt mezők kitöltése kötelező.
        </Typography>
        <FormControlLabel
          control={<Checkbox required sx={{ color: "white" }} />}
          label="Elfogadom az adatvédelmi irányelveket"
          sx={{ color: "white" }}
        />
        <CustomButton outlined>Ajánlatot kérek</CustomButton>
      </Box>
    </Section>
  );
};
interface CustomTextFieldProps {
  id: string;
  label: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}
const CustomTextField = ({
  id,
  label,
  required,
  multiline,
  rows,
}: CustomTextFieldProps) => {
  return (
    <TextField
      required={required}
      id={id}
      label={label}
      fullWidth
      multiline={multiline}
      rows={rows}
      variant="filled"
      sx={{
        borderRadius: "5px",
      }}
    />
  );
};

export default Offer;

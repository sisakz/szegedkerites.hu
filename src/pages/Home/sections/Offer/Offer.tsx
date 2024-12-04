import CustomButton from "@/components/CustomButton";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useRef } from "react";

const RECATCHA_SITE_KEY = "6LdeEpEqAAAAAMNkt9S5clERg5zTeoUGFAsLrPJn";
const CONTACT_FORM_ENDPOINT =
  "https://contact-form.tetragon.hu/contact-form";
const CONTACT_FORM_JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21haW4iOiJzemVnZWRrZXJpdGVzLmh1IiwiaWF0IjoxNzMzMzQ4NzY5fQ.wqMor0PvWH5KpiQsiINl5HkxBXEujlPLow2sf9dL4AI";

const Offer = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const recaptchaToken = await recaptchaRef.current?.executeAsync();
      const form = document.querySelector("form") as HTMLFormElement;
      const body = {
        name: form.fullname.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value,
        recaptchaToken,
      };
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CONTACT_FORM_JWT}`,
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error("Failed to send the message");
      }
      const result = await response.json();
      console.log(result);
      alert("OK");
    } catch (error) {
      alert("Error");
      console.error(error);
    }
  };

  return (
    <Section background="primary" id="ajanlat">
      <SectionTitle>Lépjen velünk kapcsolatba!</SectionTitle>

      <Box
        component="form"
        onSubmit={onSubmit}
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
        /* noValidate */
        /* autoComplete="off" */
      >
        <CustomTextField required id="fullname" label="Név" />
        <CustomTextField required id="email" label="Email cím" />
        <CustomTextField required id="phone" label="Telefon" />
        <CustomTextField
          id="message"
          label="A projekt rövid leírása"
          multiline
          required
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
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={RECATCHA_SITE_KEY}
        />
        <CustomButton outlined color="light" type="submit">
          Ajánlatot kérek
        </CustomButton>
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
      name={id}
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

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
import { useRef, useState } from "react";
import NotificationModal from "@/components/NotificationModal";

const RECATCHA_SITE_KEY = "6LdeEpEqAAAAAMNkt9S5clERg5zTeoUGFAsLrPJn";
const CONTACT_FORM_ENDPOINT = "https://contact-form.tetragon.hu/contact-form";
const CONTACT_FORM_JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21haW4iOiJzemVnZWRrZXJpdGVzLmh1IiwiaWF0IjoxNzMzMzQ4NzY5fQ.wqMor0PvWH5KpiQsiINl5HkxBXEujlPLow2sf9dL4AI";

const Offer = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
    privacyAccepted: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    open: boolean;
    title: string;
    message: string;
  }>({
    open: false,
    title: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleCloseNotification = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const recaptchaToken = await recaptchaRef.current?.executeAsync();
      const body = {
        name: formData.fullname,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
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

      // Form törlése sikeres küldés után
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        message: "",
        privacyAccepted: false,
      });

      setNotification({
        open: true,
        title: "Sikeres küldés",
        message: "Köszönjük! Az üzenetét sikeresen elküldtük.",
      });
    } catch (error) {
      setNotification({
        open: true,
        title: "Hiba történt",
        message:
          "Sajnos hiba történt az üzenet küldése során. Kérjük, próbálja újra!",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
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
      >
        <CustomTextField
          required
          id="fullname"
          name="fullname"
          label="Név"
          value={formData.fullname}
          onChange={handleChange}
        />
        <CustomTextField
          required
          id="email"
          name="email"
          label="Email cím"
          value={formData.email}
          onChange={handleChange}
        />
        <CustomTextField
          required
          id="phone"
          name="phone"
          label="Telefon"
          value={formData.phone}
          onChange={handleChange}
        />
        <CustomTextField
          id="message"
          name="message"
          label="A projekt rövid leírása"
          multiline
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
        <Typography variant="body2" color="white">
          A *-gal jelölt mezők kitöltése kötelező.
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              required
              name="privacyAccepted"
              checked={formData.privacyAccepted}
              onChange={handleChange}
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
            />
          }
          label="Elfogadom az adatvédelmi irányelveket"
          sx={{ color: "white" }}
        />
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={RECATCHA_SITE_KEY}
        />
        <CustomButton
          outlined
          color="light"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Küldés..." : "Ajánlatot kérek"}
        </CustomButton>
      </Box>
      <NotificationModal
        open={notification.open}
        onClose={handleCloseNotification}
        title={notification.title}
        message={notification.message}
      />
    </Section>
  );
};

interface CustomTextFieldProps {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomTextField = ({
  id,
  name,
  label,
  required,
  multiline,
  rows,
  value,
  onChange,
}: CustomTextFieldProps) => {
  return (
    <TextField
      required={required}
      id={id}
      name={name}
      label={label}
      fullWidth
      multiline={multiline}
      rows={rows}
      variant="filled"
      value={value}
      onChange={onChange}
      sx={{
        borderRadius: "5px",
      }}
    />
  );
};

export default Offer;

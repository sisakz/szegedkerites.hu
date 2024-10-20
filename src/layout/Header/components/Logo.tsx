import { Box, Button } from "@mui/material";
import logo from "@/assets/images/szegedkerítés-logo.png";
import Link from "@/components/Link";

interface LogoProps {
  button?: boolean;
}

const Logo = ({ button }: LogoProps) => {
  const logoImage = (
    <img
      src={logo}
      alt="SzegedKerítés Logo"
      style={{ height: "100%", width: "auto" }}
      // style={{ height: "25px", width: "auto" }}
    />
  );
  return (
    <Box
      sx={{
        mx: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {button ? (
        <Link to="/">
          <Button sx={{ height: "35px" }}>{logoImage}</Button>
        </Link>
      ) : (
        logoImage
      )}
    </Box>
  );
};

export default Logo;

import {
  AppBar,
  Button,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import HamburgerMenu from "./HamburgerMenu";
import RegularMenu from "./RegularMenu";
import Logo from "./Logo";
import NavBarBlock from "./NavBarBlock";
import { menuItems } from "@/navigation/menuItems";

const NavBar = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  console.log({ isXs });
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "grey.200" }}>
      <Container>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {isXs && (
            <>
              <NavBarBlock align="left">
                <Logo button />
              </NavBarBlock>
              <NavBarBlock align="right">
                <HamburgerMenu menuItems={menuItems} />
              </NavBarBlock>
            </>
          )}
          {!isXs && (
            <>
              <NavBarBlock align="left">
                <Logo button />
              </NavBarBlock>
              <NavBarBlock align="right">
                <RegularMenu menuItems={menuItems} />
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "primary.main",
                    padding: "15px",
                    margin: "10px",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  Ajánlatot kérek
                </Button>
              </NavBarBlock>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

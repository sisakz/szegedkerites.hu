import {
  AppBar,
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
import CustomButton from "@/components/CustomButton";

const NavBar = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
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
                <CustomButton to="/#ajanlat">Ajánlatot kérek</CustomButton>
              </NavBarBlock>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

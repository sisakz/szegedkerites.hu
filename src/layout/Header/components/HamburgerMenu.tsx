import { Box, IconButton, ListItemText, Menu, MenuItem } from "@mui/material";
import { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@/components/Link";
import { MenuItemType } from "@/types";

interface HamburgerMenuProps {
  menuItems: MenuItemType[];
}

const HamburgerMenu = ({ menuItems }: HamburgerMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  return (
    <Box
      sx={{
        mx: "10px",
      }}
    >
      <IconButton
        color="inherit"
        ref={menuRef}
        onClick={() => setMenuOpen(!menuOpen)}
        sx={{ color: "dark.main" }}
      >
        <MenuIcon />
      </IconButton>
      {menuOpen && (
        <Menu
          anchorEl={menuRef.current}
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          sx={{ width: "350px" }}
        >
          {menuItems.map((item) => (
            <Link key={item.slug} to={item.slug}>
              <MenuItem sx={{ padding: "16px", minWidth: "180px" }}>
                <ListItemText
                  color="grey"
                  sx={{ fontWeight: 600 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </ListItemText>
              </MenuItem>
            </Link>
          ))}
        </Menu>
      )}
    </Box>
  );
};

export default HamburgerMenu;

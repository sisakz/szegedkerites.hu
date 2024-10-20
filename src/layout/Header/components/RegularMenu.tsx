import Link from "@/components/Link";
import { MenuItemType } from "@/types";
import { MenuItem, Stack } from "@mui/material";

interface RegularMenuProps {
  menuItems: MenuItemType[];
}

const RegularMenu = ({ menuItems }: RegularMenuProps) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
    >
      {menuItems.map((item) => (
        <Link key={item.slug} to={item.slug}>
          <MenuItem
            key={item.slug}
            sx={{
              padding: "16px",
              color: "dark.main",
              fontWeight: 500,
              fontSize: "1rem",
            }}
          >
            {item.name}
          </MenuItem>
        </Link>
      ))}
    </Stack>
  );
};

export default RegularMenu;

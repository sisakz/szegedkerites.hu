import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    dark: Palette["primary"];
    light: Palette["primary"];
  }

  interface PaletteOptions {
    dark?: PaletteOptions["primary"];
    light?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/MenuItem" {
  interface MenuItemPropsColorOverrides {
    custom: true;
  }
}

declare module "@mui/material/AppBar" {
  interface MenuItemPropsColorOverrides {
    custom: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: { main: "#0f4432", light: "#1f906a", contrastText: "#fff" },
    secondary: { main: "#02aeef" },
    info: { main: "#46c2ce" },
    success: { main: "#f68e54" },
    // add custom colors
    dark: {
      main: "#353C42",
      light: "#5A6268",
      dark: "#1C1F22",
    },
    light: {
      main: "#ebebeb",
      dark: "#f5f5f5",
      light: "#f9f9f9",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 1.2,
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      fontSize: "2.3rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 300,
      lineHeight: 1.5,
    },
  },
  // components: {
  //   MuiInputLabel: {
  //     defaultProps: {
  //       sx: {
  //         fontSize: "14px",
  //       },
  //     },
  //   },
  //   MuiOutlinedInput: {
  //     defaultProps: {
  //       sx: {
  //         fontSize: "12px",
  //       },
  //     },
  //   },
  // },
});

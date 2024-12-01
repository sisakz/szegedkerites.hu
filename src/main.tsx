import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline } from "@mui/material";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { ClientContext } from "graphql-hooks";
import { datoClient } from "./hooks/dato.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClientContext.Provider value={datoClient}>
      <CssBaseline />
      <App />
    </ClientContext.Provider>
  </React.StrictMode>
);

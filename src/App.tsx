import { ThemeProvider } from "@mui/material/styles";
import store from "./store";
import { Provider } from "react-redux";
import Main from "./layout/Main/Main";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import { theme } from "./theme/theme";
import SzegedkeritesRoutes from "./navigation/SzegedkeritesRoutes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import Meta from "./components/Meta";
import ReactGA from "react-ga4";
import { useEffect } from "react";
const TRACKING_ID = "G-BGJVG7H0DW";

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({
      hitType: "pageview",
      page: "/landingpage",
      title: "Landing Page",
    });
  }, []);
  return (
    <HelmetProvider>
      <div className="app">
        <Meta />
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <SzegedkeritesRoutes />
              <Header />
              <Main />
              <Footer />
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
      </div>
    </HelmetProvider>
  );
}

export default App;

import { ThemeProvider } from "@mui/material/styles";
import store from "./store";
import { Provider } from "react-redux";
import Main from "./layout/Main/Main";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import { theme } from "./theme/theme";
import SzegedkeritesRoutes from "./navigation/SzegedkeritesRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;

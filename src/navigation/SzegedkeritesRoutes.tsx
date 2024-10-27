import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "@/layout/Main/Main";
import ContactUs from "@/pages/ContactUs";
import ScrollToAnchor from "./ScrollToAnchor";

const SzegedkeritesRoutes = () => (
  <>
    <ScrollToAnchor />
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="kapcsolat" element={<ContactUs />} />
      </Route>
    </Routes>
  </>
);

export default SzegedkeritesRoutes;

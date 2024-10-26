import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "@/layout/Main/Main";
import Kapcsolat from "@/pages/Kapcsolat";

const SzegedkeritesRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />}>
      <Route index element={<Home />} />
      <Route path="kapcsolat" element={<Kapcsolat />} />
    </Route>
  </Routes>
);

export default SzegedkeritesRoutes;

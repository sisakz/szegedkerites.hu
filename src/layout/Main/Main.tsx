import { Box } from "@mui/material";
// import { RoutedContent } from "../../navigation/RoutedContent";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Box sx={{ mt: "64px", py: 2, backgroundColor: "#ebebeb" }}>
        <Outlet />
      </Box>
    </main>
  );
};

export default Main;

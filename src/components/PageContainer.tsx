import { Box } from "@mui/material";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Box
      component="main"
      sx={{ mt: "64px", py: 2, backgroundColor: "#ebebeb" }}
    >
      {children}
    </Box>
  );
};

export default PageContainer;

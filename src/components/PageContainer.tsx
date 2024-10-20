import { Container } from "@mui/material";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return <Container>{children}</Container>;
};

export default PageContainer;

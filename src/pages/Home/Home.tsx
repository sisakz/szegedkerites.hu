import PageContainer from "@/components/PageContainer";
import Hero from "./sections/Hero/Hero";
import Benefits from "./sections/Benefits/Benefits";
import Products from "./sections/Products/Products";
import Experiences from "./sections/Experiences/Experiences";
import Offer from "./sections/Offer/Offer";
import References from "./sections/OurWorks/References";

const Home = () => {
  return (
    <PageContainer>
      <Hero />
      <Benefits />
      <Products />
      <Experiences />
      <References />
      <Offer />
    </PageContainer>
  );
};

export default Home;

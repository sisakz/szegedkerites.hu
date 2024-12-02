import PageContainer from "@/components/PageContainer";
import Hero from "./sections/Hero/Hero";
import Benefits from "./sections/Benefits/Benefits";
import Products from "./sections/Products/Products";
import Experiences from "./sections/Experiences/Experiences";
import Offer from "./sections/Offer/Offer";
import References from "./sections/References/References_";
import LandscapeGardering from "./sections/LandscapeGardering/LandscapeGardering";
import Services from "./sections/Services/Services";

const Home = () => {
  return (
    <PageContainer>
      <Hero />
      <Benefits />
      <Products />
      <Experiences />
      <References />
      <Services />
      <LandscapeGardering />
      <Offer />
    </PageContainer>
  );
};

export default Home;

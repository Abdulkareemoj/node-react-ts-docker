import First from '../components/LandingPage/First';
import Second from '../components/LandingPage/Second';
import Third from '../components/LandingPage/Third';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import Navbar from '../components/Navbar';
import AccordionContent from '../components/LandingPage/Accordion';
const Landing = () => {
  return (
    <>
      <First />
      <Second />
      <Third />
      <Pricing /> <AccordionContent />
      <Footer />
    </>
  );
};

export default Landing;

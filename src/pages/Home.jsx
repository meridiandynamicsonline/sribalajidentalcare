import Hero from "../sections/Hero";
import Trust from "../sections/Trust";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import Journey from "../sections/Journey";
import Contact from "../sections/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Journey />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
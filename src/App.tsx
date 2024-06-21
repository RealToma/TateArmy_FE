import {
  Hero,
  About,
  Tokenomics,
  AirdropProgram,
  OurTeam,
  Community,
  Roadmap,
  Contact,
  Footer,
} from "./components";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      offset: 200,
    });
  }, []);

  return (
    <div className="relative">
      <Hero />
      <About />
      <Tokenomics />
      <AirdropProgram />
      <Roadmap />
      <OurTeam />
      <Community />
      <Contact />
      <Footer />
    </div>
  );
};

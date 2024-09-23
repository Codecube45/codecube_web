import React from "react";
import Navbar from "../../components/common/Navbar";
import Banner from "./Banner";
import VerticalLines from "../../components/common/VerticalLines";
import AboutSection from "./AboutSection";
import Marquee from "../../components/common/Marquee";
import OurSteps from "./OurSteps";
import HowItsWork from "./HowItsWork";
import Footer from "../../components/common/Footer";

const index = () => {
  return (
    <div>
      <Navbar inner={false} />
      <div className="site-content">
        <section className="position-relative">
          <VerticalLines />
          <Banner />
          <AboutSection />
          <Marquee />
        </section>
        <OurSteps />
        <HowItsWork />
      </div>
      <Footer />
    </div>
  );
};

export default index;

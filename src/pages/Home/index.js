import React from "react";
import Navbar from "../../components/common/Navbar";
import Banner from "./Banner";
import VerticalLines from "../../components/common/VerticalLines";
import AboutSection from "./AboutSection";
import Marquee from "../../components/common/Marquee";
import OurSteps from "./OurSteps";

const index = () => {
  return (
    <div>
      <Navbar />
      <div className="site-content">
        <section>
          <VerticalLines />
          <Banner />
          <AboutSection />
          <Marquee />
        </section>
        <OurSteps />
      </div>
    </div>
  );
};

export default index;

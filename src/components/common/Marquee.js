import React from "react";
import MarqueeSlide from "react-fast-marquee";
import Icons1 from "../../assets/images/ReactLogo.png";
import Icons2 from "../../assets/images/brand-icon3.png";
import Icons3 from "../../assets/images/brand-icon4.png";

const Marquee = () => {
  const technologies = [
    {
      name: "React Js",
      image: Icons1,
    },
    {
      name: "WordPress",
      image: Icons2,
    },
    {
      name: "PHP & Laravel",
      image: Icons3,
    },
    {
      name: "Codingniter",
      image: Icons2,
    },
    {
      name: "Node JS",
      image: Icons3,
    },
  ];
  return (
    <div className="space-medium-ptb ">
      <div className="marquu marquee-wrapper marquee-border marquee-rotate">
        <MarqueeSlide>
          {technologies?.map((obj, i) => {
            return (
              <div class="marquee-item" key={i}>
                <span class="icon">
                  <img class="img-fluid" src={obj.image} alt="" />
                </span>
                <span class="title">{obj.name}</span>
              </div>
            );
          })}
        </MarqueeSlide>
      </div>
    </div>
  );
};

export default Marquee;

import React from "react";
import MarqueeSlide from "react-fast-marquee";
import Icons1 from "../../assets/images/banner-shape-01.png";
import Icons2 from "../../assets/images/brand-icon3.png";
import Icons3 from "../../assets/images/brand-icon4.png";

const Marquee = () => {
  const technologies = [
    {
      name: "ISO Developer",
      image: Icons1,
    },
    {
      name: "ISO Developer",
      image: Icons2,
    },
    {
      name: "ISO Developer",
      image: Icons1,
    },
    {
      name: "ISO Developer",
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

import React from "react";
import About1 from "../../assets/images/about-01.jpg";
import About3 from "../../assets/images/about-03.jpg";
import aboutUs from "../../assets/images/about-us.jpg";
import aboutMax from "../../assets/images/about-max.jpg";
import Icon from "../../assets/images/subtitle-icon.png";
import { config } from "../config";
import { Link } from "react-router-dom";



const AboutSection = () => {
  return (
    <div>
      <section class="space-pt">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-7 mb-5 mb-lg-0">
              <div class="section-title pb-0 pb-lg-4">
                <span class="sub-title">
                  <img class="img-fluid" src={Icon} alt="" /> About Us
                </span>
                <h2 class="title"> Your experience is everything to us </h2>
              </div>

              <div class="row">
                <div class="col-sm-4">
                  <img class="img-fluid" src={About3} alt="#" />
                </div>
                <div class="col-sm-8">
                  <p class="ps-lg-3 mt-4 mt-sm-0 text-white fs-5">
                  we specialize in crafting custom, high-performance websites that deliver results. Our expert team blends cutting-edge technology with user-focused design to create responsive, scalable, and innovative web solutions. Whether you need an e-commerce platform or a dynamic web app, we’re here to help your business thrive in the digital world.
                  </p>
                  <div class="d-flex justify-content-center mt-5 ms-sm-5 ms-0">
                    <div class="attract-hover">
                      <div
                        class="attract-hover-easing"
                        style={{ transform: "translate(0px)" }}
                      >
                        {/* <a class=" btn-effect" href="/contact-us"> */}
                        <Link to={`${config.appUrl}contact-us`} class="btn-effect">
                          <span>Get A Quote</span>
                          <svg
                            width="20"
                            height="22"
                            viewBox="0 0 20 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_59_253)">
                              <path
                                d="M19.4854 11.4293L17.0513 12.221C13.1214 13.4993 10.3036 16.9595 9.84784 21.0668C9.49371 16.981 6.71926 13.5081 2.81255 12.2604L0.210283 11.4293"
                                stroke="white"
                                stroke-width="2"
                              ></path>
                              <path
                                d="M9.83594 20.8889L9.83594 0"
                                stroke="white"
                                stroke-width="2"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_59_253">
                                <rect
                                  width="21.3333"
                                  height="20"
                                  fill="white"
                                  transform="translate(20) rotate(90)"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          </Link>
                        {/* </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row mt-4 mt-sm-5">
                <div class="col-sm-6">
                  <div class="counter counter-style-1">
                    <div class="counter-number">
                      <span class="timer mb-0" data-to="240" data-speed="2000">
                        240
                      </span>
                      <span class="suffix">+</span>
                    </div>
                    <div class="counter-info">
                      <span class="counter-title">Business Peoples</span>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="counter counter-style-1">
                    <div class="counter-number">
                      <span class="timer mb-0" data-to="100" data-speed="2000">
                        100
                      </span>
                      <span class="suffix">%</span>
                    </div>
                    <div class="counter-info">
                      <span class="counter-title">Customer Satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-5">
              <img class="img-fluid ps-lg-5" src={aboutMax} alt="#" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;

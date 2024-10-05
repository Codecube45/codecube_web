import React from "react";
import Banner1 from "../../assets/images/banner-bg-01.png";
import BannerShape from "../../assets/images/banner-shape-01.png";
import "../../assets/styles/banner.css"
import { Link } from "react-router-dom";
import { config } from "../config";

const Banner = () => {
  return (
    <div>
      <div class="main-banner main-banner-1">
        <div class="banner-inner">
          <img class="img-fluid banner-bg-one" src={Banner1} alt="#" />
          <h1 class="banner-title">Technology</h1>
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <img
                  class="img-fluid rotate rotate-img"
                  src={BannerShape}
                  alt="#"
                />
              </div>
              <div class="col-md-6 ms-auto">
                <div class="banner-content">
                  <h2>Creative solutions real results</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

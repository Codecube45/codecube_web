import React from "react";
import Navbar from "../../components/common/Navbar";
import BannerSection from "../../components/common/BannerSection";
import ContactBanner from "../../assets/images/contact-us.jpg";
import Icon from "../../assets/images/subtitle-icon.png";
import VerticalLines from "../../components/common/VerticalLines";
import AboutSection from "../Home/AboutSection";
import Marquee from "../../components/common/Marquee";
import arrowIcon from "../../assets/images/arrow-right.png";
import Icon1 from "../../assets/images/Information-Security.svg";
import Icon2 from "../../assets/images/Data-Synchronization.svg";
import Icon3 from "../../assets/images/Process-Automation.svg";
import Icon4 from "../../assets/images/Mobile-Platforms.svg";
import Testimonial from "../../components/common/Testimonial";
import Footer from "../../components/common/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar inner={true} />
      <BannerSection
        Banner={ContactBanner}
        title={"About us"}
        subtitle={"Our Expertise. Know more about what we do"}
      />
      <div className="site-content">
        <VerticalLines />
        <div className="mt-5  pt-5">
          <AboutSection />
        </div>
        <div className="mb-5">
          <Marquee />
        </div>

        <section class="space-ptb mt-5 ">
          <div class="container">
            <div class="row">
              <div class="col-xxl-7 col-lg-8">
                <div class="section-title mb-lg-0">
                  <span class="sub-title">
                    <img class="img-fluid" src={Icon} alt="" /> WHAT WE DO
                  </span>
                  <h2 class="title mb-0">
                    This is what we do and we do it perfectly.
                  </h2>
                </div>
              </div>
              <div class="col-xxl-5 col-lg-4 align-self-end">
                <p class="mb-0 ps-xxl-5">
                  This is what we do, executed with perfection. Our dedication
                  and expertise ensure every detail is flawless, setting the
                  standard in our pursuit of excellence.
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="services grid-wrapper grid-xl-4 grid-md-2 grid-sm-1 grid-gap-0  mt-5 pt-lg-4">
                  <div class="service-bottom-space service-wrapper service-style-2 ">
                    <div class="service-inner">
                      <div class="service-icon">
                        <img class="img-fluid" src={Icon1} alt="# " />
                      </div>
                      <div class="service-content">
                        <h5 class="service-title">Web Development</h5>
                        <div class="list-wrapper">
                          <ul class="step-list list">
                            <li>
                              <img class="img-fluid" src={arrowIcon} alt="" />
                              Custom design
                            </li>
                            <li>
                              <img class="img-fluid" src={arrowIcon} alt="" />
                              Front-End development
                            </li>
                            <li>
                              <img class="img-fluid" src={arrowIcon} alt="" />
                              Business intelligence
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="service-wrapper service-style-2 service-top-space">
                    <div class="service-inner">
                      <div class="service-icon">
                        <img class="img-fluid" src={Icon2} alt="#" />
                      </div>
                      <div class="service-content">
                        <h5 class="service-title">Mobile Development</h5>
                        <div class="list-wrapper">
                          <ul class="step-list list">
                            <li>
                              <img class="img-fluid" src={arrowIcon} alt="" />
                              iOS
                            </li>
                            <li>
                              <img class="img-fluid" src={arrowIcon} alt="" />
                              Android
                            </li>
                            <li>
                              <img class="img-fluid" src={arrowIcon} alt="" />
                              Hybrid platform
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="service-wrapper service-style-2 service-bottom-space">
                    <div class="service-inner">
                      <div class="service-icon">
                        <img class="img-fluid" src={Icon3} alt="#" />
                      </div>
                      <div class="service-content">
                        <h5 class="service-title">Branding Services</h5>
                        <div class="list-wrapper">
                          <ul class="step-list list">
                            <li>
                              <img class="img-fluid" src={arrowIcon} alt="" />
                              Logo design
                            </li>
                            <li>
                              <img class="img-fluid" src={arrowIcon} alt="" />
                              UI/UX design
                            </li>
                            <li>
                              <img class="img-fluid" src={arrowIcon} alt="" />
                              Visual design
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="service-wrapper service-style-2 service-top-space">
                    <div class="service-inner">
                      <div class="service-icon">
                        <img class="img-fluid" src={Icon4} alt="#" />
                      </div>
                      <div class="service-content">
                        <h5 class="service-title">Digital Marketing</h5>
                        <div class="list-wrapper">
                          <ul class="step-list list">
                            <li>
                              <img class="img-fluid" src={arrowIcon} alt="" />
                              Marketing Strategy
                            </li>
                            <li>
                              <img class="img-fluid" src={arrowIcon} alt="" />
                              Paid Media
                            </li>
                            <li>
                              <img class="img-fluid" src={arrowIcon} alt="" />
                              Influencer Marketing
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonial />
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;

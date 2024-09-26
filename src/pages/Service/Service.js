import React, { useEffect, useRef } from "react";
import Navbar from "../../components/common/Navbar";
import ContactBanner from "../../assets/images/contact-us.jpg";
import BannerSection from "../../components/common/BannerSection";
import Icon from "../../assets/images/subtitle-icon.png";
import Service1 from "../../assets/images/about-04.jpg";
import ServiceSide from "../../assets/images/about-05.png";
import Logo from "../../assets/images/main-logo.png";
import ArrowRight from "../../assets/images/arrow-right.png";
import { Progress } from "antd";
import Marquee from "../../components/common/Marquee";
import Footer from "../../components/common/Footer";
import { useLocation } from "react-router-dom";

const Service = () => {
  const location = useLocation();
  const service1Ref = useRef(null);
  const service2Ref = useRef(null);
  const service3Ref = useRef(null);
  useEffect(() => {
    if (location.hash === "#website" && service1Ref.current) {
      service1Ref.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#digital" && service2Ref.current) {
      service2Ref.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#wordpress" && service3Ref.current) {
      service3Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <Navbar inner={true} />
      <BannerSection
        Banner={ContactBanner}
        title={"Our Services"}
        subtitle={"Success is that it is a process"}
      />
      <div className="site-content mt-5 pt-5">
        <section class="space-pt z-index-2 ellipse-top" ref={service1Ref}>
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-lg-5 text-lg-center mb-5 mb-lg-0">
                <div class="about-img position-relative">
                  <img class="img-fluid" src={Service1} alt="#" />
                  <div class="about-logo">
                    <img class="img-fluid" src={Logo} width="60" alt="#" />
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="section-title">
                  <span class="sub-title">
                    <img class="img-fluid" src={Icon} alt="" /> Our Services
                  </span>
                  <h2 class="title"> Web Development </h2>
                </div>
                <div class="ps-0 ps-lg-4 ps-xl-5">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                  <div class="skill-wrapper pt-2">
                    <div class="skill skill-style-2 d-flex justify-content-between">
                      <div class="skill-title">
                        Project success percentage rate
                      </div>
                      <span class="progress-number animated fadeIn">%60</span>
                    </div>
                    <div>
                      <Progress
                        percent={80}
                        strokeColor="#4f86e4"
                        showInfo={false}
                      />
                    </div>
                  </div>
                  <div class="rated-reviews mt-5">
                    <h6>
                      <span>
                        5 <i class="bi bi-star-fill"></i>{" "}
                      </span>{" "}
                      Rated 4.80 out of 5 based on over{" "}
                      <a href="#"> 1000+ reviews</a>
                    </h6>
                  </div>
                  <div class="row align-items-center mt-4 pt-1">
                    <div class="col-sm-8">
                      <div class="list-wrapper">
                        <ul class="list col-2">
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Marketing Strategy
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Paid Media
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Influencer Marketing
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Marketing Strategy
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Paid Media
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Influencer Marketing
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-sm-4 text-sm-end mt-4 mt-sm-0">
                      <img class="img-fluid" src={ServiceSide} alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Marquee />

        <section class="space-pt z-index-2 ellipse-top" ref={service2Ref}>
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-lg-7">
                <div class="section-title">
                  <span class="sub-title">
                    <img class="img-fluid" src={Icon} alt="" /> Our Services
                  </span>
                  <h2 class="title"> Web Development </h2>
                </div>
                <div class="ps-0 ps-lg-4 ps-xl-5">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                  <div class="skill-wrapper pt-2">
                    <div class="skill skill-style-2 d-flex justify-content-between">
                      <div class="skill-title">
                        Project success percentage rate
                      </div>
                      <span class="progress-number animated fadeIn">%60</span>
                    </div>
                    <div>
                      <Progress
                        percent={80}
                        strokeColor="#4f86e4"
                        showInfo={false}
                      />
                    </div>
                  </div>
                  <div class="rated-reviews mt-5">
                    <h6>
                      <span>
                        5 <i class="bi bi-star-fill"></i>{" "}
                      </span>{" "}
                      Rated 4.80 out of 5 based on over{" "}
                      <a href="#"> 1000+ reviews</a>
                    </h6>
                  </div>
                  <div class="row align-items-center mt-4 pt-1">
                    <div class="col-sm-8">
                      <div class="list-wrapper">
                        <ul class="list col-2">
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Marketing Strategy
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Paid Media
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Influencer Marketing
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Marketing Strategy
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Paid Media
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Influencer Marketing
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-sm-4 text-sm-end mt-4 mt-sm-0">
                      <img class="img-fluid" src={ServiceSide} alt="#" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 text-lg-center mb-5 mb-lg-0">
                <div class="about-img position-relative">
                  <img class="img-fluid" src={Service1} alt="#" />
                  <div class="about-logo">
                    <img class="img-fluid" src={Logo} width="60" alt="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Marquee />

        <section class="space-pt z-index-2 ellipse-top" ref={service3Ref}>
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-lg-5 text-lg-center mb-5 mb-lg-0">
                <div class="about-img position-relative">
                  <img class="img-fluid" src={Service1} alt="#" />
                  <div class="about-logo">
                    <img class="img-fluid" src={Logo} width="60" alt="#" />
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="section-title">
                  <span class="sub-title">
                    <img class="img-fluid" src={Icon} alt="" /> Our Services
                  </span>
                  <h2 class="title"> Web Development </h2>
                </div>
                <div class="ps-0 ps-lg-4 ps-xl-5">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                  <div class="skill-wrapper pt-2">
                    <div class="skill skill-style-2 d-flex justify-content-between">
                      <div class="skill-title">
                        Project success percentage rate
                      </div>
                      <span class="progress-number animated fadeIn">%60</span>
                    </div>
                    <div>
                      <Progress
                        percent={80}
                        strokeColor="#4f86e4"
                        showInfo={false}
                      />
                    </div>
                  </div>
                  <div class="rated-reviews mt-5">
                    <h6>
                      <span>
                        5 <i class="bi bi-star-fill"></i>{" "}
                      </span>{" "}
                      Rated 4.80 out of 5 based on over{" "}
                      <a href="#"> 1000+ reviews</a>
                    </h6>
                  </div>
                  <div class="row align-items-center mt-4 pt-1">
                    <div class="col-sm-8">
                      <div class="list-wrapper">
                        <ul class="list col-2">
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Marketing Strategy
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Paid Media
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Influencer Marketing
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Marketing Strategy
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Paid Media
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Influencer Marketing
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-sm-4 text-sm-end mt-4 mt-sm-0">
                      <img class="img-fluid" src={ServiceSide} alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Service;

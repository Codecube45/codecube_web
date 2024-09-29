import React from "react";
import Icon1 from "../../assets/images/Information-Security.svg";
import Icon2 from "../../assets/images/Information-Security-color.svg";
import Icon from "../../assets/images/subtitle-icon.png";
import Arrow from "../../assets/images/arrow-right.png";

const OurSteps = () => {
  return (
    <div>
      <section class="space-pt bg-black z-index-2 ellipse-top">
        <div class="space-pb ellipse-bottom">
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-xxl-5 col-xl-5 mb-5 mb-xl-0">
                <div class="sticky-top" style={{ top: "80px" }}>
                  <div class="section-title">
                    <span class="sub-title">
                      <img class="img-fluid" src={Icon} alt="" /> Our Steps
                    </span>
                    <h2 class="title">
                      {" "}
                      Digital marketing services that help you grow.
                    </h2>
                  </div>
                  <div class="ps-xxl-5 ms-0 ms-md-5">
                    <p className="text-white">
                      our mission is to empower businesses by delivering
                      innovative, high-quality web solutions that drive growth
                      and digital transformation. We are committed to creating
                      websites and applications that not only meet our clients’
                      needs but also exceed their expectations. Through
                      cutting-edge technology, user-centric design, and
                      exceptional customer service, we strive to help businesses
                      thrive in the digital age. Our goal is to be a trusted
                      partner, building long-term relationships by consistently
                      providing value and helping our clients succeed online.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-7">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="services grid-wrapper">
                      <div class="service-wrapper service-style-1">
                        <div class="service-inner">
                          <div class="service-icon">
                            <img class="img-fluid" src={Icon1} alt="#" />
                          </div>
                          <div class="bg-icon">
                            <img class="img-fluid" src={Icon2} alt="#" />
                          </div>
                          <div class="service-content">
                            <h5 class="service-title">
                              Custom Web Development
                            </h5>
                            <p>
                              Tailored websites and web applications designed to
                              meet your unique business needs.
                            </p>
                            <div class="service-links">
                              <a class="btn-arrow" href="#">
                                <img src={Arrow} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="service-wrapper service-style-1">
                        <div class="service-inner">
                          <div class="service-icon">
                            <img class="img-fluid" src={Icon1} alt="#" />
                          </div>
                          <div class="bg-icon">
                            <img class="img-fluid" src={Icon2} alt="#" />
                          </div>
                          <div class="service-content">
                            <h5 class="service-title">SEO Optimization</h5>
                            <p>
                              Built-in search engine optimization to increase
                              visibility and drive organic traffic.
                            </p>
                            <div class="service-links">
                              <a class="btn-arrow" href="#">
                                <img src={Arrow} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="services grid-wrapper service-top-space">
                      <div class="service-wrapper service-style-1">
                        <div class="service-inner">
                          <div class="service-icon">
                            <img class="img-fluid" src={Icon1} alt="#" />
                          </div>
                          <div class="bg-icon">
                            <img class="img-fluid" src={Icon2} alt="#" />
                          </div>
                          <div class="service-content">
                            <h5 class="service-title">Maintenance & Support</h5>
                            <p>
                              Ongoing technical support, updates, and
                              performance monitoring to ensure your website
                              stays up-to-date and secure.
                            </p>
                            <div class="service-links">
                              <a class="btn-arrow" href="#">
                                <img src={Arrow} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="service-wrapper service-style-1">
                        <div class="service-inner">
                          <div class="service-icon">
                            <img class="img-fluid" src={Icon1} alt="#" />
                          </div>
                          <div class="bg-icon">
                            <img class="img-fluid" src={Icon2} alt="#" />
                          </div>
                          <div class="service-content">
                            <h5 class="service-title">
                              Web Hosting & Deployment
                            </h5>
                            <p>
                              Reliable hosting solutions and efficient
                              deployment strategies for maximum uptime and
                              performance.
                            </p>
                            <div class="service-links">
                              <a class="btn-arrow" href="#">
                                <img src={Arrow} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurSteps;

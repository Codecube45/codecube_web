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
                      We all know that nothing moves until someone makes a
                      decision. The first action is always in making the
                      decision to proceed. which most people overlook, we don’t
                      do it intentionally or with malice.
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
                            <h5 class="service-title">Information Security</h5>
                            <p>
                              Remind yourself of someone you know who died
                              suddenly and the fact that there is no guarantee
                              that tomorrow
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
                            <h5 class="service-title">Data Synchronization</h5>
                            <p>
                              Remind yourself of someone you know who died
                              suddenly and the fact that there is no guarantee
                              that tomorrow
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
                            <h5 class="service-title">Process Automation</h5>
                            <p>
                              It must come from the natural product of your
                              desire to achieve something and your belief that
                              you are capable.
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
                            <h5 class="service-title">Mobile Platforms</h5>
                            <p>
                              There is really no magic to it and it’s not
                              reserved only for a select few people. As such,
                              success really has nothing.
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

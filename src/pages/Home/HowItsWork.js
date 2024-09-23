import React from "react";
import Icon from "../../assets/images/subtitle-icon.png";
import arrowIcon from "../../assets/images/arrow-right.png";
import StepOne from "../../assets/images/step-1.png";

const HowItsWork = () => {
  return (
    <div>
      <section className="space-pt  z-index-2 bg-black ellipse-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="sticky-top" style={{ top: "80px" }}>
                <div className="section-title mb-0">
                  <span className="sub-title">
                    <img className="img-fluid" src={Icon} alt="" /> How It Works
                  </span>
                  <h2 className="title text-white">
                    Smart strategy &amp; excellent performance
                  </h2>
                </div>
                <div className="ps-xxl-5 ms-0 ms-md-5 pb-5 pb-lg-0">
                  <p className="mb-5 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <div className="attract-hover">
                    <div
                      className="attract-hover-easing"
                      style={{ transform: "translate(0px)" }}
                    >
                      <a className="btn-effect" href="#">
                        <span>Get Started</span>
                        <svg
                          width="20"
                          height="22"
                          viewBox="0 0 20 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_59_255)">
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
                            <clipPath id="clip0_59_255">
                              <rect
                                width="21.3333"
                                height="20"
                                fill="white"
                                transform="translate(20) rotate(90)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="steps-wrapper">
                <div className="steps-item">
                  <div className="step-arrow">
                    <a className="btn-arrow" href="#">
                      <img className="img-fluid" src={arrowIcon} alt="" />
                    </a>
                  </div>
                  <div className="step-info">
                    <span className="step-number">Step 01</span>
                    <h3 className="step-title">Let us know your need</h3>
                    <p>
                      The bottom line is that we must shed the bad and replace
                      with good beliefs.
                    </p>
                    <div className="list-wrapper">
                      <ul className="step-list list col-2">
                        <li>
                          <img className="img-fluid" src={arrowIcon} alt="" />
                          E-commerce strategy
                        </li>
                        <li>
                          <img className="img-fluid" src={arrowIcon} alt="" />
                          Business intelligence
                        </li>
                        <li>
                          <img className="img-fluid" src={arrowIcon} alt="" />
                          Custom design
                        </li>
                        <li>
                          <img className="img-fluid" src={arrowIcon} alt="" />
                          Android
                        </li>
                        <li>
                          <img className="img-fluid" src={arrowIcon} alt="" />
                          Brand collateral
                        </li>
                        <li>
                          <img className="img-fluid" src={arrowIcon} alt="" />
                          Front-End development
                        </li>
                      </ul>
                    </div>
                    <div className="step-image">
                      <img className="img-fluid" src={StepOne} alt="" />
                    </div>
                  </div>
                </div>
                <div className="steps-item">
                  <div className="step-arrow">
                    <a className="btn-arrow" href="#">
                      <img className="img-fluid" src={arrowIcon} alt="" />
                    </a>
                  </div>
                  <div className="step-info">
                    <span className="step-number">Step 02</span>
                    <h3 className="step-title">Meet the team</h3>
                    <p>
                      “Nothing changes until something moves” – this is the
                      battle cry of author and journalist Robert Ringer.
                    </p>
                    <div className="list-wrapper">
                      <ul className="step-list list col-2">
                        <li>
                          <img className="img-fluid" src={arrowIcon} alt="" />
                          E-commerce strategy
                        </li>
                        <li>
                          <img className="img-fluid" src={arrowIcon} alt="" />
                          Business intelligence
                        </li>
                      </ul>
                    </div>
                    <div className="step-image">
                      <img className="img-fluid" src={StepOne} alt="" />
                    </div>
                  </div>
                </div>
                <div className="steps-item">
                  <div className="step-arrow">
                    <a className="btn-arrow" href="#">
                      <img className="img-fluid" src={arrowIcon} alt="" />
                    </a>
                  </div>
                  <div className="step-info">
                    <span className="step-number">Step 03</span>
                    <h3 className="step-title">Find Your Ideal Itinfinite</h3>
                    <p>
                      Get the oars in the water and start rowing. Execution is
                      the single biggest factor in achievement.
                    </p>
                    <div className="list-wrapper">
                      <ul className="step-list list col-2">
                        <li>
                          <img className="img-fluid" src={arrowIcon} alt="" />
                          /Digital PR
                        </li>
                        <li>
                          <img className="img-fluid" src={arrowIcon} alt="" />
                          Technical Operations
                        </li>
                        <li>
                          <img className="img-fluid" src={arrowIcon} alt="" />
                          Accounting Outsourcing
                        </li>
                      </ul>
                    </div>
                    <div className="step-image">
                      <img className="img-fluid" src={StepOne} alt="" />
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

export default HowItsWork;

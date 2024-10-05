import React from "react";
import Icon from "../../assets/images/subtitle-icon.png";
import arrowIcon from "../../assets/images/arrow-right.png";
import StepOne from "../../assets/images/step-1.png";
import Steps1 from "../../assets/images/step1.jpg";
import Steps2 from "../../assets/images/step2.jpg";
import Steps3 from "../../assets/images/step3.jpg";
import Steps4 from "../../assets/images/step4.jpg";
import { config } from "../config";
import { Link } from "react-router-dom";

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
                    Our web development process is designed to ensure the
                    success of your project from start to finish. We begin with
                    thorough discovery and planning to align with your goals,
                    followed by user-focused design that prioritizes an
                    intuitive experience. Our developers then build responsive,
                    scalable websites using the latest technologies, ensuring
                    seamless integration. After rigorous testing for quality and
                    performance, we launch and optimize your site for ongoing
                    success. Post-launch, we provide maintenance and support to
                    keep your website secure and up-to-date.
                  </p>
                  <div className="attract-hover">
                    <div
                      className="attract-hover-easing"
                      style={{ transform: "translate(0px)" }}
                    >
                      {/* <a className="btn-effect" href="/contact-us"> */}
                      <Link to={`${config.appUrl}contact-us`} class="btn-effect">
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
                        </Link>
                      {/* </a> */}
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
                    <h3 className="step-title">Discovery & Planning</h3>
                    <p>
                      <img className="img-fluid pe-2" src={arrowIcon} alt="" />
                      We begin by understanding your business goals, target
                      audience, and project requirements. Through in-depth
                      research and consultation, we create a tailored roadmap
                      that aligns with your vision.
                    </p>
                    {/* <div className="list-wrapper">
                      <ul className="step-list list col-2">
                        <li>E-commerce strategy</li>
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
                    </div> */}
                    <div className="step-image">
                      <img className="img-fluid steps" src={Steps1} alt="" />
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
                    <h3 className="step-title">Design & User Experience</h3>
                    <p>
                      <img className="img-fluid pe-2" src={arrowIcon} alt="" />
                      Our design team focuses on creating a visually appealing
                      and intuitive user interface (UI) that enhances user
                      experience (UX). Every design is crafted with usability
                      and accessibility in mind to ensure maximum engagement.
                    </p>
                    {/* <div className="list-wrapper">
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
                    </div> */}
                    <div className="step-image">
                      <img className="img-fluid steps" src={Steps2} alt="" />
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
                    <h3 className="step-title">Development & Integration</h3>
                    <p>
                      <img className="img-fluid pe-2" src={arrowIcon} alt="" />
                      Using the latest web technologies and frameworks, our
                      developers turn designs into fully functional, responsive,
                      and scalable websites. We ensure seamless integration with
                      databases, third-party tools, and any other systems
                      required
                    </p>
                    {/* <div className="list-wrapper">
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
                    </div> */}
                    <div className="step-image">
                      <img className="img-fluid steps" src={Steps3} alt="" />
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
                    <span className="step-number">Step 04</span>
                    <h3 className="step-title">Testing & Quality Assurance</h3>
                    <p>
                      <img className="img-fluid pe-2" src={arrowIcon} alt="" />
                      We rigorously test every website across devices and
                      browsers to ensure top performance, security, and
                      functionality. Our QA process guarantees a smooth user
                      experience before launching your site.
                    </p>
                    {/* <div className="list-wrapper">
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
                    </div> */}
                    <div className="step-image">
                      <img className="img-fluid steps" src={Steps4} alt="" />
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
                    <span className="step-number">Step 05</span>
                    <h3 className="step-title">Launch & Optimization</h3>
                    <p>
                      <img className="img-fluid pe-2" src={arrowIcon} alt="" />
                      Once approved, we launch your website and monitor its
                      performance. We continuously analyze metrics and optimize
                      for speed, SEO, and user engagement, ensuring long-term
                      success
                    </p>
                    {/* <div className="list-wrapper">
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
                    </div> */}
                    <div className="step-image">
                      <img className="img-fluid steps" src={StepOne} alt="" />
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

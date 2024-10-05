import React, { useEffect, useRef } from "react";
import Navbar from "../../components/common/Navbar";
import ContactBanner from "../../assets/images/contact-us.jpg";
import digitalMarketing from "../../assets/images/digital-marketing.jpg";
import digital from "../../assets/images/digital.jpg";
import webDevelopment from "../../assets/images/web-development.jpg";
import web from "../../assets/images/web.jpg";
import wordpressDeveloper from "../../assets/images/wordpess-developer.jpg";
import wordpress from "../../assets/images/wordpress.jpg";
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
                  <img class="img-fluid" src={webDevelopment} alt="#" />
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
                   we create innovative and custom web solutions designed to help businesses thrive in the digital world. With a focus on user experience, responsive design, and cutting-edge technology, we build websites and web applications that not only look great but deliver outstanding performance. Our team of experienced developers and designers are dedicated to turning your vision into reality, whether it's a business website, e-commerce platform, or a complex web application.
                  </p>
                  <div class="skill-wrapper pt-2">
                    <div class="skill skill-style-2 d-flex justify-content-between">
                      <div class="skill-title">
                        Project success percentage rate
                      </div>
                      <span class="progress-number animated fadeIn">%90</span>
                    </div>
                    <div>
                      <Progress
                        percent={90}
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
                            Custom Web Development
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            E-commerce Solutions
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            UX/UI Design
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Web App Development
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            CMS Development
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Website Maintenance & Support
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-sm-4 text-sm-end mt-4 mt-sm-0">
                      <img class="img-fluid" src={web} alt="#" />
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
                  <h2 class="title"> Digital marketing </h2>
                </div>
                <div class="ps-0 ps-lg-4 ps-xl-5">
                  <p>
                  we understand that a beautifully designed website is just the beginning. To truly succeed online, you need a comprehensive digital marketing strategy that drives traffic, engages visitors, and converts them into customers. Our full-suite digital marketing services are designed to help businesses maximize their online potential and achieve measurable results.
                  we offer a full range of digital marketing services to help businesses maximize their online visibility and reach their target audience. Our expertise in SEO, PPC, social media marketing, content creation, and email marketing ensures that your business gets the attention it deserves. We create data-driven strategies tailored to your goals, driving more traffic, increasing engagement, and boosting conversions.
                  </p>
                  <div class="skill-wrapper pt-2">
                    <div class="skill skill-style-2 d-flex justify-content-between">
                      <div class="skill-title">
                        Project success percentage rate
                      </div>
                      <span class="progress-number animated fadeIn">%70</span>
                    </div>
                    <div>
                      <Progress
                        percent={70}
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
                      Rated 3.80 out of 5 based on over{" "}
                      <a href="#"> 1000+ reviews</a>
                    </h6>
                  </div>
                  <div class="row align-items-center mt-4 pt-1">
                    <div class="col-sm-8">
                      <div class="list-wrapper">
                        <ul class="list col-2">
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Search Engine Optimization (SEO)
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Pay-Per-Click (PPC) Advertising
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Social Media Marketing
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Content Marketing
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Email Marketing
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Conversion Rate Optimization (CRO)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-sm-4 text-sm-end mt-4 mt-sm-0">
                      <img class="img-fluid" src={digital} alt="#" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 text-lg-center mb-5 mb-lg-0">
                <div class="about-img position-relative">
                  <img class="img-fluid" src={digitalMarketing} alt="#" />
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
                  <img class="img-fluid" src={wordpressDeveloper} alt="#" />
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
                  <h2 class="title">Wordpress Development </h2>
                </div>
                <div class="ps-0 ps-lg-4 ps-xl-5">
                  <p>
                  we specialize in creating custom, responsive, and SEO-friendly WordPress websites tailored to your business needs. From theme customization and plugin development to full-scale WooCommerce stores, we deliver high-performance websites that grow with your business. Our expert developers ensure seamless functionality, fast loading times, and robust security. Whether you’re starting fresh or enhancing an existing site, we provide ongoing support to keep your WordPress site optimized and secure.
                  </p>
                  <div class="skill-wrapper pt-2">
                    <div class="skill skill-style-2 d-flex justify-content-between">
                      <div class="skill-title">
                        Project success percentage rate
                      </div>
                      <span class="progress-number animated fadeIn">%80</span>
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
                      Rated 4.00 out of 5 based on over{" "}
                      <a href="#"> 1000+ reviews</a>
                    </h6>
                  </div>
                  <div class="row align-items-center mt-4 pt-1">
                    <div class="col-sm-8">
                      <div class="list-wrapper">
                        <ul class="list col-2">
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            Custom WordPress Website Development
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            WordPress Theme Development & Customization
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            WordPress Plugin Development
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            WooCommerce Development
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            WordPress Migration
                          </li>
                          <li>
                            <img class="img-fluid" src={ArrowRight} alt="" />
                            WordPress Maintenance & Support
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-sm-4 text-sm-end mt-4 mt-sm-0">
                      <img class="img-fluid" src={wordpress} alt="#" />
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

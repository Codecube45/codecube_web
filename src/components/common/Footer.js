import React, { useState } from "react";
import Address from "../../assets/images/address-info-contacts.svg";
import Mobile from "../../assets/images/address-info-headphone.svg";
import Email from "../../assets/images/address-info-email.svg";
import { Link } from "react-router-dom";
import { axiosInstance, config } from "../../pages/config";
import Loader from "./Loader";
import { notification } from "antd";

const Footer = () => {
  const year = new Date().getFullYear();

  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);

  const onHandleSubmit = async (e) => {
    console.log("first");
    e.preventDefault();
    setLoading(false);
    try {
      const formData = new FormData();
      formData.append("email", email);
      const res = await axiosInstance.post("newsletter", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      if (res.data.success) {
        setEmail("");
        notification.open({
          message: "Message Received Successfully ",
          description:
            "Your message has been sent! 🎉 Thank you for reaching out to us. We’re excited to connect and will get back to you shortly. Stay tuned!",
          showProgress: true,
        });
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <div>
      {isLoading && <Loader />}
      <footer class="site-footer footer-dark">
        <div class="footer-main">
          <div class="container">
            <div class="row">
              <div class="col-xl-3 col-md-5">
                <div class="widget widget-address-info">
                  <h5 class="widget-title">Where To Find Us</h5>
                  <ul class="address-info-list">
                    {/* <li>
                      <i class="icon">
                        <img class="img-fluid" src={Address} alt="" />
                      </i>
                      <span class="info">
                        <span>17504 Carlton Cuevas Rd </span>Gulfport, MS, 39503
                      </span>
                    </li> */}
                    <li>
                      <i class="icon">
                        <img class="img-fluid" src={Mobile} alt="" />
                      </i>
                      <span class="info">
                        <span><a href="tel:8849835366" class="phnNo">+91 8849835366</a> </span>Mon-fri 8:30am 6:30pm
                      </span>
                    </li>
                    <li>
                      <i class="icon">
                        <img class="img-fluid" src={Email} alt="" />
                      </i>
                      <span class="info">
                        <span><a className="phnNo" href="mailto:codecube45@gmail.com">codecube45@gmail.com</a> </span>24x7 online support
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-5 col-md-7">
                <div class="widget">
                  <h5 class="widget-title">Newsletter</h5>
                  <div class="widget widget-newsletter mb-4 pb-2">
                    <form class="newsletter-form" onSubmit={onHandleSubmit}>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Enter Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button class="subscribe-btn">
                        <i class="bi bi-send"></i>
                      </button>
                    </form>
                  </div>
                  <div class="widget widget-menu">
                    <h6 class="widget-title">Quick Links</h6>
                    <ul class="list-unstyled list-col-3 mb-0">
                      <li>
                        <Link to={`${config.appUrl}`}>Home</Link>
                      </li>
                      <li>
                        <Link to={`${config.appUrl}about-us`}>About us</Link>
                      </li>
                      <li>
                        <Link to={`${config.appUrl}our-services`}>
                          Our Services
                        </Link>
                      </li>
                      <li>
                        <Link to={`${config.appUrl}blog`}>Blogs</Link>
                      </li>
                      <li>
                        <Link to={`${config.appUrl}contact-us`}>
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link to={`${config.appUrl}our-services#website`}>
                          Web Development
                        </Link>
                      </li>
                      <li>
                        <Link to={`${config.appUrl}our-services#digital`}>
                          Digital Marketing
                        </Link>
                      </li>
                      <li>
                        <Link to={`${config.appUrl}our-services#wordpress`}>
                          WordPress{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-12 ms-auto">
                <div class="widget widget-info">
                  <h5 class="widget-title">Call Center</h5>
                  <a class="number" href="tel:8849835366">
                    +91 8849835366
                  </a>
                  <h6 class="title">and get a free estimate</h6>
                </div>
                <div class="widget-socail">
                  <ul class="socail-icon">
                    <li>
                      <a target="_blank" href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/codecube45/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                      >
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="#">
                        <i className="bi bi-twitter-x"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <p>
                  <a class="navbar-brand">
                    <h4 class="text-white">
                      Code <span>Cube</span>{" "}
                    </h4>
                  </a>
                </p>
              </div>
              <div class="col-lg-6 text-lg-end">
                <p>
                  Copywrite © {year}. All Rights Reserved by Code Cube
                  Technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

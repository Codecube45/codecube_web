import React from "react";
import Address from "../../assets/images/address-info-contacts.svg";
import Mobile from "../../assets/images/address-info-headphone.svg";
import Email from "../../assets/images/address-info-email.svg";

const Footer = () => {

    const year = new Date().getFullYear() 
  return (
    <div>
      <footer class="site-footer footer-dark">
        <div class="footer-main">
          <div class="container">
            <div class="row">
              <div class="col-xl-3 col-md-5">
                <div class="widget widget-address-info">
                  <h5 class="widget-title">Where To Find Us</h5>
                  <ul class="address-info-list">
                    <li>
                      <i class="icon">
                        <img class="img-fluid" src={Address} alt="" />
                      </i>
                      <span class="info">
                        <span>17504 Carlton Cuevas Rd </span>Gulfport, MS, 39503
                      </span>
                    </li>
                    <li>
                      <i class="icon">
                        <img class="img-fluid" src={Mobile} alt="" />
                      </i>
                      <span class="info">
                        <span>001123456789 </span>Mon-fri 8:30am 6:30pm
                      </span>
                    </li>
                    <li>
                      <i class="icon">
                        <img class="img-fluid" src={Email} alt="" />
                      </i>
                      <span class="info">
                        <span>Info@example.com </span>24x7 online support
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-5 col-md-7">
                <div class="widget">
                  <h5 class="widget-title">Newsletter</h5>
                  <div class="widget widget-newsletter mb-4 pb-2">
                    <form class="newsletter-form">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Your Email"
                      />
                      <button type="submit" class="subscribe-btn">
                        <i class="bi bi-send"></i>
                      </button>
                    </form>
                  </div>
                  <div class="widget widget-menu">
                    <h6 class="widget-title">Quick Links</h6>
                    <ul class="list-unstyled list-col-3 mb-0">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about-us.html">About us</a>
                      </li>
                      <li>
                        <a href="team.html">Team</a>
                      </li>
                      <li>
                        <a href="team-single.html">Team Single</a>
                      </li>
                      <li>
                        <a href="service.html">Service</a>
                      </li>
                      <li>
                        <a href="service-detail.html">Service Single</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-detail.html">Blog Single</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-12 ms-auto">
                <div class="widget widget-info">
                  <h5 class="widget-title">Call Center</h5>
                  <a class="number" href="tel:+1800555500">
                    1-800-555-500
                  </a>
                  <h6 class="title">and get a free estimate</h6>
                </div>
                <div class="widget-socail">
                  <ul class="socail-icon">
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
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
                Copywrite © {year}. All Rights Reserved by Code Cube Technologies
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

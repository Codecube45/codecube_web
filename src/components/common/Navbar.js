import React, { useState } from "react";
import "../../assets/styles/navbar.css";
import mainLogo from "../../assets/images/main-logo.png";
import { Link, useLocation } from "react-router-dom";
import { config } from "../../pages/config";
import Address from "../../assets/images/address-info-contacts.svg";
import Mobile from "../../assets/images/address-info-headphone.svg";
import Email from "../../assets/images/address-info-email.svg";

const Navbar = ({ inner }) => {
  const location = useLocation("");

  const [sideMenu, setSideMenu] = useState(false);
  return (
    <div>
      <header
        className={`header header-default header-sticky header-absolute ${
          inner ? "bg-black" : ""
        }`}
      >
        <div className="header-inner">
          <div className="site-logo">
            <Link to={`${config.appUrl}`} className="navbar-brand d-flex gap-3 align-items-center">
              <img className="img-fluid" src={mainLogo} alt="logo" width="47" />
              <h4 className="text-white mb-0">
                Code <span>Cube</span>{" "}
              </h4>
            </Link>
          </div>
          <div className="site-menu d-none d-xl-block">
            <ul className="main-menu">
              <li
                className={`nav-item ${
                  location?.pathname == `${config.appUrl}` ? "active" : ""
                }`}
              >
                <Link className="nav-link" to={`${config.appUrl}`}>
                  Home <i className="fa-solid fa-chevron-down"></i>
                </Link>
              </li>
              <li className={`nav-item ${
                  location?.pathname == `${config.appUrl}our-services` ? "active" : ""
                }`}>
                <Link to={`${config.appUrl}our-services`} className="nav-link" href="#">
                  Our Service 
                </Link>
                <ul class="submenu">
                  <li><Link class="nav-link" to={`${config.appUrl}our-srvicese#website`}>Website Development</Link></li>
                  <li><Link class="nav-link" to={`${config.appUrl}our-services#digital`}>Digital Marketing</Link></li>
                  <li><Link class="nav-link" to={`${config.appUrl}our-services#wordpress`}>WordPress Development</Link></li>
                </ul>
              </li>
              <li
                className={`nav-item ${
                  location?.pathname == `${config.appUrl}about-us`
                    ? "active"
                    : ""
                }`}
              >
                <Link className="nav-link" to={`${config.appUrl}about-us`}>
                  About Us <i className="fa-solid fa-chevron-down"></i>
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location?.pathname == `${config.appUrl}blog` ? "active" : ""
                }`}
              >
                <Link className="nav-link" to={`${config.appUrl}blog`}>
                  Blog <i className="fa-solid fa-chevron-down"></i>
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location?.pathname == `${config.appUrl}contact-us`
                    ? "active"
                    : ""
                }`}
              >
                <Link className="nav-link" to={`${config.appUrl}contact-us`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="site-action d-none d-xl-block">
            <div className="action-hamburger">
              <a
                className="hamburger"
                href="#"
                onClick={() => setSideMenu(true)}
              >
                <span className="hamburger-container">
                  <span className="hamburger-inner"></span>
                  <span className="hamburger-hidden"></span>
                </span>
              </a>
            </div>
          </div>

          <div className="mobile-action d-block d-xl-none">
            <div className="mobile-hamburger">
              <a
                className="hamburger"
                href="#"
                data-bs-toggle="offcanvas"
                data-bs-target="#menuOffcanvas"
                aria-controls="menuOffcanvas"
              >
                <span className="hamburger-container">
                  <span className="hamburger-inner"></span>
                  <span className="hamburger-hidden"></span>
                </span>
              </a>
            </div>
          </div>

          <div>
            <div
              class={`offcanvas offcanvas-end sidepanel-offcanvas ${
                sideMenu ? "show" : ""
              }`}
            >
              <div class="offcanvas-header">
                <button
                  type="button"
                  class="btn-close"
                  onClick={() => setSideMenu(false)}
                >
                  <i class="bi bi-x"></i>
                </button>
              </div>

              <div class="offcanvas-body">
                <div class="body-inner">
                  <div class="about-info">
                    <h4 class="title mb-3">Scalable Business for Startups</h4>
                    <p>
                      Get the oars in the water and start rowing. Execution is
                      the single biggest factor in achievement so the faster and
                      better your execution.
                    </p>
                  </div>
                  <ul
                    class="address-info-list"
                    style={{ listStyle: "none", padding: "0" }}
                  >
                    <li className="mb-3">
                      <i class="icon pe-3">
                        <img class="img-fluid" src={Address} alt="" />
                      </i>
                      <span class="info">
                        <span>17504 Carlton Cuevas Rd </span>
                      </span>
                    </li>
                    <li className="mb-3">
                      <i class="icon  pe-3">
                        <img class="img-fluid" src={Mobile} alt="" />
                      </i>
                      <span class="info">
                        <span>001123456789 </span>
                      </span>
                    </li>
                    <li className="mb-3">
                      <i class="icon pe-3">
                        <img class="img-fluid" src={Email} alt="" />
                      </i>
                      <span class="info">
                        <span>Info@example.com </span>
                      </span>
                    </li>
                  </ul>
                  <div class="contact-info">
                    <span class="text">
                      Looking for collaboration for your next creative project?
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

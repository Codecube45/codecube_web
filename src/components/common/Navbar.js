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
  const [sideMenuMobile, setSideMenuMobile] = useState(false);
  return (
    <div>
      <header
        className={`header header-default header-sticky header-absolute ${
          inner ? "bg-black" : ""
        }`}
      >
        <div className="header-inner">
          <div className="site-logo">
            <Link
              to={`${config.appUrl}`}
              className="navbar-brand d-flex gap-3 align-items-center"
            >
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
              <li
                className={`nav-item ${
                  location?.pathname == `${config.appUrl}our-services`
                    ? "active"
                    : ""
                }`}
              >
                <Link
                  to={`${config.appUrl}our-services`}
                  className="nav-link"
                  href="#"
                >
                  Our Service
                </Link>
                <ul class="submenu">
                  <li>
                    <Link
                      class="nav-link"
                      to={`${config.appUrl}our-services#website`}
                    >
                      Website Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="nav-link"
                      to={`${config.appUrl}our-services#digital`}
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="nav-link"
                      to={`${config.appUrl}our-services#wordpress`}
                    >
                      WordPress Development
                    </Link>
                  </li>
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
              <a className="hamburger" onClick={() => setSideMenuMobile(true)}>
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
                    <h4 class="title mb-3">Building dynamic, scalable, and modern web solutions.</h4>
                    <p>
                    we specialize in crafting custom, high-performance websites that deliver results.  Whether you need an e-commerce platform or a dynamic web app, we’re here to help your business thrive in the digital world.
                    </p>
                  </div>
                  <ul
                    class="address-info-list"
                    style={{ listStyle: "none", padding: "0" }}
                  >
                    {/* <li className="mb-3">
                      <i class="icon pe-3">
                        <img class="img-fluid" src={Address} alt="" />
                      </i>
                      <span class="info">
                        <span>17504 Carlton Cuevas Rd </span>
                      </span>
                    </li> */}
                    <li className="mb-3">
                      <i class="icon  pe-3">
                        <img class="img-fluid" src={Mobile} alt="" />
                      </i>
                      <span class="info">
                        <span>8849835366  </span>
                      </span>
                    </li>
                    <li className="mb-3">
                      <i class="icon pe-3">
                        <img class="img-fluid" src={Email} alt="" />
                      </i>
                      <span class="info">
                        <span>codecube45@gmail.com</span>
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

          <div
            class={`offcanvas main-menu-offcanvas offcanvas-end  ${
              sideMenuMobile ? "show" : ""
            }`}
          >
            <div class="offcanvas-header">
              <a class="navbar-brand d-flex gap-2 align-items-center">
                <img class="img-fluid" src={mainLogo} alt="logo" />
                <h4 className="mb-0">Code Cube</h4>
              </a>
              <button
                type="button"
                class="btn-close"
                style={{ marginLeft: "65px" }}
                onClick={() => setSideMenuMobile(false)}
              >
                <i class="bi bi-x"></i>
              </button>
            </div>
            <div class="offcanvas-body">
              <div class="body-inner">
                <nav class="navbar">
                  <ul class="navbar-nav w-100">
                    <li class="nav-item ">
                      <Link to={`${config.appUrl}`} class="nav-link">
                        Home
                      </Link>
                    </li>
                    <li class="nav-item ">
                      <Link to={`${config.appUrl}`} class="nav-link">
                        Our Services
                      </Link>
                    </li>
                    <li class="nav-item ">
                      <Link to={`${config.appUrl}`} class="nav-link">
                        About Us
                      </Link>
                    </li>
                    <li class="nav-item ">
                      <Link to={`${config.appUrl}`} class="nav-link">
                        Blogs
                      </Link>
                    </li>
                    <li class="nav-item ">
                      <Link to={`${config.appUrl}`} class="nav-link">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div class="bottom-info ">
                  <div class="contact-info border-0 pt-0">
                    <span class="number">+1 234 567 8910</span>
                    <a class="mail" href="#">
                      <i class="bi bi-envelope"></i>info@gmail.com
                    </a>
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

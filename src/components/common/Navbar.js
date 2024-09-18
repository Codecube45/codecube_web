import React from "react";
import "../../assets/styles/navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="header header-default header-sticky header-absolute">
        <div className="header-inner">
          <div className="site-logo">
            <a className="navbar-brand">
              {/* <img className="img-fluid" src="" alt="logo" /> */}
              <h4 className="text-white">Code <span>Cube</span> </h4>
            </a>
          </div>
          <div className="site-menu d-none d-xl-block">
            <ul className="main-menu">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <i className="fa-solid fa-chevron-down"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pages <i className="fa-solid fa-chevron-down"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Service <i className="fa-solid fa-chevron-down"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Case Studies <i className="fa-solid fa-chevron-down"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog <i className="fa-solid fa-chevron-down"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact-us.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="site-action d-none d-xl-block">
            <div className="action-hamburger">
              <a
                className="hamburger"
                href="#"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
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
        </div>
      </header>
    </div>
  );
};

export default Navbar;

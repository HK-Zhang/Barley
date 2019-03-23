import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <nav
        className={'navbar navbar-expand-xl navbar-light navbar-dnvgl ' + styles.nav}
      >
        <a href="https://www.dnvgl.com" className="logonavbar-brand mr-5 mb-2">
          <img
            className={'logo-image ' + styles.logoImg}
            src="Logo-Standard-RGB.svg"
            alt="Dnvgl Logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-between align-items-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav" />

          <div className="navbar-dnvgl-iconbar d-flex">
            <span className="site-title">
              Online VCS <span className="px-2">|</span>
            </span>
            <ul className="navbar-nav navbar-dnvgl-iconbar flex-row mr-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle mr-3 mr-lg-0" href="#"
                >
                  <i className="fal fa-user-alt" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pr-2" href="#">
                  <i className="fal fa-question-circle" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

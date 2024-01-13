import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SvgLogo } from "../../Svg";
import "./header.css";
import HeaderUperHead from "./HeaderUperHead";
import Headroom from "react-headroom";

const Header = () => {
  const [activeNav, setActiveNav] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState("false");

  const handleSetActiveNav = (nav) => {
    setActiveNav(nav);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="">
      <Headroom>
        <div
          className="header-container flex"
          onClick={() => {
            scrollToTop();
          }}
        >
          <div className="menu-bar flex">
          <Link
            to="/"
            onClick={() => setActiveNav("/")}
            className={activeNav === "/" ? "/" : ""}
          >
            <SvgLogo />
          </Link>
          
          <div
            onClick={toggleMenu}
            className={`hamburger flex ${isMenuOpen ? 'open' : ''}`}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          </div>
          <div className={`menu-list flex ${isMenuOpen ? 'show' : ''}`}>
            <HeaderUperHead
              handleSetActiveNav={handleSetActiveNav}
              activeNav={activeNav}
            />
            <ul className="nav-menu flex">
              <li className="nav-list">
                <Link
                  to="commercial-rerergeration"
                  onClick={() => setActiveNav("commercial-rerergeration")}
                  className={
                    activeNav === "commercial-rerergeration" ? "active" : ""
                  }
                >
                  Commercial-Rerergeration
                </Link>
              </li>
              <li className="nav-list">
                <Link
                  to="repair-maintenance"
                  onClick={() => setActiveNav("repair-maintenance")}
                  className={activeNav === "repair-maintenance" ? "active" : ""}
                >
                  Repair-Maintenance
                </Link>
              </li>
              <li className="nav-list">
                <Link
                  to="our-projects"
                  onClick={() => setActiveNav("our-projects")}
                  className={activeNav === "our-projects" ? "active" : ""}
                >
                  Our-Projects
                </Link>
              </li>
              <li className="nav-list">
                <Link
                  to="contact-us"
                  onClick={() => setActiveNav("contact-us")}
                  className={activeNav === "contact-us" ? "/" : ""}
                >
                  24/7 Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Headroom>
    </div>
  );
};

export default Header;

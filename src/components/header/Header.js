import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SvgLogo } from "../../Svg";
import "./header.css";
import HeaderUperHead from "./HeaderUperHead";
import Headroom from "react-headroom";

const Header = () => {
  const [activeNav, setActiveNav] = useState("/");
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="">
      <Headroom>
        <div
          className="header-container flex"
          onClick={() => {
            scrollToTop();
          }}
        >
          <Link
            to="/"
            onClick={() => setActiveNav("/")}
            className={activeNav === "/" ? "/" : ""}
          >
            <SvgLogo />
          </Link>
          <div className="menu-list flex">
            <HeaderUperHead />
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
                  className={activeNav === "contact-us" ? "active" : ""}
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

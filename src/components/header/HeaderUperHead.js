import React from "react";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import "./header.css";

const HeaderUperHead = ({ handleSetActiveNav, activeNav }) => {

  return (
    <>
      <ul className="nav-menu-uper-head flex">
        <li className="nav-list-uper-head">
          <Link
            to="about-us"
            onClick={() => handleSetActiveNav("about-us")}
            className={activeNav === "about-us" ? "active" : ""}
          >
            About-Us
          </Link>
        </li>
        <li className="nav-list-uper-head">
          <Link
            to="testimonials"
            onClick={() => handleSetActiveNav("testimonials")}
            className={activeNav === "testimonials" ? "active" : ""}
          >
            Testimonials
          </Link>
        </li>
        <li className="nav-list-uper-head">
          <Link
            to="blog"
            onClick={() => handleSetActiveNav("blog")}
            className={activeNav === "blog" ? "active" : ""}
          >
            Blog
          </Link>
        </li>
        <li className="nav-list-uper-head">
          <Link
            to="contact-us"
            onClick={() => handleSetActiveNav("contact-us")}
            className={activeNav === "contact-us" ? "active" : ""}
          >
            Contact-Us
          </Link>
        </li>
        <li className="nav-list-uper-head">
          <h4>07473319304</h4>
        </li>
        <li className="nav-list-uper-head">
          <a
            href="https://api.whatsapp.com//send?phone=00447473319304"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            className="header-whats-up-icon flex"
          >
            <BsWhatsapp className="contact__options-icon" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default HeaderUperHead;

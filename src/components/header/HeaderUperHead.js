import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import "./header.css";

const HeaderUperHead = () => {
  const [activeNav, setActiveNav] = useState("/");
  return (
    <>
      <ul className="nav-menu-uper-head flex">
        <li className="nav-list-uper-head">
          <Link
            to="about-us"
            onClick={() => setActiveNav("about-us")}
            className={activeNav === "about-us" ? "active" : ""}
          >
            About-Us
          </Link>
        </li>
        <li className="nav-list-uper-head">
          <Link
            to="testimonials"
            onClick={() => setActiveNav("testimonials")}
            className={activeNav === "testimonials" ? "active" : ""}
          >
            Testimonials
          </Link>
        </li>
        <li className="nav-list-uper-head">
          <Link
            to="blog"
            onClick={() => setActiveNav("blog")}
            className={activeNav === "blog" ? "active" : ""}
          >
            Blog
          </Link>
        </li>
        <li className="nav-list-uper-head">
          <Link
            to="contact-us"
            onClick={() => setActiveNav("contact-us")}
            className={activeNav === "contact-us" ? "active" : ""}
          >
            Contact-Us
          </Link>
        </li>
        <li className="nav-list-uper-head">
          <h5>07473319304</h5>
        </li>
        <li className="nav-list-uper-head">
          <a
            href="https://api.whatsapp.com//send?phone=00447473319304"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            className="header-whats-up-icon"
          >
            <BsWhatsapp className="contact__options-icon" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default HeaderUperHead;

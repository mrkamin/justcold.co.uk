import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import "./header.css";

const HeaderUperHead = () => {
  return (
    <>
      <ul className="nav-menu-uper-head flex">
        <li className="nav-list-uper-head">
          <Link to="about-us">About-Us</Link>
        </li>
        <li className="nav-list-uper-head">
          <Link to="testimonials">Testimonials</Link>
        </li>
        <li className="nav-list-uper-head">
          <Link to="blog">Blog</Link>
        </li>
        <li className="nav-list-uper-head">
          <Link to="contact-us">Contact-Us</Link>
        </li>
        <li className="nav-list-uper-head">
          <Link>07473319304</Link>
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

import { Link } from "react-router-dom";
import { SvgLogo } from "../../Svg";
import "./header.css";
import HeaderUperHead from "./HeaderUperHead";
import Headroom from "react-headroom";

const Header = () => {
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
          <Link to="/">
            <SvgLogo />
          </Link>
          <div className="menu-list flex">
            <HeaderUperHead />
            <ul className="nav-menu flex">
              <li className="nav-list">
                <Link to="commercial-rerergeration">
                  Commercial-Rerergeration
                </Link>
              </li>
              <li className="nav-list">
                <Link to="repair-maintenance">Repair-Maintenance</Link>
              </li>
              <li className="nav-list">
                <Link to="our-projects">Our-Projects</Link>
              </li>
              <li className="nav-list">
                <Link to="contact-us">24/7 Support</Link>
              </li>
            </ul>
          </div>
        </div>
      </Headroom>
    </div>
  );
};

export default Header;

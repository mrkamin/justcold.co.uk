import { Link } from "react-router-dom";
import { SvgLogo } from "../../Svg";
import "./header.css";
import HeaderUperHead from "./HeaderUperHead";

const Header = () => {
  return (
    <div className="">
      <div className="header-container flex">
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
              <Link to="contact">24/7 Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

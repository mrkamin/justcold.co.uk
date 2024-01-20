import { FaFacebook } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { SiMinutemailer } from 'react-icons/si';
import { SvgLogoBlue } from '../../Svg';
import IMG9 from '../../assets/accreditations.png';
import Logos from './Logos';
import './footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Logos />
      <div className="footer-container">
        <Link
          to="contact-us"
          className=""
          onClick={scrollToTop}
        >
          {' '}
          Click here for a No Obligation Quote or On-site Call Out
        </Link>
        <p className="">or Call us on 07473319304</p>
      </div>
      <div className="HomeSectionThree grid">
        <div className="homeSectionThreeItem">
          <SvgLogoBlue />
          <h3>Call: <span className=''>07473319304</span></h3>
          <p className="">
            Address: Unit B 11 Troonway Business Centre Humberstone Lane
            Leicester LE4 9HA
          </p>
          <div className="">
            <SiMinutemailer className="contact__options-icon" />
            <div className="footer-address-cont flex">
              <h4>Email:</h4>
              <a
                href="mailto:info@justcold.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
              >
                <span className="brand-color" id="email">
                     info@justcold.co.uk
                </span>
              </a>
            </div>
          </div>
          <a
            href="https://api.whatsapp.com//send?phone=00447473319304"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            aria-label="Email: info@theukeverest.co.uk"
            className="footer-whats-up-icon flex"
          >
            <BsWhatsapp className="contact__options-icon" />
          </a>
        </div>
        <div className="homeSectionThreeItem">
          <h3>Refrigeration Eroupe</h3>
          <p className="">
            At JustCold Ltd, we supply refrigeration
            services for commercial businesses and estate agencies. We’ve
            worked…
          </p>
          <Link
            to="about-us"
            className="read-more"
            onClick={scrollToTop}
          >
            Read more
            {'>'}
          </Link>
          <img
            src={IMG9}
            alt="Accredation"
            height={150}
            className="accredation"
          />
        </div>
        <div className="homeSectionThreeItem">
          <h3>Refrigeration Services</h3>
          <ul className="">
            <li>
              <Link to="about-us" className="">
                AirConditioning Installation
              </Link>
            </li>
            <li>
              <Link to="about-us" className="">
                Air conditioning Repair
              </Link>
            </li>
            <li>
              <Link to="about-us" className="">
                Air Conditioning Maintenance
              </Link>
            </li>
            <li>
              <Link to="about-us" className="">
                Air Conditioning Service
              </Link>
            </li>
            <li>
              <Link to="about-us" className="">
                Commercial Refrigeration
              </Link>
            </li>
            <li>
              <Link to="about-us" className="">
                Refrigeration Repair
              </Link>
            </li>
            <li>
              <Link to="about-us" className="">
                Cold Rooms & Cellar Coolers
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-container2 flex">
        <p className="">
          @2023 JustCold LTD. Company number 12435t643. Office 7, 35-7
          Ludgate . All Rights Reserved
        </p>
        <div className="footer-social-2 flex">
          <p className="">Privace Policy</p>
          <p className="">Terms & Conditions</p>
          <a
            href="https://www.facebook.com/mrkamin2"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            aria-label="Email: info@theukeverest.co.uk"
            className="facebook-icon"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

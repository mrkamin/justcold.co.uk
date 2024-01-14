import { NavLink } from 'react-router-dom';
import IMG9 from '../../assets/accreditations.png';

const HomeSectionThree = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="HomeSectionThree gap-3">
        <div className="w-100 homeSectionThreeItem p-4">
          <h3>Commercial Refrigeration Europe</h3>
          <p className="text-align-justify">
            <span className="brand-color">
              Installation, repair and maintenance.
            </span>
            {' '}
            <br />
            {' '}
            <br />
            Walk-in Chiller / Freezer (Cold Room), Display Fridge / Freezer,
            Counter Fridge / Freezer, Upright Fridge / Freezer, Drink Fridge,
            Blast Chiller, Bottle Cooler, Cellar Cooler, Ice Maker / Machine,
            Sub Zero / Medical Refrigeration
            {' '}
            <br />
            <br />
            <span className="brand-color">24/7 repair service providing –</span>
            quick response time, top class service and quality of first time
            fix.
          </p>
          <div className="d-flex justify-content-end">
            <NavLink
              to="contact-us"
              className=" read-more rounded-5 px-2"
              onClick={scrollToTop}
            >
              Request a Call Out
            </NavLink>
          </div>
        </div>
        <div className="w-100 homeSectionThreeItem p-4">
          <h3>Our Projects</h3>
          <p className="text-align-justify">
            We offer a
            {' '}
            <span className="brand-color">
              full design, installation and repair service
            </span>
            {' '}
            for all types of Refrigeration systems.
            <br />
            <br />
            {' '}
            Air-Conditioning – VRV, VRF, Wall-mounted, Cassette,
            Floor-mounted, Ducted, Split System, and Multi-split
            <br />
            <br />
            As accredited installers all equipment supplied by is provided with
            an extended
            {' '}
            <span className="brand-color">7 YEAR </span>
            WARRANTY giving you peace of mind that your air conditioning unit
            remains reliable and energy efficient.
          </p>
          <div className="d-flex justify-content-end">
            <NavLink
              to="contact-us"
              className=" read-more rounded-5 px-2"
              onClick={() => {
                scrollToTop();
              }}
            >
              Discuss your project
            </NavLink>
          </div>
        </div>
        <div className="w-100 homeSectionThreeItem p-4">
          <h3>Fully Accredited Services</h3>
          <img
            src={IMG9}
            alt="Accredation"
            height={150}
            className="accredation"
          />
          <p className="text-align-justify">
            Our aim is to provide enhanced working environments so that
            businesses can operate at their best – without the pains of slow and
            expensive repairs.
          </p>
          <div className="d-flex justify-content-end">
            <NavLink
              to="about-us"
              className=" read-more rounded-5 px-2"
              onClick={scrollToTop}
            >
              More about us
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeSectionThree;
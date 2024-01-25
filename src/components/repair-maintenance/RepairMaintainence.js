import { Link } from "react-router-dom";
import IMG1 from "../../assets/commercial/1.png";
import IMG2 from "../../assets/commercial/2.jpg";
import IMG3 from "../../assets/commercial/3.jpg";
import IMG4 from "../../assets/commercial/4.avif";
import IMG5 from "../../assets/commercial/5.png";
import IMG6 from "../../assets/commercial/6.jpg";
import IMG7 from "../../assets/commercial/7.jpg";
import IMG8 from "../../assets/commercial/8.jpg";
import IMG9 from "../../assets/repair/2.png";
import IMG10 from "../../assets/repair/3.png";
import IMG11 from "../../assets/repair/4.jpg";
import IMG12 from "../../assets/repair/5.png";
import IMG13 from "../../assets/repair/1 copy.jpg";
import IMG14 from "../../assets/repair/2 copy.png";
import IMG15 from "../../assets/repair/3 copy.png";
import IMG16 from "../../assets/repair/4 copy.jpg";

const RepairMaintaince = () => (
  <div className="air-cond-sys-main-cont p-5 d-flex flex-column gap-2">
    <div className="air-cond-sys-cont gap-4">
      <div className="d-flex flex-column gap-2">
        <h1>Repair and Servicing for Air Conditioning & Refrigeration</h1>
        <p>
          Here at Be Cool Refrigeration, we repair, service and maintain all
          types of <span>commercial refrigeration</span> and
          <span>air conditioning systems</span> for a wide range of businesses
          and home owners in and around the London area.
          <br /> <br />
          For all <span>REPAIRS</span>, our{" "}
          <span>emergency helpline is available 24/7, 365 days a year</span> so
          you can get in contact with us the moment you notice something needs
          fixing. We pride ourselves on providing a<span>quick response</span>{" "}
          call out service and quality of first-time fix.
        </p>
        <hr />
        <div className="d-flex flex-column gap-4">
          <h4>Air Conditioning Repair</h4>
          <div>
            <div className="air-cond-repair d-flex gap-4 align-items-center">
              <img src={IMG9} alt="IMG9" />
              <p className="p-0 m-0 fs-5">VRV or VRF</p>
            </div>
            <div className="air-cond-repair d-flex gap-4 align-items-center">
              <img src={IMG10} alt="IMG10" />
              <p className="p-0 m-0 fs-5">Wall Mounted</p>
            </div>
            <div className="air-cond-repair d-flex gap-4 align-items-center">
              <img src={IMG11} alt="IMG11" />
              <p className="p-0 m-0 fs-5">Cassette</p>
            </div>
            <div className="air-cond-repair d-flex gap-4 align-items-center">
              <img src={IMG12} alt="IMG12" />
              <p className="p-0 m-0 fs-5">Floor Mounted</p>
            </div>
            <div className="air-cond-repair d-flex gap-4 align-items-center">
              <img src={IMG13} alt="IMG13" />
              <p className="p-0 m-0 fs-5">Ducted</p>
            </div>
            <div className="air-cond-repair d-flex gap-4 align-items-center">
              <img src={IMG14} alt="IMG14" />
              <p className="p-0 m-0 fs-5">Concealed</p>
            </div>
            <div className="air-cond-repair d-flex gap-4 align-items-center">
              <img src={IMG15} alt="IMG15" />
              <p className="p-0 m-0 fs-5">Split</p>
            </div>
            <div className="air-cond-repair d-flex gap-4 align-items-center">
              <img src={IMG16} alt="IMG16" />
              <p className="p-0 m-0 fs-5">Multi-Split</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-column gap-4">
          <h4>Commercial Refrigeration Repair</h4>
          <div>
            <div className="air-cond-repair d-flex gap-4 align-items-center">
              <img src={IMG9} alt="IMG9" />
              <p className="p-0 m-0 fs-5">Walk-in Cold Room</p>
            </div>
            <div className="air-cond-repair d-flex gap-4 align-items-center">
              <img src={IMG10} alt="IMG10" />
              <p className="p-0 m-0 fs-5">Commercial Fridges</p>
            </div>
            <div className="air-cond-repair d-flex gap-4 align-items-center">
              <img src={IMG11} alt="IMG11" />
              <p className="p-0 m-0 fs-5">Commercial Freezer</p>
            </div>
            <div className="air-cond-repair d-flex gap-4 align-items-center">
              <img src={IMG12} alt="IMG12" />
              <p className="p-0 m-0 fs-5">Display or Counter Fridge</p>
            </div>
            <div className="air-cond-repair d-flex gap-4 align-items-center">
              <img src={IMG13} alt="IMG13" />
              <p className="p-0 m-0 fs-5">Upright Fridge</p>
            </div>
            <div className="air-cond-repair d-flex gap-4 align-items-center">
              <img src={IMG14} alt="IMG14" />
              <p className="p-0 m-0 fs-5">Cellar or Bottle Cooler</p>
            </div>
            <div className="air-cond-repair d-flex gap-4 align-items-center">
              <img src={IMG15} alt="IMG15" />
              <p className="p-0 m-0 fs-5">Blast Chiller</p>
            </div>
            <div className="air-cond-repair d-flex gap-4 align-items-center">
              <img src={IMG16} alt="IMG16" />
              <p className="p-0 m-0 fs-5">Ice Machine / Maker</p>
            </div>
            <div className="air-cond-repair d-flex gap-4 align-items-center">
              <img src={IMG14} alt="IMG14" />
              <p className="p-0 m-0 fs-5">Chest Freezer</p>
            </div>
          </div>
        </div>
        <hr />
        <p>
          <span>
            <Link to="contact-us">Request a ON-SITE CALL OUT</Link>
          </span>
        </p>
        <hr />
        <div>
          <h4>Planned Maintenance Package</h4>
          <p>
            Our <span>Planned or Proactive Maintenance Service</span>
            offers regular servicing and maintenance visits to ensure that your
            system remains energy efficient and operates to its optimum level.
            Additional services include:
          </p>
          <div className="air-cond-repair d-flex gap-4 align-items-center">
            <img src={IMG9} alt="IMG9" />
            <p className="p-0 m-0 fs-5">Priority response to all breakdowns</p>
          </div>
          <div className="air-cond-repair d-flex gap-4 align-items-center">
            <img src={IMG10} alt="IMG10" />
            <p className="p-0 m-0 fs-5">24/7 Emergency response</p>
          </div>
          <div className="air-cond-repair d-flex gap-4 align-items-center">
            <img src={IMG11} alt="IMG11" />
            <p className="p-0 m-0 fs-5">Dedicated service engineers</p>
          </div>
          <hr />
          <div className="d-flex flex-column gap-3">
            <p>
              <span>For more details visit</span>
            </p>
            <div className="d-flex gap-3 text-center for-more-details w-100">
              <Link
                to="about-us"
                className=" read-more p-2 rounded-5 px-4 w-100"
              >
                Air Conditioning Maintenance
              </Link>
              <Link
                to="about-us"
                className=" read-more p-2 rounded-5 px-4 w-100"
              >
                Commercial Refrigeration Maintenance
              </Link>
            </div>
            <p>
              <span>
                <Link to="contact-us">Request a FREE SURVEY</Link>
              </span>
            </p>
          </div>
        </div>
        <hr />
        <div>
          <p>All range of systems including:</p>
          <p>
            <span>
              Refrigeration: Williams, Foster, True, Polar, Hoshizaki, Fagor,
              True, Precision, J&E Hall, Gram, Blizzard, Arneg, Max Cold,
              Electrolux and more.
            </span>
          </p>
          <hp>
            <span>
              Air-conditioning: Daikin, Mitsubishi Electric, Mitsubishi Heavy
              Industries, Samsung, Fujitsu, LG, Panasonic, Carrier and more.
            </span>
          </hp>
        </div>
        <hr />
        <div>
          <h4>Next Steps</h4>
          <p>
            The Uk Everest Refrigeration is a commercial air-conditioning
            installation and service specialist. We can help your business
            operate in a more efficient and cost-effective way.
            <br /> <br />
            We are here to help.
          </p>
        </div>
        <p>
          Call <span>07473319304</span> today to talk to us about your Repair
          and Maintenance requirements.
        </p>
      </div>
      <div className="air-cond-sys-contact-info px-5 d-flex flex-column justify-content-center border border-dark rounded-4">
        <p>Air Conditioning Installation Speciaist</p>
        <h1>07473319304</h1>
        <p>
          <span>
            <Link to="contact-us" className="rounded-4">
              email us
            </Link>
          </span>{" "}
          or request a callback
        </p>
      </div>
    </div>
    <div className="air-cond-projects">
      <img src={IMG1} alt="IMG1" height={200} />
      <img src={IMG2} alt="IMG2" height={200} />
      <img src={IMG3} alt="IMG3" height={200} />
      <img src={IMG4} alt="IMG4" height={200} />
      <img src={IMG5} alt="IMG5" height={200} />
      <img src={IMG6} alt="IMG6" height={200} />
      <img src={IMG7} alt="IMG7" height={200} />
      <img src={IMG8} alt="IMG8" height={200} />
    </div>
  </div>
);

export default RepairMaintaince;

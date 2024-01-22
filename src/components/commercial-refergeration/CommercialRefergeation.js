import IMG from '../../assets/commercial/banner.jpg';
import RefergrationSectTwo from './CommercialRefergTwo';
import "./commercialrefergeration.css";

const CommercialRefergeration = () => {
  return (
    <>
      <div className="air-cond-banner">
        <img src={IMG} alt="bannerphoto" />
        <div className="air-cond-overlay" />
        <div className="commercial-banner-msg-p flex">
          <h1 className="bannerUpAnimation">
            <span className="font-family-coiny">JustCold</span>
            <span className="font-family-patua"> Commercial Refrigeration</span>
          </h1>
        </div>
      </div>
      <RefergrationSectTwo />
    </>
  );
};

export default CommercialRefergeration;

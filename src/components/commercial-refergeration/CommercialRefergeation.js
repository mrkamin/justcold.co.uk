import IMG from '../../assets/commercial/banner.jpg';
import RefergrationSectTwo from './CommercialRefergTwo';
import "./commercialrefergeration.css";

const CommercialRefergeration = () => {
  return (
    <>
      <div className="air-cond-banner">
        <img src={IMG} alt="bannerphoto" />
        <div className="air-cond-overlay" />
        <h1 className="air-cond-heading">
          Commercial Refrigeration Europe
        </h1>
      </div>
      <RefergrationSectTwo />
    </>
  );
};

export default CommercialRefergeration;

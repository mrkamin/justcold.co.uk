import RepairMaintaince from './RepairMaintainence';
import IMG from '../../assets/repair/1 copy.jpg'
import './repairmaintenance.css';

const RepairMaintenance = () => {
    return (
        <>
         <div className="air-cond-banner">
        <img src={IMG} alt="bannerphoto" />
        <div className="air-cond-overlay" />
        <div className="commercial-banner-msg-p flex">
          <h1 className="bannerUpAnimation">
            <span className="font-family-patua">Commercial Refrigeration</span>
            <span className="font-family-patua"> Repair & Maintenance</span>
          </h1>
        </div>
      </div>
        <RepairMaintaince />
      </>
    )
}

export default RepairMaintenance;

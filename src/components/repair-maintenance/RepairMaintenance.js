import RepairMaintaince from './RepairMaintainence';
import IMG from '../../assets/repair/1 copy.jpg'
import './repairmaintenance.css';

const RepairMaintenance = () => {
    return (
        <>
        <div className="air-cond-banner position-relative text-center">
          <img src={IMG} alt="bannerphoto" />
          <div className="air-cond-overlay position-absolute" />
          <h1 className="air-cond-heading p-0 m-0 position-absolute w-100">
            Air Conditioning & Commercial Refrigeration Repair and Maintenance
          </h1>
        </div>
        <RepairMaintaince />
      </>
    )
}

export default RepairMaintenance;

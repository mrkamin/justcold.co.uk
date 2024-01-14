import { Link } from "react-router-dom";
import { GiAutoRepair } from "react-icons/gi";
import HomeSectionThree from "./HomeSectionThree";
import { Svg1, Svg2 } from "../../Svg";

const Cart = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="cart-container grid">
        <div className="cart-items flex">
          <div className="cart-item flex">
            <Svg2 />
            <div className="cart-parg">
              <h3 className="cart-parg-h3">Commercial Refrigeration</h3>
              <p className="cart-parg-p">
                Walk-in Cold Rooms, Fridges & Freezers
              </p>
            </div>
          </div>
          <div className="read-more-container flex">
            <Link
              to="commercial-rerergeration"
              className="read-more"
              onClick={scrollToTop}
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="cart-items flex">
          <div className="cart-item flex">
            <GiAutoRepair fill="#0097c8" className="repar-icon" />
            <div className="">
              <h3 className="cart-parg-h3">Repair and Maintenance</h3>
              <p className="cart-parg-p">
                Air-conditioning and Refrigeration Systems
              </p>
            </div>
          </div>
          <div className="read-more-container flex">
            <Link
              to="repair-maintenance"
              className="read-more"
              onClick={scrollToTop}
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="cart-items flex">
          <div className="cart-item flex">
            <Svg1 />
            <div className="">
              <h3 className="cart-parg-h3">Our Projects</h3>
              <p className="cart-parg-p">Our biggest and proudest Projects</p>
            </div>
          </div>
          <div className="read-more-container flex">
            <Link to="our-projects" className="read-more" onClick={scrollToTop}>
              Read more
            </Link>
          </div>
        </div>
      </div>
      <HomeSectionThree />
    </>
  );
};

export default Cart;

import { Link } from 'react-router-dom';
import IMG1 from '../../assets/commercial/1.png';
import IMG2 from '../../assets/commercial/2.jpg';
import IMG3 from '../../assets/commercial/3.jpg';
import IMG4 from '../../assets/commercial/4.avif';
import IMG5 from '../../assets/commercial/5.png';
import IMG6 from '../../assets/commercial/6.jpg';
import IMG7 from '../../assets/commercial/7.jpg';
import IMG8 from '../../assets/commercial/8.jpg';

const RefergrationSectTwo = () => (
  <div className="air-cond-sys-main-cont">
    <div className="air-cond-sys-cont">
      <div className="commercial-container flex">
        <p className="commercial-p">
          We supply, install, maintain and repair:
          <span className="brand-color"> 
            {' '}
            high humidity cooling systems, hydro cooling systems, conventional
            cooling,
            {' '}
          </span>
          {' '}
          and
          <span className="brand-color"> vacuum cooling refrigeration systems.</span>
          {' '}
          We have over 10
          years’ experience in the design, supply and installation of made to
          measure
          <span className="brand-color"> cold rooms, cellar coolers, display refrigerators</span>
          {' '}
          and
          <span className="brand-color"> bespoke bar units</span>
          {' '}
          for all types of commercial and
          industrial businesses including:
        </p>
        <div className="air-cond-sys-list">
          <ul className="w-75">
            <li className="air-cond-sys-list-item">Restaurants</li>
            <li className="air-cond-sys-list-item">Catering Companies</li>
            <li className="air-cond-sys-list-item">Bars and NightClubs</li>
            <li className="air-cond-sys-list-item">Retail Stores</li>
          </ul>
          <ul className="w-100">
            <li className="air-cond-sys-list-item">Supermarkets</li>
            <li className="air-cond-sys-list-item">Factories</li>
            <li className="air-cond-sys-list-item">Storage Facilities</li>
            <li className="air-cond-sys-list-item">Hotels</li>
          </ul>
        </div>
        <p className="commercial-p">
          We specialise in reliable, energy efficient commercial refrigeration
          systems that reduce your running costs and save you money. We
          carefully select systems that are the very best high specification
          refrigeration products to provide rapid cooling and longer shelf-life
          for your produce.
        </p>
        <hr />
        <h1>Commercial Refrigeration Systems</h1>
        <p>
          We
          {' '}
          <span className="brand-color">
            supply, install, repair and maintain all commercial refrigeration
            makes and models,
          </span>
          {' '}
          these include:
        </p>
        <div>
          <p>
            <span className="brand-color"> Williams,</span>
          </p>
          <p>
            <span className="brand-color"> Foster,</span>
          </p>
          <p>
            <span className="brand-color"> True,</span>
          </p>
          <p>
            <span className="brand-color"> Polar,</span>
          </p>
          <p>
            <span className="brand-color"> Hoshizaki,</span>
          </p>
          <p>
            <span className="brand-color"> Fagor,</span>
          </p>
          <p>
            <span className="brand-color"> Electrolux, and many more.</span>
          </p>
        </div>
        <hr />
        <div>
          <h3>
            Commercial-Refrigeration Services
          </h3>
          <p>
            Commercial refrigeration is intrinsic to the successful functioning
            of your kitchen but with a vast range of products to choose from
            it’s important that you install the correct refrigeration equipment.
            <br />
            {' '}
            <br />
            Investing in a high quality, comprehensive cooling system will be a
            significant asset to the longevity and efficiency of your business.
            {' '}
            <br />
            <br />
            Our experienced design team can offer
            {' '}
            <span className="brand-color">no obligation advice </span>
            on the best refrigeration solutions for your business.
          </p>
        </div>
        <hr />
        <div>
          <h3>Coldrooms</h3>
          <ul className='commercial-referg-li'>
            <li >
              <span className="brand-color">Walk-in Fridge and Walk-in Freezers – </span>
              suitable for large stock food catering products with flexible
              temperature, cold storage solutions
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h3>Commercial Fridges</h3>
          <p>
            Energy efficient solutions, to help increase product life and
            improve food safety.
          </p>
          <ul className='commercial-referg-li'>
            <li>
              <span className="brand-color">Display Fridge</span>
              – wide range of single or double
              fronted glass door refrigerators for visual impact and with
              variable food display options
            </li>
            <li>
              <span className="brand-color">Counter Fridge</span>
              – space efficient, offering flexible
              food preparation
            </li>
            <li>
              <span className="brand-color">Free Standing Fridge</span>
              – fully automatic, fan assisted
              cooling in a range of sizes
            </li>
            <li>
              <span className="brand-color">Upright Fridge</span>
              – variable food display options
            </li>
            <li>
              <span className="brand-color">Drink Fridge</span>
              – chilled display fridge with single,
              half size or double door options
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h3>Commercial Freezers</h3>
          <p>Reliable food storage solutions for commercial kitchens</p>
          <ul className='commercial-referg-li'>
            <li>
              <span className="brand-color">Upright Freezer</span>
              – space saving, practical and energy
              efficient
            </li>
            <li>
              <span className="brand-color">Chest Freezer</span>
              – reliable, high capacity for large
              volume freezing
            </li>
            <li>
              <span className="brand-color">Counter Freezer</span>
              – flexible solution for food
              preparation counter space
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h3>Blast Freezer and Blast Chiller</h3>
          <p>
            Reliable way to ensure good food hygiene standards and preserve food
            quickly.
          </p>
        </div>
        <hr />
        <div>
          <h3>Bottle Cooler</h3>
          <p>
            Glass door, half height, single and double door drinks refrigeration
          </p>
        </div>
        <hr />
        <div>
          <h3>Sub Zero / Medical Refrigeration</h3>
          <p>
            With advanced temperature settings for sensitive scientific and
            medical materials.
          </p>
        </div>
        <hr />
        <div>
          <h3>Cellar Cooler, Wine Cooler</h3>
          <p>Under counter and full height wine coolers.</p>
        </div>
        <hr />
        <p>
          <span className="brand-color">
            <Link to="/contact-us" className="brand-color commercial-email">Contact us for No Obligation Survey</Link>
          </span>
        </p>
        <hr />
        <div>
          <h3>Talk to us about your refrigeration needs</h3>
          <p>
            The Uk Everest Refrigeration are specialists in air conditioning and
            refrigeration services for commercial businesses in and around the
            London area.. We can help your business operate in a more efficient
            and cost-effective way.
            {' '}
            <br />
            {' '}
            <br />
          </p>
        </div>
        <hr />
        <p>
          Call
          {' '}
          <span className="brand-color">07473319304</span>
          {' '}
          today to talk to us about your
          refrigeration & air conditioning requirements.
        </p>
      </div>
      <div className="air-cond-sys-contact-info flex">
        <p>Commercial Refrigeration Installation Speciaist</p>
        <h1>07473319304</h1>
        <p>
          <span className="brand-color">
            <Link to="/contact-us" className="brand-color commercial-email">
              email us
            </Link>
          </span>
          {' '}
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

export default RefergrationSectTwo;
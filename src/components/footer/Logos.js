import IMG1 from '../../assets/Foster-Refrigeration.png';
import IMG2 from '../../assets/Daikin-Air-Conditioning.png';
import IMG3 from '../../assets/Fujitsu-Air-Conditioning.png';
import IMG4 from '../../assets/Hoshizaki-Ice-Machine-1.png';
import IMG5 from '../../assets/Mitsubishi-Electric-Air-Conditioning.png';
import IMG7 from '../../assets/Williams-Refrigeration.png';
import IMG8 from '../../assets/True-Refrigeration-1.png';

const Logos = () => (
  <div className="swiper flex">
    <div className="swiper-slide">
      <img src={IMG1} alt="swiper image1" />
      <img src={IMG2} alt="swiper image2" />
      <img src={IMG3} alt="swiper image3" />
      <img src={IMG4} alt="swiper image4" />
    </div>
    <div className="swiper-slide">
      <img src={IMG5} alt="swiper image5" />
      <img src={IMG7} alt="swiper image6" />
      <img src={IMG8} alt="swiper image7" />
      <img src={IMG1} alt="swiper image1" />
    </div>
  </div>
);

export default Logos;

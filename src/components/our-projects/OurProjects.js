import IMG1 from '../../assets/commercial/1.png';
import IMG2 from '../../assets/commercial/2.jpg';
import IMG3 from '../../assets/commercial/3.jpg';
import IMG4 from '../../assets/commercial/4.avif';
import IMG5 from '../../assets/commercial/5.png';
import IMG6 from '../../assets/commercial/7.jpg';
import IMG7 from '../../assets/commercial/6.jpg';
import IMG8 from '../../assets/commercial/8.jpg';
import './ourprojects.css';

const OurProjects = () => {
    return (
        <>
        <div className="ourprojects-container flex">
          <h1>JustCold Refrigeration Projects</h1>
          <p>
            Refrigeration case studies in the Eroupe area.
            Examples of recent Refrigeration projects.
            Learn more about the type of projects we cover
          </p>
        </div>
        <div className="air-cond-projects">
          <img src={IMG1} alt="IMG1" />
          <img src={IMG2} alt="IMG2" />
          <img src={IMG3} alt="IMG3" />
          <img src={IMG4} alt="IMG4" />
          <img src={IMG5} alt="IMG5" />
          <img src={IMG6} alt="IMG6" />
          <img src={IMG7} alt="IMG7" />
          <img src={IMG8} alt="IMG8" />
        </div>
      </>
    
    )
}

export default OurProjects;
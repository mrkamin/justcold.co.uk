import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Bloger from "./components/blog/Bloger";
import CommercialRefergeration from "./components/commercial-refergeration/CommercialRefergeation";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import RepairMaintenance from "./components/repair-maintenance/RepairMaintenance";
import Testimonials from "./components/testimonials/Testimonials";
import OurProjects from "./components/our-projects/OurProjects";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="about-us" element={<About />} />
          <Route path="blog" element={<Bloger />} />
          <Route path="commercial-rerergeration" element={<CommercialRefergeration />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="repair-maintenance" element={<RepairMaintenance />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="our-projects" element={<OurProjects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

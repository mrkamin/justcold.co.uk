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

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="bloger" element={<Bloger />} />
          <Route path="commercial-rerergeration" element={<CommercialRefergeration />} />
          <Route path="contact" element={<Contact />} />
          <Route path="footer" element={<Footer />} />
          <Route path="header" element={<Header />} />
          <Route path="repair-maintenance" element={<RepairMaintenance />} />
          <Route path="testimonials" element={<Testimonials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

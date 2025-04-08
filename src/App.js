import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Legal from "./pages/Legal";
import Contact from "./pages/Contact";
import HeaderWithNav from "./components/HeaderWithNav";
import DonateButton from "./components/DonateButton";

function App() {
  return (
    <Router>
      <div className="main-content">
        <HeaderWithNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <DonateButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

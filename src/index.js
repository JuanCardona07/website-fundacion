import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Legal from "./pages/Legal/Legal";
import Contact from "./pages/Contact/Contact";
import AppLayout from "./components/Layouts/AppLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<App />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

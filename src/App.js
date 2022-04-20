import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Menu from "./views/Menu";
import About from "./views/About";
import Contact from "./views/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* use React library react-scroll-to-top to create scroll to top button */}
        <ScrollToTop smooth color="black" width="25" height="25"/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

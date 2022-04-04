import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Menu from "./views/Menu";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/about">
            <About/>
          </Route> */}
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/contact">
            <Contact/>
          </Route> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

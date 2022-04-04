import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Menu from './views/Menu'
import About from './views/About'
import Contact from './views/Contact'


function App() {
  return (
    <Router>
      <div>
        {/* <Navbar/> */}
        <Routes>
          {/* <Route exact path="/">
            <Home/>
          </Route> */}
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Menu from './views/Menu'


function App() {
  return (
    <Router>
      <div>
        {/* <Navbar/> */}
        <Routes>
          {/* <Route exact path="/">
            <Home/>
          </Route> */}
          {/* <Route path="/about">
            <About/>
          </Route> */}
          <Route path="/menu" element={<Menu/>}/>
          {/* <Route path="/contact">
            <Contact/>
          </Route> */}
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;

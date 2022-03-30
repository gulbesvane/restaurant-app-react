import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Menu from './views/Menu'

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar/> */}
        <Switch>
          {/* <Route exact path="/">
            <Home/>
          </Route> */}
          {/* <Route path="/about">
            <About/>
          </Route> */}
          <Route path="/menu">
            <Menu/>
          </Route>
          {/* <Route path="/contact">
            <Contact/>
          </Route> */}
        </Switch>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;

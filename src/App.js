import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Report from "./pages/Report";
import Dashboard from "./pages/Dashboard";
import NavBar from '../src/components/Navbar'



function App() {
  return (
    <div>
        <NavBar />
        <Router>
          <Switch>
            <Route 
              exact path="/Embedded-Report" 
              component={Report} 
            />       
            <Route 
              exact path="/View-Report" 
              component={Dashboard} 
            /> 
          </Switch>
        </Router>

    </div>
  );
}

export default App;
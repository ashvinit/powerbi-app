import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Report from "./pages/Report";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route 
              exact path="/Report" 
              component={Report} 
            />       
            <Route 
              exact path="/" 
              component={Dashboard} 
            /> 
          </Switch>
        </Router>

    </div>
  );
}

export default App;
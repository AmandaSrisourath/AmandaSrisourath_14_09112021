import '../App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CreateEmployee from "../employee/components/CreateEmployee";
import CurrentEmployees from "../employee/components/CurrentEmployees";

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <CreateEmployee />
              </Route>

              <Route path="/CurrentEmployees">
                  <CurrentEmployees />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
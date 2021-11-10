import '../App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CreateEmployee from "../employee/components/CreateEmployee";
import EmployeeList from "../employee/components/EmployeeList";

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <CreateEmployee />
              </Route>

              <Route path="/EmployeeList">
                  <EmployeeList />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
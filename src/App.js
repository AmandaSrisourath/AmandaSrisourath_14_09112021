import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CreateEmployee from "./pages/createEmployee/components/CreateEmployee";
import EmployeeList from "./pages/employeeList/components/EmployeeList";

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
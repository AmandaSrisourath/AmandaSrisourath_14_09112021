import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import loadable from '@loadable/component'

const CreateEmployee = loadable(() => import("./pages/createEmployee/components/CreateEmployee"))
const EmployeeList = loadable(() => import("./pages/employeeList/components/EmployeeList"))

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
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
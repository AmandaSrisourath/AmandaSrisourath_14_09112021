import React from "react";
import { Link } from "react-router-dom";
import EmployeeTable from "./EmployeeTable";

function EmployeeList() {
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>

            <EmployeeTable />

            <Link to={"/"}>
                <p>Home</p>
            </Link>
        </div>
    )
}

export default EmployeeList;
import React from "react";
import { Link } from "react-router-dom";
import EmployeeDataTable from "./EmployeeDataTable";

function EmployeeList() {
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>

            <EmployeeDataTable />

            <Link to={"/"}>
                <p>Home</p>
            </Link>
        </div>
    )
}

export default EmployeeList;
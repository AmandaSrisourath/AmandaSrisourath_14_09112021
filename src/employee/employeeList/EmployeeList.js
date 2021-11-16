import React from "react";
import { Link } from "react-router-dom";
import DataTables from "./DataTables";

function EmployeeList() {
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>

            <DataTables />

            <Link to={"/"}>
                <p>Home</p>
            </Link>
        </div>
    )
}

export default EmployeeList;
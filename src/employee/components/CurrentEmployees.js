import React from "react";
import {Link} from "react-router-dom";

function CurrentEmployees() {
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>

            {/*<div>*/}
            {/*    $(function() {*/}
            {/*        const employees = JSON.parse(localStorage.getItem('employees'));*/}

            {/*        $('#employee-table').DataTable({*/}
            {/*            data: employees,*/}
            {/*            columns: [*/}
            {/*                { title: 'First Name', data: 'firstName' },*/}
            {/*                { title: 'Last Name', data: 'lastName' },*/}
            {/*                { title: 'Start Date', data: 'startDate' },*/}
            {/*                { title: 'Department', data: 'department' },*/}
            {/*                { title: 'Date of Birth', data: 'dateOfBirth' },*/}
            {/*                { title: 'Street', data: 'street' },*/}
            {/*                { title: 'City', data: 'city' },*/}
            {/*                { title: 'State', data: 'state' },*/}
            {/*                { title: 'Zip Code', data: 'zipCode' },*/}
            {/*            ]*/}
            {/*        });*/}
            {/*    });*/}
            {/*</div>*/}

            <Link to={"/"}>
                <p>Home</p>
            </Link>
        </div>
    )
}

export default CurrentEmployees;
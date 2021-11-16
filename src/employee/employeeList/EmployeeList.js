import React from "react";
import { Link } from "react-router-dom";
import ReactTable from "react-table-6";

function EmployeeList() {
    const data = [{
        firstName: 'First Name',
        lastName: 'Last Name',
        startDate: 'Start Date',
    }]

    const columns = [{
        Header: 'First Name',
        accessor: 'firstName' // String-based value accessors!
    }, {
        Header: 'Last Name',
        accessor: 'lastName',
        // Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        columns: [{
            Header: 'Color',
            accessor: 'favorites.color'
        }, {
            Header: 'Food',
            accessor: 'favorites.food'
        }, {
            Header: 'Actor',
            accessor: 'favorites.actor'
        }]
    }, {
    //     id: 'friendName', // Required because our accessor is not a string
    //     Header: 'Friend Name',
    //     accessor: d => d.friend.name // Custom value accessors!
    // }, {
    //     Header: props => <span>Friend Age</span>, // Custom header components!
    //     accessor: 'friend.age'
    }]

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            {/*<table id="employee-table" className="display"></table>*/}

            <ReactTable
                data={data}
                columns={columns}
                defaultPageSize={3}
            />

            {/*<div>*/}
            {/*    function() {*/}
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
            {/*    };*/}
            {/*</div>*/}

            <Link to={"/"}>
                <p>Home</p>
            </Link>
        </div>
    )
}

export default EmployeeList;
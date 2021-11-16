import React, { useState } from "react";
import { Link } from "react-router-dom";
import Date from "./Date";
import StateDropdown from "./StateDropdown";
import DepartmentDropdown from "./DepartmentDropdown";
import CreateEmployeeModal from "./Modal";

function CreateEmployee() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>

            <div className="container">
                <Link to={"/EmployeeList"}>
                    <p>View Current Employees</p>
                </Link>

                <h2>Create Employee</h2>

                <form action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name"/>

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name"/>

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <Date />

                    <label htmlFor="start-date">Start Date</label>
                    <Date />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text"/>

                        <label htmlFor="city">City</label>
                        <input id="city" type="text"/>

                        <label htmlFor="state">State</label>
                        <StateDropdown />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number"/>
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <DepartmentDropdown />
                </form>

                <button className="save-button" onClick={openModal}>Save</button>
            </div>

            <CreateEmployeeModal isOpen={modalIsOpen} onRequestClose={closeModal}/>
        </div>
    )
}

export default CreateEmployee;
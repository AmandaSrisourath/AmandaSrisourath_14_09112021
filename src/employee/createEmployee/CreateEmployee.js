import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";
import Modal from "react-modal";
import Select from 'react-select';
import StateDropdown from "./StateDropdown";
import DepartmentDropdown from "./DepartmentDropdown";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function CreateEmployee() {
    const [value, onChange] = useState('');
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
                    <DatePicker onChange={onChange} value={value}/>

                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker onChange={onChange} value={value}/>

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

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                {/*<button onClick={closeModal}>X</button>*/}
                <h2 className="modal">Employee Created!</h2>
            </Modal>
        </div>
    )
}

export default CreateEmployee;
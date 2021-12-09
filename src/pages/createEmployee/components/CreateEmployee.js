import React, { useState } from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { addEmployee } from "../employeeSlice";
import { format } from "date-fns";
import Header from "../../Header";
import DatePicker from "react-date-picker";
import Dropdown from "./Dropdown";
import CreateEmployeeModal from "./Modal";

function CreateEmployee() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [startDate, setStartDate] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] =useState('');
    const [department, setDepartment] = useState('');
    const dispatch = useDispatch();

    function openModal(e) {
        e.preventDefault();
        setIsOpen(true);
        const date = new Date(dateOfBirth);
        const formattedDate = format(date, "dd/MM/yyyy");
        const dateStarted = new Date(startDate);
        const formattedDateStarted = format(dateStarted, "dd/MM/yyyy");
        const newEmployee = { id, firstName, lastName, dateOfBirth: formattedDate, startDate: formattedDateStarted, street, city, state, zipCode, department };
        dispatch(addEmployee(newEmployee));
        setId(id);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const onEditFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const onEditLastName = (e) => {
        setLastName(e.target.value);
    }

    const onEditDateOfBirth = (value) => {
        setDateOfBirth(value);
    }

    const onEditStartDate = (value) => {
        setStartDate(value);
    }

    const onEditStreet = (e) => {
        setStreet(e.target.value);
    }

    const onEditCity = (e) => {
        setCity(e.target.value);
    }

    const onEditState = (value) => {
        setState(value);
    }

    const onEditZipCode = (e) => {
        setZipCode(e.target.value);
    }

    const onEditDepartment = (value) => {
        setDepartment(value);
    }

    const stateOptions = [
        { value: 'Alabama', label: 'Alabama' },
        { value: 'California', label: 'California' },
        { value: 'Florida', label: 'Florida' },
        { value: 'Indiana', label: 'Indiana' },
        { value: 'Massachusetts', label: 'Massachusetts' },
    ];

    const departmentOptions = [
        { value: 'Sales', label: 'Sales' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Legal', label: 'Legal' },
    ];

    return (
        <div>
            <Header/>

            <Container>
                <Form>
                    <Subtitle>Create Employee</Subtitle>

                    <Field>
                        <div>
                            <Label htmlFor="first-name">First Name</Label>
                            <InputName type="text" id="first-name" onChange={onEditFirstName} value={firstName}/>
                        </div>

                        <div>
                            <Label htmlFor="last-name">Last Name</Label>
                            <InputName type="text" id="last-name" onChange={onEditLastName} value={lastName}/>
                        </div>
                    </Field>

                    <Field>
                        <div>
                            <Label htmlFor="date-of-birth">Date of Birth</Label>
                            <DatePicker onChange={onEditDateOfBirth} value={dateOfBirth}/>
                        </div>

                        <div>
                            <Label htmlFor="start-date">Start Date</Label>
                            <DatePicker onChange={onEditStartDate} value={startDate}/>
                        </div>
                    </Field>

                    <Fieldset>
                        <legend>Address</legend>

                        <div>
                            <Label htmlFor="street">Street</Label>
                            <Input id="street" type="text" onChange={onEditStreet} value={street}/>
                        </div>

                        <div>
                            <Label htmlFor="city">City</Label>
                            <Input id="city" type="text" onChange={onEditCity} value={city}/>
                        </div>

                        <Label htmlFor="state">State</Label>
                        <Dropdown options={stateOptions} onChange={onEditState} value={state}/>

                        <div>
                            <Label htmlFor="zip-code">Zip Code</Label>
                            <Input id="zip-code" type="number" onChange={onEditZipCode} value={zipCode}/>
                        </div>
                    </Fieldset>

                    <Label htmlFor="department">Department</Label>
                    <Dropdown options={departmentOptions} onChange={onEditDepartment} value={department}/>

                    <ContainerBtn>
                        <SaveBtn className="save-button" onClick={openModal}>Save</SaveBtn>
                    </ContainerBtn>
                </Form>
            </Container>

            <CreateEmployeeModal isOpen={modalIsOpen} onRequestClose={closeModal}/>
        </div>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
  box-shadow: 5px 10px 18px #888888;
  background-color: white;
  padding: 8px 24px 24px;
  border-radius: 4px;
  margin-top: 32px;
  margin-bottom: 32px;
  width: 322px;
`

const Subtitle = styled.h2`
  text-align: center;
  margin: 16px 0;
`

const Field = styled.div`
  display: flex;
  justify-content: space-between;
`

const Label = styled.label`
  display: block;
  margin-top: 1rem;
  margin-bottom: 8px;
`

const Input = styled.input`
  font-size: 16px;
  background-color: #f1f2fa;
  border-radius: 4px;
  border: none;
  height: 40px;
  width: 263px;
  padding: 0 16px;
  outline: none;
`

const InputName = styled.input`
  font-size: 16px;
  background-color: #f1f2fa;
  border-radius: 4px;
  border: none;
  height: 40px;
  width: 122.07px;
  padding: 0 16px;
  outline: none;
`

const Fieldset = styled.fieldset`
  margin-top: 16px;
  border: 1px solid black;
  border-radius: 5px;
`

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`

const SaveBtn = styled.button`
  width: 100%;
  margin-top: 24px;
  padding: 16px;
  border-radius: 4px;
  border: none;
  background-color: #c5cefb;
  font-weight: bold;
  cursor: pointer;
`

export default CreateEmployee;
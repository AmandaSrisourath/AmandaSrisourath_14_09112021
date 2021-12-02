import React, { useState } from "react";
import Date from "./Date";
import CreateEmployeeModal from "./Modal";
import Dropdown from "./Dropdown";
import styled from "@emotion/styled";
import Header from "../../Header";

function CreateEmployee() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(e) {
        e.preventDefault();
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
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
                            <Input type="text" id="first-name"/>
                        </div>

                        <div>
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input type="text" id="last-name"/>
                        </div>
                    </Field>

                    <Field>
                        <div>
                            <Label htmlFor="date-of-birth">Date of Birth</Label>
                            <Date />
                        </div>

                        <div>
                            <Label htmlFor="start-date">Start Date</Label>
                            <Date />
                        </div>
                    </Field>

                    <Fieldset>
                        <legend>Address</legend>

                        <div>
                            <Label htmlFor="street">Street</Label>
                            <Input id="street" type="text"/>
                        </div>

                        <div>
                            <Label htmlFor="city">City</Label>
                            <Input id="city" type="text"/>
                        </div>

                        <Label htmlFor="state">State</Label>
                        <Dropdown options={stateOptions}/>

                        <div>
                            <Label htmlFor="zip-code">Zip Code</Label>
                            <Input id="zip-code" type="number"/>
                        </div>
                    </Fieldset>

                    <Label htmlFor="department">Department</Label>
                    <Dropdown options={departmentOptions}/>

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
  padding: 8px 40px 32px;
  border-radius: 4px;
  margin-top: 32px;
  margin-bottom: 32px;
  width: 325px;
`

const Subtitle = styled.h2`
    text-align: center;
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
  background-color: #f1f2fa;
  border-radius: 4px;
  border: none;
  height: 40px;
  width: 100%;
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
import React from "react";
import loadable from '@loadable/component'
import styled from "@emotion/styled";
import Header from "../../Header";

const CreateEmployeeForm = loadable(() => import("./CreateEmployeeForm"))

function CreateEmployee() {
    return (
        <div>
            <Header/>
            <Container>
                <Form>
                    <Subtitle>Create Employee</Subtitle>
                    <CreateEmployeeForm />
                </Form>
            </Container>
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

export default CreateEmployee;
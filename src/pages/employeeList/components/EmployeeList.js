import React from "react";
import loadable from '@loadable/component'
import styled from "@emotion/styled";
import Header from "../../Header";

const EmployeeTable = loadable(() => import("./EmployeeTable"));

function EmployeeList() {
    return (
        <div>
            <Header/>
            <Container>
                <Table>
                    <Subtitle>Current Employees</Subtitle>
                    <EmployeeTable />
                </Table>
            </Container>
        </div>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Subtitle = styled.h2`
  text-align: center;
  margin: 16px 0;
`

const Table = styled.div`
  box-shadow: 5px 10px 18px #888888;
  background-color: white;
  padding: 8px 16px 24px;
  border-radius: 4px;
  margin-top: 32px;
  margin-bottom: 32px;
  width: 90%;
  max-width: 1280px;
`

export default EmployeeList;
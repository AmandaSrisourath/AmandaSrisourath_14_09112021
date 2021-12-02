import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";

function Header() {
    const location = useLocation();

    return (
        <Nav>
            <div>
                <Title>HRnet</Title>
            </div>
            {
                location.pathname === "/" ? (
                    <Link to={"/EmployeeList"}>
                        <Icon>
                            <FontAwesomeIcon icon={faUsers}/>
                            {/*<p>View Current Employees</p>*/}
                        </Icon>
                    </Link>
                ) : (
                    <Link to={"/"}>
                        <Icon>
                            <FontAwesomeIcon icon={faHome}/>
                            {/*<p>Home</p>*/}
                        </Icon>
                    </Link>
                )
            }
        </Nav>
    )
}

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid white;
  background-color: #c5cefb;
`

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  color: black;
  font-size: 24px;
`

export default Header;
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
                    <CustomLink to={"/EmployeeList"}>
                        <Icon>
                            <FontAwesomeIcon icon={faUsers}/>
                            <LinkName>Employees</LinkName>
                        </Icon>
                    </CustomLink>
                ) : (
                    <CustomLink to={"/"}>
                        <Icon>
                            <FontAwesomeIcon icon={faHome}/>
                            <LinkName>Home</LinkName>
                        </Icon>
                    </CustomLink>
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

const LinkName = styled.span`
  color: black;
  font-size: 16px;
  padding-left: 8px;
  text-transform: uppercase;
  font-weight: 600;
`

const CustomLink = styled(Link)`
  text-decoration: none;
`

export default Header;
import React, { useState } from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "@emotion/styled";

function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({ label: 'Options' });
    const { options } = props;

    const switchIsOpen = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    const handleClick = (e) => {
        const option = options.find(opt => opt.value === e.target.getAttribute("data-value"));
        setSelectedOption(option);
    }

    return (
        <div>
            <Button type="text" name="select" onClick={switchIsOpen}>
                {selectedOption.label}
                { isOpen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} /> }
            </Button>

            {
                isOpen &&
                (
                    <Select onClick={handleClick}>
                        {options.map((option) => (
                            <Paragraph key={option.label} data-value={option.value} onClick={switchIsOpen}>
                                {option.label}
                            </Paragraph>
                        ))}
                    </Select>
                )
            }
        </div>
    );
}

const Button = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background: #f1f2fa;
  border: none;
  width: 100%;
  height: 50px;
  cursor: pointer;
`

const Select = styled.div`
  border-radius: 4px;
  box-shadow: 5px 10px 18px #888888;
  width: 100%;
  cursor: pointer;
  
  //position: absolute;
  //min-width: 295px;
  //max-width: 325px;
`

const Paragraph = styled.p`
  padding: 16px;
  margin: 0;

  &:hover {
    background: #f1f2fa;
    border-radius: 4px;
  }
`

export default Dropdown;
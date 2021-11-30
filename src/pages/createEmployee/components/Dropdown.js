import React, { useState } from "react";
import styled from "@emotion/styled";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({ label: 'Options' });
    const { options } = props;

    const switchIsOpen = () => {
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
                            <Paragraph key={option.label} data-value={option.value}>
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
  border: none;
  border-radius: 5px;
  background: #FFEAAD;
  width: 100%;
  height: 50px;
  cursor: pointer;
`;

const Select = styled.div`
  border-radius: 5px;
  box-shadow: 5px 10px 18px #888888;
  width: 100%;
  cursor: pointer;
`;

const Paragraph = styled.p`
  padding: 16px;
  margin: 0;

  &:hover {
    background: #FFEAAD;
    border-radius: 5px;
  }
`;

export default Dropdown;
import React, { useState } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Dropdown() {
    // const [selectedOption, setSelectedOption] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const options = [
        { value: 'Alabama', label: 'Alabama' },
        { value: 'California', label: 'California' },
        { value: 'Florida', label: 'Florida' },
        { value: 'Indiana', label: 'Indiana' },
        { value: 'Massachusetts', label: 'Massachusetts' },
    ];

    const switchIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Button type="text" name="select" onClick={switchIsOpen}>
                <label>
                    <p>Options</p>
                </label>
                { isOpen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} /> }
            </Button>

            {
                isOpen && (
                    // <div
                    //     defaultValue={selectedOption}
                    //     onChange={setSelectedOption}
                    //     options={options}
                    // >
                    // </div>

                    <Select>
                        {options.map((option) => (
                            <Paragraph>{option.label}</Paragraph>
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
  width: 153px;
  height: 50px;
  cursor: pointer;
`;

const Select = styled.div`
  border-radius: 5px;
  box-shadow: 5px 10px 18px #888888;
  width: 153px;
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
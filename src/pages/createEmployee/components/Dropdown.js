import React, {useEffect, useRef, useState} from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Dropdown(props) {
    const ref = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({ label: 'Options' });
    const { options, onChange, value } = props;

    const switchIsOpen = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    const handleClick = (e) => {
        const option = options.find(opt => opt.value === e.target.getAttribute("data-value"));
        setSelectedOption(option);
        onChange(option.value);
    }

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        }
    }, [isOpen]);

    return (
        <div ref={ref}>
            <Button type="text" name="select" onClick={switchIsOpen}>
                {selectedOption.label}
                { isOpen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} /> }
            </Button>

            {
                isOpen &&
                (
                    <Select onClick={handleClick} value={value} width={ref.current && ref.current.offsetWidth}>
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
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background: #f1f2fa;
  border: none;
  width: 100%;
  height: 40px;
  cursor: pointer;
`

const Select = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 4px;
  box-shadow: 5px 10px 18px #888888;
  width: ${props => props.width ? `${props.width}px` : '300px'};
  height: 160px;
  overflow: auto;
  cursor: pointer;
`

const Paragraph = styled.p`
  padding: 11px 16px;
  margin: 0;

  &:hover {
    background: #f1f2fa;
    border-radius: 4px;
  }
`

export default Dropdown;
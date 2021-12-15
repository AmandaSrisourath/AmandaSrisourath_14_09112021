import React from "react";
import Modal from "react-modal";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function ModalCreateEmployee(props) {
    const { isOpen, onRequestClose, onClick } = props;

    return (
        <Modal
            ariaHideApp={false}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
        >
            <Button onClick={onClick}>X</Button>
            <h2 className="modal">Employee Created!</h2>
        </Modal>
    )
}

ModalCreateEmployee.propTypes = {
    isOpen: PropTypes.bool,
    onRequestClose: PropTypes.func,
    onClick: PropTypes.func
}

const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background-color: #c5cefb;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`

export default ModalCreateEmployee;
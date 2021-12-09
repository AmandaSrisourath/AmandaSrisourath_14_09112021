import React from "react";
import Modal from "react-modal";

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

function CreateEmployeeModal(props) {
    const { isOpen, onRequestClose } = props;

    return (
        <Modal
            ariaHideApp={false}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
        >
            {/*<button onClick={closeModal}>X</button>*/}
            <h2 className="modal">Employee Created!</h2>
        </Modal>
    )
}

export default CreateEmployeeModal;
import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
    <div>
    <Modal
        isOpen={!!props.selectedOption}
        ariaHideApp={false}
        contentLabel="Selected Option"
        closeTimeoutMS = {200}
        className="modal"
    >
    <h3 className="modal__title">Selected Option:</h3>
    <p className="modal__body">{props.theOption}</p>
    <button className="button" onClick={props.back}>Okay!</button>
    </Modal>
    </div>
);

export default OptionModal;
import React from "react";
import { Modal } from "react-bootstrap";

const PopUpModal = ({ setShowModal, header, bodyHeader, text }) => {
  return (
    <Modal
      show
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title className="text-danger" id="contained-modal-title-vcenter">
          {header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{bodyHeader}</h4>
        <p>{text}</p>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-lg text-danger"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopUpModal;

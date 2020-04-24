import React from "react";
import { Modal } from "react-bootstrap";

function CenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.message}</p>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={() => props.onHide()}
          className="btn btn-sm btn-danger"
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default CenteredModal;

import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalComponent(props) {
  return (
    <Modal show={props.showModal} onHide={props.handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title>Questions to consider</Modal.Title>
      </Modal.Header>
      <Modal.Body>Should we include all team members working on the project or a smaller subset?
        <br /><br />Have we included a diverse set of viewpoints in our decision-making team?
        <br /><br />Is there any sensitive information that may influence team selection?</Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default ModalComponent;

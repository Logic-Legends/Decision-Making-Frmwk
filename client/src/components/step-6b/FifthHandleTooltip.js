import Modal from "react-bootstrap/Modal";

function FifthHandleTooltip(props) {
	return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>You have enough information to say yes or no to each option.</p>
          </Modal.Body>
        </Modal>
      );
}
export default FifthHandleTooltip;
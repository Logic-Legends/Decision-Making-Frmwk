import Modal from "react-bootstrap/Modal";

function FourthHandleTooltip(props) {
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
            <p>You have enough information to...</p>
          </Modal.Body>
        </Modal>
      );
}
export default FourthHandleTooltip;
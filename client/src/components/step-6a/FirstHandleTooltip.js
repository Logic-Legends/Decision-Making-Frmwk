import Modal from "react-bootstrap/Modal";

function FirstHandleTooltip(props) {
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
            <p>The type of information you have will help determine the ideal voting method.</p>
          </Modal.Body>
        </Modal>
      );
}
export default FirstHandleTooltip;
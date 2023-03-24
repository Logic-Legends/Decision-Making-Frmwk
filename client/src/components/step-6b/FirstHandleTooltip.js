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
          <p>Consider how much evidence, facts and data related to the decision you have gathered.</p>
          </Modal.Body>
        </Modal>
      );
}
export default FirstHandleTooltip;
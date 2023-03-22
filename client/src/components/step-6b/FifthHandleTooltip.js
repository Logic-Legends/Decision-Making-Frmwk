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
            <p>This could be information you already have or still need to get. The importance of the decision and team capacity determines how much time is needed to gather information.</p>
            <strong><p>Another consideration: Should decision-making be anonymous?</p></strong>
            <p>Should the decision makers vote anonymously? Or is open discussion important for coming to a final decision?</p>
          </Modal.Body>
        </Modal>
      );
}
export default FifthHandleTooltip;
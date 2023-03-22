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
            <p>Relational information that is not relevant to an objective, external metric.</p>

            <p><strong>Example:</strong> Comparing different inter- ventions to each other and choosing which one to pursue based on how easy they seem to implement.</p>
          </Modal.Body>
        </Modal>
      );
}
export default FourthHandleTooltip;
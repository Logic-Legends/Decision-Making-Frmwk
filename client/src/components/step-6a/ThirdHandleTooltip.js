import Modal from "react-bootstrap/Modal";

function ThirdHandleTooltip(props) {
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
            <p>Information that lets you assign a value to an objective, external metric.</p>
            <p><strong>Example:</strong> Finding out how many animals each intervention saves per year and choosing which one to pursue based on this information.</p>
          </Modal.Body>
        </Modal>
      );
}
export default ThirdHandleTooltip;
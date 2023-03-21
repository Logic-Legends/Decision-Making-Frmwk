import Modal from "react-bootstrap/Modal";

function HandleTooltip(props) {
	return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h6>Your goal needs to be SMART:</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Specific</p>
            <p>Measurable</p>
            <p>Achievable</p>
            <p>Realistic</p>
            <p>Time-based</p>
          </Modal.Body>
        </Modal>
      );
}
export default HandleTooltip;
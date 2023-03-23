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
            <p>You have enough information to rank or assign values to all options</p>
            </Modal.Body>
        </Modal>
      );
}
export default ThirdHandleTooltip;
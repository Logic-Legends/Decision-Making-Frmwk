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
            <p>Information that lets you assign numerical values to the factors being considered.</p>
            </Modal.Body>
        </Modal>
      );
}
export default ThirdHandleTooltip;
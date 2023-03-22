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
            <p>Information that lets you compare factors being considered in relation to another another.</p>
          </Modal.Body>
        </Modal>
      );
}
export default FourthHandleTooltip;
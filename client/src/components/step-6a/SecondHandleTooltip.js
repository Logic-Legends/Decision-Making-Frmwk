import Modal from "react-bootstrap/Modal";

function SecondHandleTooltip(props) {
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
            <p>The type of information you need will help determine the ideal voting method. There are two types of information that can help you decide: explicit values (cardinal information) and relative values (ordinal information).</p>
          </Modal.Body>
        </Modal>
      );
}
export default SecondHandleTooltip;
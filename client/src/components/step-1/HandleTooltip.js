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
            Define the goal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p> Defining the goal will help you determine what kind of information you
  need to make a decision.</p>
          </Modal.Body>
        </Modal>
      );
}
export default HandleTooltip;
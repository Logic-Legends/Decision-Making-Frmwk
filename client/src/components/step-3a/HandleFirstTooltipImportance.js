import Modal from "react-bootstrap/Modal";

function HandleFirstTooltipClick(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					<strong>Importance</strong> = the significance and/or value of the
					decision at hand.
				</p>
			</Modal.Body>
		</Modal>
	);
}
export default HandleFirstTooltipClick;

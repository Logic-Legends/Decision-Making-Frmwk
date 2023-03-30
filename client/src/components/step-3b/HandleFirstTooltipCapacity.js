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
					<strong>Capacity</strong> = how much time decision-makers can allocate
					to the decision-making process.
				</p>
			</Modal.Body>
		</Modal>
	);
}
export default HandleFirstTooltipClick;

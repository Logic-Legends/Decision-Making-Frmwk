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
				<Modal.Title
					id="contained-modal-title-vcenter"
					
				>
					Time and Resource Allocation
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					Spending more time on decisions creates an opportunity to gather and
					use more information, leading to higher specificity and detail in the
					voting method.
				</p>
			</Modal.Body>
		</Modal>
	);

}
export default HandleTooltip;
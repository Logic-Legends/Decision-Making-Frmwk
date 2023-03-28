import Modal from "react-bootstrap/Modal";

function HandleSecondTooltipClick(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					<p>
						<strong>Guiding questions:</strong>
					</p>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					Will it affect how we operate as an organization or as a team within
					the organization? Will it affect how we interact with other
					organizations?
				</p>

				<p></p>
			</Modal.Body>
		</Modal>
	);
}
export default HandleSecondTooltipClick;

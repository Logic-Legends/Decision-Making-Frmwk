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
					Will anyone be taking leave? Are there any concurrent projects that
					could limit capacity? Can decision-makers commit to any meetings, and
					if so, how many? Is there a deadline for this decision?
				</p>
			</Modal.Body>
		</Modal>
	);
}
export default HandleSecondTooltipClick;

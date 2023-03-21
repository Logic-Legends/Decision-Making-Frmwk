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
					<h6>Guiding questions:</h6>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					Will anyone be taking leave? Are there any concurrent projects that
					could limit capacity? Can decision-makers commit to any meetings, and
					if so, how many? Is there a deadline for this decision?
				</p>
				<p>
					<strong>Example of low capacity:</strong> The deadline for making the
					decision is very soon, and all of the people who need to be involved
					have other outstanding projects that are time-consuming and cannot be
					delayed. It would be hard for the team to find time to learn relevant
					information and attend decision-making meetings.
				</p>
				<p>
					<strong>Example of high capacity:</strong> The deadline for making the
					decision is further out, and all of the people who need to be involved
					in the decision have open time in their schedules. It would be easy
					for the team to find time to learn relevant information and attend
					decision-making meetings.
				</p>
			</Modal.Body>
		</Modal>
	);
}
export default HandleSecondTooltipClick;

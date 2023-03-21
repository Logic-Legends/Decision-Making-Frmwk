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
					<h6>
						Guiding questions:
					</h6>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					<br />
					Will it affect how we operate as an organization or as a team within
					the organization? Will it affect how we interact with other
					organizations?
				</p>
				<p>
					<strong>Example of low importance:</strong> The decision will not
					likely affect the broader organization or how we interact with other
					organizations. It will probably affect a small project or small team
					within the organization.
				</p>
				<p>
					<strong>Example of high importance:</strong> The decision will likely
					affect the broader organization or how we interact with other
					organizations. It will probably affect a large team within the
					organization or how the organization operates at a high level.
				</p>
			</Modal.Body>
		</Modal>
	);
}
export default HandleSecondTooltipClick;

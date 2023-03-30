import Modal from "react-bootstrap/Modal";

function HandleTooltipClick(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Questions to consider:
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<ul className="tooltip-list">
					<li>
						Would it be better to do a first pass at the decision with a simple
						voting method (e.g., yes/no to each option) and then do a second
						pass with a more complex voting method (e.g., scale of 1-5 for each
						option)?
					</li>
					<li>
						Would it be good for decision-makers to share their views before
						making a final decision?
					</li>
					<li>
						Is this an ongoing decision that needs to be updated on a regular
						schedule?
					</li>
				</ul>
				<p>
					If you answered YES to any of these questions, consider categorized it
					as iterative.
				</p>
			</Modal.Body>
		</Modal>
	);
}
export default HandleTooltipClick;

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
					What decision are we trying to make?
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					<strong>SMART</strong> Goals
				</p>
				<p>
					<strong>S</strong>pecific
				</p>
				<p>
					<strong>M</strong>easurable
				</p>
				<p>
					<strong>A</strong>chievable
				</p>
				<p>
					<strong>R</strong>ealistic
				</p>
				<p>
					<strong>T</strong>ime-based
				</p>
			</Modal.Body>
		</Modal>
	);
}
export default HandleTooltip;
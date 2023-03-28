import React, { useState } from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";


function SignUp() {
	const [showModal, setShowModal] = useState(false);
	const [email, setEmail] = useState("");

	const handleSubmit =async (e) => {
		e.preventDefault();
		fetch("/api/submit-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setEmail("");
				setShowModal(false);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div>
			<button onClick={() => setShowModal(true)} className="inner">Sign-up to newsletter</button>
			<Modal
				isOpen={showModal}
				onRequestClose={() => setShowModal(false)}
				style={{
					content: {
						width: "fit-content",
						margin: "auto",
						height: "fit-content",
						color: "#000",
					},
				}}
			>
				<div className="signup-modal-header">
					<h2>Sign Up</h2>
					<button onClick={() => setShowModal(false)}>
						<FaTimes />
					</button>
				</div>
				<form onSubmit={handleSubmit}>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Please enter your email"
						required
					/>
					<button type="submit">Submit</button>
				</form>
			</Modal>
		</div>
	);
}

export default SignUp;

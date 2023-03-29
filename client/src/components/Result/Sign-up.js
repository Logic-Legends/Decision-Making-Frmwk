import React, { useState } from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";


function SignUp() {
	const [showModal, setShowModal] = useState(false);
	const [email, setEmail] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSubmit =async (e) => {
		e.preventDefault();
		if (email.trim() === "") {
			setErrorMessage("Please enter your email");
			setIsModalOpen(true);
			return;
		}

		const emailRegex = /^\S+@\S+\.\S+$/;
		if (!emailRegex.test(email)) {
			setErrorMessage("Invalid email format");
			setIsModalOpen(true);
			return;
		}
		const response= await fetch("/api/submit-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
			}),
		});
		if(response.ok){
			setEmail("");
			setShowModal(false);
			setErrorMessage("");
		}else{
			setIsModalOpen(true);
			const errorData=await response.json();
			setErrorMessage(errorData.message);
		}

	};

	return (
		<div>
			<button onClick={() => setShowModal(true)} className="inner">
				Sign-up
			</button>
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
					<h2>Sign Up to Newsletter</h2>
					<button onClick={() => setShowModal(false)}>
						<FaTimes />
					</button>
				</div>
				{errorMessage &&
					isModalOpen &&(
						<div className="modal">
							<div className="modal-display">
								<p>{errorMessage}</p>
								<button
									onClick={() => setIsModalOpen(false)}
									className="modal-btn"
								>
									OK
								</button>
							</div>
						</div>
					)}
				<form onSubmit={handleSubmit}>
					<input
						id="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Please enter your email"

					/>
					<button type="submit" className="inner" >
						Submit
					</button>
				</form>
			</Modal>
		</div>
	);
}

export default SignUp;

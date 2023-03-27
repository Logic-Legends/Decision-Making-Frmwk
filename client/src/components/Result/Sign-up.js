import React, { useState } from "react";

const Signup = () => {
	const [showModal, setShowModal] = useState(false);
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// connecting to the server from here
		console.log(email);
		setShowModal(false);
	};

	return (
		<>
			<input
				className="sign-up-check"
				type="checkbox"
				id="sign-up"
				name="sign-up"
				value="newsletter"
				onChange={() => setShowModal(!showModal)}
			/>
			<label htmlFor="sign-up"> Sign-up for Newsletter</label>

			{showModal && (
				<div className="modal">
					<form onSubmit={handleSubmit}>
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your Email"
							required
						/>
						<button type="submit">Submit</button>
					</form>
				</div>
			)}
		</>
	);
};

export default Signup;

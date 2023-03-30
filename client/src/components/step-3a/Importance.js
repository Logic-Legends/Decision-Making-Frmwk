import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import tooltipIcon from "./images/tooltipicon.png";
import HandleFirstTooltipClick from "./HandleFirstTooltipImportance";
import HandleSecondTooltipClick from "./HandleSecondTooltipImportance";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";


const Importance = () => {

	const stepNumber = 3;

	//state for navigation on page by next and back btn
	const [isStarted, setIsStarted] = useState(false);

	//state for showing first topic tooltip
	const [modalShow, setModalShow] = useState(false);

	//state for showing second topic tooltip
	const [secondModalShow, setsecondModalShow] = useState(false);

	//state for selecting radio btn
	const { selectedOption, setSelectedOption, setStep } = useContext(stepProgressContext);

	//state for error handling
	const [isModalOpen, setIsModalOpen] = useState(false);

	//Local storage for storing RB value
	const navigate = useNavigate();


	//click back btn handler
	const handleBackClick = () => {
		setIsStarted(true);
		navigate("/decision-makers");
		setStep(stepNumber - 1);
	};

	//click next btn handler
	const handleNextClick = () => {
		if (selectedOption === null) {
			setIsModalOpen(true);
		} else {
			setIsStarted(true);
			navigate("/Capacity");
			setStep(stepNumber + 1);
		}
	};

	//radio btn handler
	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
		sessionStorage.setItem("selectedOption", event.target.value);

	};

	//ADD TO STORAGE SESSION LAST PAGE
	useEffect(() => {
		const storedImportance = sessionStorage.getItem("selectedOption");
		if (storedImportance) {
			setSelectedOption(storedImportance);
		}
	}, []);


	return (
		<div className="container">
			{/* call first tooltip component */}
			<HandleFirstTooltipClick
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
			{/* call second tooltip component */}
			<HandleSecondTooltipClick
				show={secondModalShow}
				onHide={() => setsecondModalShow(false)}
			/>
			<h2>
				Importance{" "}
				<img
					src={tooltipIcon}
					alt="Tooltip"
					className="question-mark-pages"
					onClick={() => setModalShow(true)}
				/>
			</h2>
			<section className="border-decision-framework-pages">
				<h6>How important is the decision?</h6>

				<span className="radio-label">
					<span className="radio-title"> </span>
					<p className="radio-description question-hint">
						Will it affect how we operate as an organisation or a team or the
						way we interact with other organisations?
					</p>
				</span>

				{/* Radio btn section */}
				<form className="radio-btn-section container-radio-btn">
					<label className="radio">
						<input
							type="radio"
							name="importance"
							value="Low"
							checked={selectedOption === "Low"}
							onChange={handleOptionChange}
							className="input-radio-btn"
						/>
						<span className="radio-label">
							<span className="radio-title">Low </span>
							<span className="radio-description">
								The decision will affect small project or team within the
								organisation
							</span>
						</span>
					</label>
					<label className="radio">
						<input
							type="radio"
							name="importance"
							value="High"
							checked={selectedOption === "High"}
							onChange={handleOptionChange}
							className="input-radio-btn"
						/>
						<span className="radio-label">
							<span className="radio-title">High </span>
							<span className="radio-description">
								The decision will affect the broader organisation or how we
								interact with other organisations
							</span>
						</span>
					</label>
				</form>
			</section>
			{/* btn sections */}
			<section id="button-same-line">
				{isStarted}
				<button onClick={handleBackClick} className="inner">
					<Link to="/decision-makers"></Link>
					Back
				</button>
				<button onClick={handleNextClick} className="inner">
					<Link to="/Capacity"></Link>Next
				</button>
				{isModalOpen && (
					<div className="modal">
						<div className="modal-display">
							<p>Please select a response.</p>
							<button
								onClick={() => setIsModalOpen(false)}
								className="modal-btn"
							>
								OK
							</button>
						</div>
					</div>
				)}
			</section>
		</div>
	);
};

export default Importance;

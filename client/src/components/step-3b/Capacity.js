import React,{ useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import tooltipIcon from "./images/tooltipicon.png";
import HandleFirstTooltipClick from "./HandleFirstTooltipCapacity";
import HandleSecondTooltipClick from "./HandleSecondTooltipCapacity";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";


const Capacity = () => {

	const stepNumber=4;

	//state for navigation on page by next and back btn
	const [isStarted, setIsStarted] = useState(false);

	//state for showing first topic tooltip
	const [modalShow, setModalShow] = useState(false);

	//state for showing second topic tooltip
	const [secondModalShow, setsecondModalShow] = useState(false);

	//state for selecting radio btn
	const { selectedOptionCapacity, setSelectedOptionCapacity ,setStep,currentStep } = useContext(stepProgressContext);


	//state for error handling
	const [isModalOpen, setIsModalOpen] = useState(false);

	const navigate = useNavigate();


	//click back btn handler
	const handleBackClick = () => {
		setIsStarted(true);
		navigate("/Importance");
		setStep(stepNumber-1);
	};
	//click next btn handler
	const handleNextClick = () => {
		if (selectedOptionCapacity === null) {
			setIsModalOpen(true);
		} else {
			setIsStarted(true);
			setStep(currentStep+1);
			navigate("/time-resource");
		}
	};
	//radio btn handler
	const handleOptionChange = (event) => {
		setSelectedOptionCapacity(event.target.value);
		sessionStorage.setItem("selectedOptionCapacity", event.target.value);
	};

	 //ADD TO STORAGE SESSION LAST PAGE
	 useEffect(() => {
		const storedCapacity = sessionStorage.getItem("selectedOptionCapacity");
		if (storedCapacity) {
			setSelectedOptionCapacity(storedCapacity);
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
				Capacity{" "}
				<img
					src={tooltipIcon}
					alt="Tooltip"
					className="question-mark-pages"
					onClick={() => setModalShow(true)}
				/>
			</h2>
			<section className="border-decision-framework-pages">
				<h6>
					What is the decision-making teams capacity?
					<img
						src={tooltipIcon}
						alt="Tooltip"
						className="question-mark-pages"
						onClick={() => setsecondModalShow(true)}
					/>
				</h6>
				{/* Radio btn section */}
				<form className="radio-btn-section container-radio-btn">
					<label className="radio">
						<input
							type="radio"
							name="capacity"
							value="low"
							checked={selectedOptionCapacity === "low"}
							onChange={handleOptionChange}
							className="input-radio-btn"
						/>
						<span className="radio-label">
							<span className="radio-title">Low </span>
							<span className="radio-description">
								<strong>Example of low capacity:</strong> The deadline for
								making the decision is very soon, and all of the people who need
								to be involved have other outstanding projects that are
								time-consuming and cannot be delayed. It would be hard for the
								team to find time to learn relevant information and attend
								decision-making meetings.
							</span>
						</span>
					</label>
					<label className="radio">
						<input
							type="radio"
							name="capacity"
							value="high"
							checked={selectedOptionCapacity === "high"}
							onChange={handleOptionChange}
							className="input-radio-btn"
						/>
						<span className="radio-label">
							<span className="radio-title">High </span>
							<span className="radio-description">
								<strong>Example of high capacity:</strong> The deadline for
								making the decision is further out, and all of the people who
								need to be involved in the decision have open time in their
								schedules. It would be easy for the team to find time to learn
								relevant information and attend decision-making meetings.
							</span>
						</span>
					</label>
				</form>
			</section>
			{/* btn sections */}
			<section id="button-same-line">
				{isStarted}
				<button onClick={handleBackClick} className="inner">
					<Link to="/Importance"></Link>Back
				</button>
				<button onClick={handleNextClick} className="inner">
					<Link to="/timeAndResource"></Link>Next
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
				)}{" "}
			</section>
		</div>
	);
};

export default Capacity;

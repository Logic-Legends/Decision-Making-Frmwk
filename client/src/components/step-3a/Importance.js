import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import tooltipIcon from "./images/tooltipicon.png";

const Importance = () => {
	//state for navigation on page by next and back btn
	const [isStarted, setIsStarted] = useState(false);

	//state for showing topic tooltip
	const [isTooltipVisible, setIsTooltipVisible] = useState(false);

	//state for question tooltip
	const [isTooltipOpen, setIsTooltipOpen] = useState(false);

	//state for selecting radio btn
	const [selectedOption, setSelectedOption] = useState(null);

	//state for error handling
	const [isModalOpen, setIsModalOpen] = useState(false);


	const navigate = useNavigate();

	//click back btn handler
	const handleBackClick = () => {
		setIsStarted(true);
		navigate("/decision-makers");
	};

	const handleNextClick = () => {
		if (selectedOption === null) {
			setIsModalOpen(true);
		} else {
			setIsStarted(true);
			navigate("/Capacity");
		}
	};

	//first tooltip handler
	const handleTooltipClick = () => {
		setIsTooltipVisible(!isTooltipVisible);
	};
	//second tooltip handler
	const handleSecondTooltipClick = () => {
		setIsTooltipOpen(!isTooltipOpen);
	};
	//radio btn handler
	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};
	return (
		<div className="container">
			<h1>
				Importance{" "}
				<img
					src={tooltipIcon}
					alt="Tooltip"
					className="question-mark-pages"
					onClick={handleTooltipClick}
				/>
				{/* tooltip for topic */}
				{isTooltipVisible && (
					<div className={`tooltip ${isTooltipVisible ? "show" : ""}`}>
						<strong>Importance</strong> = the significance and/or value of the
						decision at hand.
					</div>
				)}
			</h1>
			<section className="border-decision-framework-pages">
				<p>
					How important is the decision?
					<img
						src={tooltipIcon}
						alt="Tooltip"
						className="question-mark-pages"
						onClick={handleSecondTooltipClick}
					/>
					{/* tooltip for question */}
					{isTooltipOpen && (
						<div className={`tooltip ${isTooltipOpen ? "show" : ""}`}>
							<strong>Guiding questions:</strong>
							<br />
							Will it affect how we operate as an organization or as a team
							within the organization? Will it affect how we interact with other
							organizations?
							<br />
							<br /> <strong>Example of low importance:</strong> The decision
							will not likely affect the broader organization or how we interact
							with other organizations. It will probably affect a small project
							or small team within the organization.
							<br />
							<br />
							<strong>Example of high importance:</strong> The decision will
							likely affect the broader organization or how we interact with
							other organizations. It will probably affect a large team within
							the organization or how the organization operates at a high level.
						</div>
					)}
				</p>
				{/* Radio btn section */}
				<form className="radio-btn-section">
					<label>
						<input
							type="radio"
							name="importance"
							value="low"
							checked={selectedOption === "low"}
							onChange={handleOptionChange}
							className="radio-input low-rdb"
						/>
						Low
					</label>
					<label>
						<input
							type="radio"
							name="importance"
							value="high"
							checked={selectedOption === "high"}
							onChange={handleOptionChange}
							className="radio-input high-rdb"
						/>
						High
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
						<div className="modal-content">
							<p>Please select a response</p>
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

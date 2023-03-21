import React from "react";
import { Link } from "react-router-dom";
// import "./capacity.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import tooltipIcon from "./images/tooltipicon.png";



const Capacity = () => {
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
			navigate("/Importance");

	};
	//click next btn handler
	const handleNextClick = () => {
		if (selectedOption === null) {
			setIsModalOpen(true);
		} else {
			setIsStarted(true);
			navigate("/timeAndResource");
		}
	};
	//first tooltip handler
	const handleTooltipClick = () => {
		setIsTooltipVisible(!isTooltipVisible);
	};
	//second tooltip handler
	const handleSecondTooltipClick=()=>{
		setIsTooltipOpen(!isTooltipOpen);
	};
	//radio btn handler
	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};
	return (
		<div className="container">
			<h1>
				Capacity{" "}
				<img
					src={tooltipIcon}
					alt="Tooltip"
					className="question-mark-pages"
					onClick={handleTooltipClick}
				/>
				{/* tooltip for topic */}
				{isTooltipVisible && (
					<div className={`tooltip ${isTooltipVisible ? "show" : ""}`}>
						<strong>Capacity</strong> = how much time decision-makers can
						allocate to the decision-making process{" "}
					</div>
				)}
			</h1>
			<section className="border-decision-framework-pages">
				<p>
					What is the decision-making teams capacity?
					
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
							Will anyone be taking leave? Are there any concurrent projects
							that could limit capacity? Can decision-makers commit to any
							meetings, and if so, how many? Is there a deadline for this
							decision?
							<br />
							<br /> <strong>Example of low capacity:</strong> The deadline for
							making the decision is very soon, and all of the people who need
							to be involved have other outstanding projects that are
							time-consuming and cannot be delayed. It would be hard for the
							team to find time to learn relevant information and attend
							decision-making meetings.
							<br />
							<br />
							<strong>Example of high capacity:</strong> The deadline for making
							the decision is further out, and all of the people who need to be
							involved in the decision have open time in their schedules. It
							would be easy for the team to find time to learn relevant
							information and attend decision-making meetings.
						</div>
					)}
				</p>
				{/* Radio btn section */}
				<form className="radio-btn-section">
					<label>
						<input
							type="radio"
							name="capacity"
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
							name="capacity"
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
					<Link to="/Importance"></Link>Back
				</button>
				<button onClick={handleNextClick} className="inner">
					<Link to="/timeAndResource"></Link>Next
				</button>
				{isModalOpen && (
					<div className="modal">
						<div className="modal-content">
							<p>Please select a response</p>
							<button onClick={() => setIsModalOpen(false)} className="modal-btn">OK</button>
						</div>
					</div>
				)}{" "}
			</section>
		</div>
	);
};

export default Capacity;

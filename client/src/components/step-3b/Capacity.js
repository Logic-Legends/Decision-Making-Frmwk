import React from "react";
import { Link } from "react-router-dom";
import "./capacity.css";
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
	const [error, setError] = useState(null);


	const navigate = useNavigate();

	//click back btn handler
	const handleBackClick = () => {
			setIsStarted(true);
			navigate("/Importance");

	};
	//click next btn handler
	const handleNextClick=()=>{
		if(selectedOption===null){
			setError("please select a response")
		}else{
			setIsStarted(true);
			navigate("/Step4");
		}
	}
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
		<div className="header">
			<h1>
				Capacity{" "}
				<button className="btn-tooltip" onClick={handleTooltipClick}>
					<img src={tooltipIcon} alt="Tooltip" className="tooltip-icon" />
				</button>
				{/* tooltip for topic */}
				{isTooltipVisible && (
					<div className={`tooltip ${isTooltipVisible ? "show" : ""}`}>
						<strong>Capacity</strong> = how much time decision-makers can
						allocate to the decision-making process{" "}
					</div>
				)}
			</h1>
			<section className="question-container">
				<p className="question">
					What is the decision-making teams capacity?
					<button className="btn-tooltip" onClick={handleSecondTooltipClick}>
						<img src={tooltipIcon} alt="Tooltip" className="tooltip-icon" />
					</button>
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
						/>
						High
					</label>
				</form>
			</section>
			{/* btn sections */}
			<section className="btn-container">
				{isStarted}
				<button onClick={handleBackClick}>Back</button>

				<button onClick={handleNextClick}>
					<Link to="/Step4"></Link>Next
				</button>
				{error && <div className="error-message">{error}</div>}
			</section>
		</div>
	);
};

export default Capacity;

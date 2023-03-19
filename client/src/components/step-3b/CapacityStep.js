import React from "react";
import { Link } from "react-router-dom";
import "./capacity.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import tooltipIcon from "./images/tooltipicon.png";



const CapacityStep = () => {
	const [isStarted, setIsStarted] = useState(false);
	const [isTooltipVisible, setIsTooltipVisible] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const [error, setError] = useState(null);


	const navigate = useNavigate();

	const handleStartClick = () => {
			if (selectedOption === null) {
			setError("Please select a response");
		} else {
			setIsStarted(true);
			navigate("/ImportanceStep");
			}
	};
	const handleTooltipClick = () => {
		setIsTooltipVisible(!isTooltipVisible);
	};
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
				{isTooltipVisible && (
					<div className={`tooltip ${isTooltipVisible ? "show" : ""}`}>
						Capacity = how much time decision-makers can allocate to the
						decision-making process{" "}
					</div>
				)}
			</h1>
			<section className="question-container">
				<p className="question">
					What is the decision-making teams capacity?
					<button className="btn-tooltip" onClick={handleTooltipClick}>
						<img src={tooltipIcon} alt="Tooltip" className="tooltip-icon" />
					</button>
					{isTooltipVisible && (
						<div className={`tooltip ${isTooltipVisible ? "show" : ""}`}></div>
					)}
				</p>
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
			<section className="btn-container">
				{isStarted}
				<button onClick={handleStartClick}>Back</button>

				<button>
					<Link to="/"></Link>Next
				</button>
				{error && <div className="error-message">{error}</div>}
			</section>
		</div>
	);
};

export default CapacityStep;

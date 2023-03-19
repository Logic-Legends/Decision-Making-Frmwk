import React from "react";
import { Link } from "react-router-dom";
import "./importance.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import tooltipIcon from "./images/tooltipicon.png";

// test conflict

const ImportanceStep = () => {
	const [isStarted, setIsStarted] = useState(false);
	const [isTooltipVisible, setIsTooltipVisible] = useState(false);

	const navigate = useNavigate();

	const handleStartClick = () => {
		setIsStarted(true);
		navigate("/CapacityStep");
	};
	const handleTooltipClick = () => {
		setIsTooltipVisible(!isTooltipVisible);
	};
	return (
		<div className="header">
			<h1>
				Importance{" "}
				<button className="btn-tooltip" onClick={handleTooltipClick}>
					<img src={tooltipIcon} alt="Tooltip" className="tooltip-icon" />
				</button>
				{isTooltipVisible && (
					<div className={`tooltip ${isTooltipVisible ? "show" : ""}`}>
						Importance = the significance and/or value of the decision at hand
					</div>
				)}
			</h1>
			<section className="question-container">
				<p className="question">
					How important is the decision?
					<button className="btn-tooltip" onClick={handleTooltipClick}>
						<img src={tooltipIcon} alt="Tooltip" className="tooltip-icon" />
					</button>
					{isTooltipVisible && (
						<div className={`tooltip ${isTooltipVisible ? "show" : ""}`}>
							Loading....
						</div>
					)}
				</p>
				<form className="radio-btn-section">
					<label>
						<input type="radio" name="importance" value="low" checked />
						Low
					</label>
					<label>
						<input type="radio" name="importance" value="high" />
						High
					</label>
				</form>
			</section>
			<section className="btn-container">
				<button>
					<Link to="/"></Link>Back
				</button>
				{isStarted}
				<button onClick={handleStartClick}>Next</button>
			</section>
		</div>
	);
};

export default ImportanceStep;

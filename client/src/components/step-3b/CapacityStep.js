import React from "react";
import { Link } from "react-router-dom";
import "./capacity.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const CapacityStep = () => {
	const [isStarted, setIsStarted] = useState(false);
	const navigate = useNavigate();

	const handleStartClick = () => {
		setIsStarted(true);
		navigate("/ImportanceStep");
	};
	return (
		<div className="header">
			<h1>
				Capacity <img src="" alt="" className="tooltip-icon"></img>
			</h1>
			<section className="question-container">
				<p className="question">
					What is the decision-making teams capacity?
					<img src="" alt="" className="tooltip-icon"></img>
				</p>
				<form className="radio-btn-section">
					<label>
						<input type="radio" name="capacity" value="low" checked />
						Low
					</label>
					<label>
						<input type="radio" name="capacity" value="low" />
						High
					</label>
				</form>
			</section>
			<section className="btn-container">
				{isStarted}<button onClick={handleStartClick}>Back</button>
				<button>
					<Link to="/"></Link>Next
				</button>
			</section>
		</div>
	);
};

export default CapacityStep;

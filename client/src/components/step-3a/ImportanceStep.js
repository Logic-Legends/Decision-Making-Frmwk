import React from "react";
import { Link } from "react-router-dom";
import "./importance.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const ImportanceStep=()=>{
	const [isStarted, setIsStarted] = useState(false);
	const navigate = useNavigate();

	const handleStartClick = () => {
		setIsStarted(true);
		navigate("/CapacityStep");
	};
     return (
				<div className="header">
					<h1>
						Importance <img src="" alt="" className="tooltip-icon"></img>
					</h1>
					<section className="question-container">
						<p className="question">
							How important is the decision?
							<img src="tooltipicon.PNG" alt="" className="tooltip-icon"></img>
						</p>
						<form className="radio-btn-section">
							<label>
								<input type="radio" name="importance" value="low" checked />
								Low
							</label>
							<label>
								<input type="radio" name="importance" value="low" />
								High
							</label>
						</form>
					</section>
					<section className="btn-container">
						<button>
							<Link to="/"></Link>Back
						</button>
						{isStarted}<button onClick={handleStartClick}>
							Next
						</button>
					</section>
				</div>
			);
};

export default ImportanceStep;
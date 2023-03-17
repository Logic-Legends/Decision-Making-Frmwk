import React from "react";
import { Link } from "react-router-dom";
import "./capacity.css";

const CapacityStep = () => {
	return (
		<div className="header_title">
			<h1>
				Capacity <span className="tooltip-icon">i</span>
			</h1>
			<section>
				<p>
					What is the decision-making teams capacity?{" "}
					<span className="tooltip-icon">i</span>
				</p>
				<form className="radio-btn-section">
					<label>
						<input type="radio" value="low" />
						Low
					</label>
					<label>
						<input type="radio" value="low" />
						High
					</label>
				</form>
				<button>
					<Link to="/"></Link>Back
				</button>
				<button>
					<Link to="/TimeResourceAllocation"></Link>Next
				</button>
			</section>
		</div>
	);
};

export default CapacityStep;

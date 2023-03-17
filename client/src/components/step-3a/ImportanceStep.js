import React from "react";
import { Link } from "react-router-dom";
import "./importance.css";



const ImportanceStep=()=>{
     return (
				<div className="header">
					<h1>
						Importance <img src="" alt="" className="tooltip-icon"></img>
					</h1>
					<section className="question-container">
						<p className="question" >
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
						<button>
							<Link to="/CapacityStep"></Link>Next
						</button>
					</section>
				</div>
			);
};

export default ImportanceStep;
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import tooltipIcon from "./images/tooltipicon.png";
import HandleFirstTooltipClick from "./HandleFirstTooltipClick";
import HandleSecondTooltipClick from "./HandleSecondTooltipClick";


const Importance = () => {
	//state for navigation on page by next and back btn
	const [isStarted, setIsStarted] = useState(false);

	//state for showing first topic tooltip
	const [modalShow, setModalShow] = useState(false);

	//state for showing second topic tooltip
	const [secondModalShow, setsecondModalShow] = useState(false);

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

	//click next btn handler
	const handleNextClick = () => {
		if (selectedOption === null) {
			setIsModalOpen(true);
		} else {
			setIsStarted(true);
			navigate("/Capacity");
		}
	};

	//radio btn handler
	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};

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
			<h1>
				Importance{" "}
				<img
					src={tooltipIcon}
					alt="Tooltip"
					className="question-mark-pages"
					onClick={() => setModalShow(true)}
				/>
			</h1>
			<section className="border-decision-framework-pages">
				<p>
					How important is the decision?
					<img
						src={tooltipIcon}
						alt="Tooltip"
						className="question-mark-pages"
						onClick={() => setsecondModalShow(true)}
					/>
					
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
						<div className="modal-display">
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

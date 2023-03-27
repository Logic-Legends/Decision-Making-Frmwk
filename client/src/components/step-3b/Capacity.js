import React,{ useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import tooltipIcon from "./images/tooltipicon.png";
import HandleFirstTooltipClick from "./HandleFirstTooltipCapacity";
import HandleSecondTooltipClick from "./HandleSecondTooltipCapacity";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";


const Capacity = () => {

	const stepNumber=4;

	//state for navigation on page by next and back btn
	const [isStarted, setIsStarted] = useState(false);

	//state for showing first topic tooltip
	const [modalShow, setModalShow] = useState(false);

	//state for showing second topic tooltip
	const [secondModalShow, setsecondModalShow] = useState(false);

	//state for selecting radio btn
	const { selectedOptionCapacity, setSelectedOptionCapacity ,setStep,currentStep } = useContext(stepProgressContext);


	//state for error handling
	const [isModalOpen, setIsModalOpen] = useState(false);

	const navigate = useNavigate();


	//click back btn handler
	const handleBackClick = () => {
		setIsStarted(true);
		navigate("/Importance");
		setStep(stepNumber-1);
	};
	//click next btn handler
	const handleNextClick = () => {
		if (selectedOptionCapacity === null) {
			setIsModalOpen(true);
		} else {
			setIsStarted(true);
			setStep(currentStep+1);
			navigate("/time-resource");
		}
	};
	//radio btn handler
	const handleOptionChange = (event) => {
		setSelectedOptionCapacity(event.target.value);
		sessionStorage.setItem("selectedOptionCapacity", event.target.value);
	};

	 //ADD TO STORAGE SESSION LAST PAGE
	 useEffect(() => {
		const storedCapacity = sessionStorage.getItem("selectedOptionCapacity");
		if (storedCapacity) {
			setSelectedOptionCapacity(storedCapacity);
		}
	  }, []);


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
			<h3>
				Capacity{" "}
				<img
					src={tooltipIcon}
					alt="Tooltip"
					className="question-mark-pages"
					onClick={() => setModalShow(true)}
				/>
			</h3>
			<section className="border-decision-framework-pages">
				<h4>
					What is the decision-making teams capacity?
					<img
						src={tooltipIcon}
						alt="Tooltip"
						className="question-mark-pages"
						onClick={() => setsecondModalShow(true)}
					/>
				</h4>
				{/* Radio btn section */}
				<form className="radio-btn-section">
					<label>
						<input
							type="radio"
							name="capacity"
							value="low"
							checked={selectedOptionCapacity === "low"}
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
							checked={selectedOptionCapacity === "high"}
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
						<div className="modal-display">
							<p>Please select a response.</p>
							<button
								onClick={() => setIsModalOpen(false)}
								className="modal-btn"
							>
								OK
							</button>
						</div>
					</div>
				)}{" "}
			</section>
		</div>
	);
};

export default Capacity;

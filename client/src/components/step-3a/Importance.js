import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import tooltipIcon from "./images/tooltipicon.png";
import HandleFirstTooltipClick from "./HandleFirstTooltipImportance";
import HandleSecondTooltipClick from "./HandleSecondTooltipImportance";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import HandleToolTip from "../ProgressBar/HandToolTip";

const Importance = () => {

	const stepNumber = 3;
	const location = useLocation();
	const { pathname } = location;

	//state for navigation on page by next and back btn
	const [isStarted, setIsStarted] = useState(false);

	//state for showing first topic tooltip
	const [modalShow, setModalShow] = useState(false);

	//state for showing second topic tooltip
	const [secondModalShow, setsecondModalShow] = useState(false);

	//state for selecting radio btn
	const { selectedOption, setSelectedOption, setStep,setStepCompleted,getStepIdFromLocation } = useContext(stepProgressContext);

	//state for error handling
	const [isModalOpen, setIsModalOpen] = useState(false);

	//Local storage for storing RB value
	const navigate = useNavigate();


	//click back btn handler
	const handleBackClick = () => {
		setIsStarted(true);
		navigate("/decision-makers");
		setStep(stepNumber - 1);
	};

	//click next btn handler
	const handleNextClick = () => {
		if (selectedOption === null) {
			setIsModalOpen(true);
		} else {
			setIsStarted(true);
			navigate("/capacity");
			setStep(stepNumber + 1);
			setStepCompleted(stepNumber+1);
		}
	};

	//radio btn handler
	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
		sessionStorage.setItem("selectedOption", event.target.value);

	};

	//ADD TO STORAGE SESSION LAST PAGE
	useEffect(() => {
		const storedImportance = sessionStorage.getItem("selectedOption");
		if (storedImportance) {
			setSelectedOption(storedImportance);
		}
	}, []);

  // update the step number when using browser navigation or refreshing the component
  useEffect(() => {
	setStep(getStepIdFromLocation(pathname));
  }, [pathname]);

  /*  Modal Title and Text */

  const modalTitle = "";
  const modalText = "<strong>Importance</strong> = the significance and/or value of the decision at hand.";

	return (
		<div className="container">
			{/* call first tooltip component */}
			<HandleToolTip
				show={modalShow}
				onHide={() => setModalShow(false)}
				title={modalTitle}
				text={modalText}
			/>
			{/* call second tooltip component */}
			<HandleSecondTooltipClick
				show={secondModalShow}
				onHide={() => setsecondModalShow(false)}
			/>
			<h2>
				Importance{" "}
				<img
					src={tooltipIcon}
					alt="Tooltip"
					className="question-mark-pages"
					onClick={() => setModalShow(true)}
				/>
			</h2>
			<section className="border-decision-framework-pages">
				<h6>How important is the decision?</h6>

				<span className="radio-label">
					<span className="radio-title"> </span>
					<p className="radio-description question-hint">
						Will it affect how you operate as an organisation or a team or the
						way you interact with other organisations?
					</p>
				</span>

				{/* Radio btn section */}
				<form className="radio-btn-section container-radio-btn">
					<label className="radio">
						<input
							type="radio"
							name="importance"
							value="Low"
							checked={selectedOption === "Low"}
							onChange={handleOptionChange}
							className="input-radio-btn"
						/>
						<span className="radio-label">
							<span className="radio-title">Low </span>
							<span className="radio-description">
								The decision will affect small project or team within the
								organization
							</span>
						</span>
					</label>
					<label className="radio">
						<input
							type="radio"
							name="importance"
							value="High"
							checked={selectedOption === "High"}
							onChange={handleOptionChange}
							className="input-radio-btn"
						/>
						<span className="radio-label">
							<span className="radio-title">High </span>
							<span className="radio-description">
								The decision will affect the broader organization or how you
								interact with other organizations
							</span>
						</span>
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
					<Link to="/capacity"></Link>Next
				</button>
				{isModalOpen && (
					<div className="modal">
						<div className="modal-display">
							<p>Please select a response!</p>
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

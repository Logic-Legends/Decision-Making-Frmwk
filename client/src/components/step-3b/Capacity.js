import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import HandleToolTip from "../ProgressBar/HandleToolTip";

const Capacity = () => {

	const stepNumber = 4;
	const location = useLocation();
	const { pathname } = location;
	//state for navigation on page by next and back btn
	const [isStarted, setIsStarted] = useState(false);

	//state for showing first topic tooltip
	const [modalShow, setModalShow] = useState(false);


	//state for selecting radio btn
	const { selectedOptionCapacity, setSelectedOptionCapacity, setStep, currentStep,setStepCompleted,getStepIdFromLocation } = useContext(stepProgressContext);


	//state for error handling
	const [isModalOpen, setIsModalOpen] = useState(false);

	const navigate = useNavigate();


	//click back btn handler
	const handleBackClick = () => {
		setIsStarted(true);
		navigate("/importance");
		setStep(stepNumber - 1);
	};
	//click next btn handler
	const handleNextClick = () => {
		if (!selectedOptionCapacity ) {
			setIsModalOpen(true);
		} else {
			setStep(currentStep + 1);
			setStepCompleted(stepNumber+1);
			navigate("/time-resource");
			setIsStarted(true);
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

  // update the step number when using browser navigation or refreshing the component
  useEffect(() => {
	setStep(getStepIdFromLocation(pathname));
  }, [pathname]);


  const modalTitle = "";
  const modalText = "<strong>Capacity</strong> = how much time decision-makers can allocate to the decision-making process.";


	return (
		<div className="container">
			{/* call first tooltip component */}
			<HandleToolTip
				show={modalShow}
				onHide={() => setModalShow(false)}
				title={modalTitle}
				text={modalText}
			/>
			<h2>
				Capacity{" "}
				<a className="question-mark-button" onClick={() => setModalShow(true)}>?</a>
			</h2>
			<section className="border-decision-framework-pages">
				<h6>What is the decision-making team&apos;s capacity?</h6>

				<span className="radio-label">
					<span className="radio-title"> </span>
					<span className="radio-description question-hint">
						Will you be affected by factors such as team members on leave,
						decision makers&apos; ability to commit to meetings and decision
						deadline?
					</span>
				</span>

				{/* Radio btn section */}
				<form className="radio-btn-section container-radio-btn">
					<label className="radio">
						<input
							type="radio"
							name="capacity"
							value="Low"
							checked={selectedOptionCapacity === "Low"}
							onChange={handleOptionChange}
							className="input-radio-btn"
						/>
						<span className="radio-label">
							<span className="radio-title">Low </span>
							<span className="radio-description">
								The deadline for making the decision is very soon and team
								members are unable to attend decision-making meetings
							</span>
						</span>
					</label>
					<label className="radio">
						<input
							type="radio"
							name="capacity"
							value="High"
							checked={selectedOptionCapacity === "High"}
							onChange={handleOptionChange}
							className="input-radio-btn"
						/>
						<span className="radio-label">
							<span className="radio-title">High </span>
							<span className="radio-description">
								The deadline for making the decision is further out and team
								members have time to attend decision-making meetings
							</span>
						</span>
					</label>
				</form>
			</section>
			{/* btn sections */}
			<section id="button-same-line">
				{isStarted}
				<button onClick={handleBackClick} className="inner">
					<Link to="/importance"></Link>Back
				</button>
				<button onClick={handleNextClick} className="inner">
					<Link to="/time-and-resource"></Link>Next
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
				)}{" "}
			</section>
		</div>
	);
};

export default Capacity;

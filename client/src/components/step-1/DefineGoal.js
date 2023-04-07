import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import QuestionMark from "./images/question-mark.png";
import HandleTooltip from "../ProgressBar/HandleToolTip";
import RedCircleQuestionMark from "./Question-mark";

const DefineGoal = () => {

	//Used for progress bar
	const stepNumber = 1;
	const location = useLocation();
	const { pathname } = location;


	//Go to webpage
	const navigate = useNavigate();

	//state for error handling
	const [isModalOpen, setIsModalOpen] = useState(false);

	//Used for Popup
	const [modalShow, setModalShow] = React.useState(false);

	//Used for get data and fill input
	const { defineGoalText, setDefineGoalText, setStep,setStepCompleted,getStepIdFromLocation  } = useContext(stepProgressContext);

	const handleChange = (event) => {
		setDefineGoalText(event.target.value);
		sessionStorage.setItem("defineGoalText", event.target.value); //ADD SESSION STORAGE
	};

	const handleClick = (event) => {
		event.preventDefault();

		if (defineGoalText && defineGoalText.value !== null && defineGoalText.value !== "") {
			setStep(stepNumber + 1); //Used for progress bar
			setStepCompleted(stepNumber+1);
			navigate("/decision-makers");
		} else {
			setIsModalOpen(true);
		}
	};

	//ADD TO STORAGE SESSION LAST PAGE
	useEffect(() => {
		const storedGoal = sessionStorage.getItem("defineGoalText");
		if (storedGoal) {
			setDefineGoalText(storedGoal);
		}
	}, []);

  // update the step number when using browser navigation or refreshing the component
	useEffect(() => {
		setStep(getStepIdFromLocation(pathname));
	  }, [pathname]);

/*  Modal Title and Text */

const modalTitle = "<strong>Define the goal</strong>";
const modalText = "Defining the goal will help you determine what kind of information you need to make a decision..";

	return (

		<div className="container">
			<HandleTooltip title={modalTitle} text={modalText} clickedicon='defineGoal' show={modalShow} onHide={() => setModalShow(false)} />

			<h3>What is the goal? <a className="question-mark-button-test" onClick={() => setModalShow(true)}>?</a></h3>


			<div className="border-decision-framework-pages">
				<h6>What decision are you trying to make?</h6>
				<p>
				Think of SMART Goals: Specific, Measurable, Achievable, Realistic, Time-based.
				</p>

				<textarea
					id="message"
					type="textarea"
					name="message"
					placeholder="Enter your goal"
					value={defineGoalText}
					onChange={handleChange}
					maxLength="500"
					required
					rows="3"
				/>
			</div>
			<div id="button-same-line">
				<Link to="/">
					{" "}
					<button className="inner">BACK</button>
				</Link>
				<button className="inner" onClick={handleClick} type="submit">
					NEXT
				</button>
				{isModalOpen && (
					<div className="modal">
						<div className="modal-display">
							<p>Please complete this step!</p>
							<button
								onClick={() => setIsModalOpen(false)}
								className="modal-btn"
							>
								OK
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default DefineGoal;

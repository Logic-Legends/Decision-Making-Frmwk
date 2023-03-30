import React, { useState,useContext,useEffect } from "react";
import { Alert } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import QuestionMark from "./images/question-mark.png";
import HandleTooltip from "./HandleTooltip";


const DefineGoal = () => {

  //Used for progress bar
  const stepNumber=1;

  //Go to webpage
  const navigate = useNavigate();

  //state for error handling
	const [isModalOpen, setIsModalOpen] = useState(false);

  //Used for Popup
  const [modalShow, setModalShow] = React.useState(false);

  //Used for get data and fill input
  const { defineGoalText,setDefineGoalText, setStep } = useContext( stepProgressContext );

  const handleChange = (event) => {
    setDefineGoalText(event.target.value);
    sessionStorage.setItem("defineGoalText", event.target.value); //ADD SESSION STORAGE
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (defineGoalText && defineGoalText.value !== null && defineGoalText.value !== "") {
      setStep(stepNumber+1); //Used for progress bar
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

  return (

		<div className="container">
			<HandleTooltip clickedicon='defineGoal' show={modalShow} onHide={() => setModalShow(false)} />

			<h3>What is the goal <img
						className="question-mark-pages"
						src={QuestionMark}
						alt="Question Mark"
						border="0"
						onClick={() => setModalShow(true)}
					></img></h3>
			<div className="border-decision-framework-pages">
				<h6>What decision are we trying to make?</h6>
				<p>
				Think of SMART Goals, Specific, Measurable, Achievable, Realistic, Time-based.
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

import React, { useState, useContext, useEffect } from "react";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import { useNavigate,useLocation } from "react-router-dom";
import QuestionMark from "./images/question-mark.png";
import HandleToolTip from "../ProgressBar/HandleToolTip";

const TypeOfInformation = () => {

  //Used to get data to select radio button
  const { selectedOptionAmountOfInformation, setSelectedOptionAmountOfInformation, setStep,setStepCompleted,getStepIdFromLocation } = useContext(stepProgressContext);

  //FirstHandleTooltip
  const [FirstModalShow, FirstSetModalShow] = React.useState(false);

  //state for error handling
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Go to another page function
  const navigate = useNavigate();

  //When change the option from radio button
  const handleOptionChange = (event) => {
    setSelectedOptionAmountOfInformation(event.target.value);
    //ADD TO STORAGE SESSION
    sessionStorage.setItem("selectedOptionAmountOfInformation", event.target.value);
  };

  //Check if any button was choosen
  const handleButtonClick = () => {

    if (!selectedOptionAmountOfInformation) {
      // show the error message when field is empty
      setIsModalOpen(true);
    } else {
      setStep(stepNumber + 1);
	  setStepCompleted(stepNumber+1);
      navigate("/voting-method"); //Go to page and pass data
    }
  };

  const handleBackClick = () => {
    setStep(stepNumber - 1);
    navigate("/type-of-information");
  };

  //ADD TO STORAGE SESSION LAST PAGE
  useEffect(() => {
    const storedAmountOfInformation = sessionStorage.getItem("selectedOptionAmountOfInformation");
    if (storedAmountOfInformation) {
      setSelectedOptionAmountOfInformation(storedAmountOfInformation);
    }
  }, []);
  // Progress Bar Step Number

  const stepNumber=8;
  const location = useLocation();
  const { pathname } = location;

  // update the step number when using browser navigation or refreshing the component
  useEffect(() => {
	setStep(getStepIdFromLocation(pathname));
  }, [pathname]);

  const modalTitle = "";
  const modalText = "Consider how much evidence, facts and data related to the decision you have gathered.";

    return (
			<div className="container">
				<HandleToolTip
					show={FirstModalShow}
					onHide={() => FirstSetModalShow(false)}
					title={modalTitle}
					text={modalText}
				/>

				<h2>
					Amount of Information{" "}
					<img
						className="question-mark-pages"
						src={QuestionMark}
						alt="Qusestion Mark"
						border="0"
						onClick={() => FirstSetModalShow(true)}
					></img>
				</h2>
				<section className="border-decision-framework-pages">
					<h6 className="question-margin">
						How much information will you have?
					</h6>

					<form className="radio-btn-section container-radio-btn">
						<label className="radio">
							<input
								type="radio"
								name="option"
								value="High"
								checked={selectedOptionAmountOfInformation === "High"}
								onChange={handleOptionChange}
								className="input-radio-btn"
							/>
							<span className="radio-label">
								<span className="radio-title">High </span>
								<span className="radio-description">
								Example: You have enough information to rank all of the options from highest to lowest preference OR score every option from 1-100.
								</span>
							</span>
						</label>
						<label className="radio">
							<input
								type="radio"
								name="option"
								value="Medium"
								checked={selectedOptionAmountOfInformation === "Medium"}
								onChange={handleOptionChange}
								className="input-radio-btn"
							/>
							<span className="radio-label">
								<span className="radio-title">Medium </span>
								<span className="radio-description">
								Example: You have enough information to score every option from 1-5.
								</span>
							</span>
						</label>
						<label className="radio">
							<input
								type="radio"
								name="option"
								value="Low"
								checked={selectedOptionAmountOfInformation === "Low"}
								onChange={handleOptionChange}
								className="input-radio-btn"
							/>
							<span className="radio-label">
								<span className="radio-title">Low </span>
								<span className="radio-description">
								Example: You have enough information to answer yes or no to each option OR pick one favorite option.
								</span>
							</span>
						</label>
					</form>
				</section>

				<div id="button-same-line">
					<button className="inner" onClick={handleBackClick}>
						BACK
					</button>
					<button className="inner" onClick={handleButtonClick}>
						NEXT
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
				</div>
			</div>
		);
};

export default TypeOfInformation;

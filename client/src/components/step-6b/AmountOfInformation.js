import React, { useState,useContext,useEffect } from "react";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import { Link,useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import FirstHandleTooltip from "./FirstHandleTooltip";
import QuestionMark from "./images/question-mark.png";

const TypeOfInformation = () => {

    //Used to get data to select radio button
    const { selectedOptionAmountOfInformation,setSelectedOptionAmountOfInformation,setStep } = useContext( stepProgressContext );

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

    if (selectedOptionAmountOfInformation === null) {
      // show the error message when field is empty
      setIsModalOpen(true);
    } else {
        setStep(stepNumber+1);
        navigate("/Voting-Method"); //Go to page and pass data
    }
  };

  const handleBackClick = () => {
    setStep(stepNumber-1);
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

    return (
		<div className="container">

			<FirstHandleTooltip
				show={FirstModalShow}
				onHide={() => FirstSetModalShow(false)}
			/>

            <h2>Amount of Information{" "}
				<img
					className="question-mark-pages"
					src={QuestionMark}
					alt="Qusestion Mark"
					border="0"
					onClick={() => FirstSetModalShow(true)}
				></img>
			</h2>
            <section className="border-decision-framework-pages">

                                <h6>How much information will we have?</h6>

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
                                              <span className="radio-description">You have enough information to rank or assign values to all options</span>
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
                                              <span className="radio-description">You have enough information to...</span>
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
                                              <span className="radio-description">You have enough information to say yes or no to each option</span>
                                            </span>
                                        </label>
                                </form>
                </section>

			<div id="button-same-line">
      <button className="inner" onClick={handleBackClick}>BACK</button>
				<button className="inner" onClick={handleButtonClick}>NEXT</button>
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

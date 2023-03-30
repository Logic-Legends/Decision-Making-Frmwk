import React, { useState, useContext, useEffect } from "react";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import { useNavigate } from "react-router-dom";
import FirstHandleTooltip from "./FirstHandleTooltip";
import QuestionMark from "./images/question-mark.png";

const TypeOfInformation = () => {

  //FirstHandleTooltip
  const [FirstModalShow, FirstSetModalShow] = React.useState(false);

  //state for error handling
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Go to another page function
  const navigate = useNavigate();

  //Used to get data to select radio button
  const { selectedOptionTypeOfInformation, setSelectedOptionTypeOfInformation, setStep } = useContext(stepProgressContext);

  //When change the option from radio button
  const handleOptionChange = (event) => {
    setSelectedOptionTypeOfInformation(event.target.value);
    sessionStorage.setItem("selectedOptionTypeOfInformation", event.target.value); //ADD SESSION STORAGE
  };

  //Check if any button was choosen
  const handleButtonClick = () => {

    if (selectedOptionTypeOfInformation === null) {
      // show the error message when field is empty
      setIsModalOpen(true);
    } else {
      navigate("/amount-of-information"); //Go to page and pass data
      setStep(stepNumber + 1);
    }
  };

  const handleBackClick = () => {
    setStep(stepNumber - 1);
    navigate("/type-of-decision");
  };

  // Progress Bar Step Number
  const stepNumber = 7;

  //ADD TO STORAGE SESSION LAST PAGE
  useEffect(() => {
    const storedTypeOfInformation = sessionStorage.getItem("selectedOptionTypeOfInformation");
    if (storedTypeOfInformation) {
      setSelectedOptionTypeOfInformation(storedTypeOfInformation);
    }
  }, []);

    return (
			<div className="container">
				<FirstHandleTooltip
					show={FirstModalShow}
					onHide={() => FirstSetModalShow(false)}
				/>

				<h2>
					Type of Information{" "}
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
						What type of information will we have?
					</h6>

					<form className="radio-btn-section container-radio-btn">
						<label className="radio">
							<input
								type="radio"
								name="option"
								value="Explicit"
								checked={selectedOptionTypeOfInformation === "Explicit"}
								onChange={handleOptionChange}
								className="input-radio-btn"
							/>
							<span className="radio-label">
								<span className="radio-title">Explicit </span>
								<span className="radio-description">
									Information that lets you assign numerical values to the
									factors being considered
								</span>
							</span>
						</label>

						<label className="radio">
							<input
								type="radio"
								name="option"
								value="Relative"
								checked={selectedOptionTypeOfInformation === "Relative"}
								onChange={handleOptionChange}
								className="input-radio-btn"
							/>
							<span className="radio-label">
								<span className="radio-title">Relative </span>
								<span className="radio-description">
									Information that lets you compare factors being considered in
									relation to one another
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
					)}
				</div>
			</div>
		);
};

export default TypeOfInformation;

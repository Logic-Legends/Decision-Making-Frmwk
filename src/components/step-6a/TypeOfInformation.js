import React, { useState, useContext, useEffect } from "react";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import { useNavigate,useLocation } from "react-router-dom";
import HandleToolTip from "../ProgressBar/HandleToolTip";

const TypeOfInformation = () => {

  //HandleTooltip
  const [modalShow, setModalShow] = useState(false);

  //state for error handling
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Go to another page function
  const navigate = useNavigate();

  //Used to get data to select radio button
  const { selectedOptionTypeOfInformation, setSelectedOptionTypeOfInformation, setStep,setStepCompleted,getStepIdFromLocation } = useContext(stepProgressContext);

  //When change the option from radio button
  const handleOptionChange = (event) => {
    setSelectedOptionTypeOfInformation(event.target.value);
    sessionStorage.setItem("selectedOptionTypeOfInformation", event.target.value); //ADD SESSION STORAGE
	sessionStorage.setItem(
    "questionStep6",
    "What type of information will you have?"
  );
  };

  //Check if any button was choosen
  const handleButtonClick = () => {

    if (!selectedOptionTypeOfInformation) {
      // show the error message when field is empty
      setIsModalOpen(true);
    } else {
      navigate("/amount-of-information"); //Go to page and pass data
      setStep(stepNumber + 1);
	  setStepCompleted(stepNumber+1);
    }
  };

  const handleBackClick = () => {
    setStep(stepNumber - 1);
    navigate("/type-of-decision");
  };

  // Progress Bar Step Number
  const stepNumber = 6;
  const location = useLocation();
  const { pathname } = location;

  //ADD TO STORAGE SESSION LAST PAGE
  useEffect(() => {
    const storedTypeOfInformation = sessionStorage.getItem("selectedOptionTypeOfInformation");
    if (storedTypeOfInformation) {
      setSelectedOptionTypeOfInformation(storedTypeOfInformation);
    }
  }, []);

  // update the step number when using browser navigation or refreshing the component
  useEffect(() => {
	setStep(getStepIdFromLocation(pathname));
  }, [pathname]);

  const modalTitle =
    "<p>The type of information you have will help determine the ideal voting method.</p>";
  const modalText = ` 
<p>There are two types of information that can help you decide:</p>		
  		<p>1. <strong>Explicit values (cardinal info)</strong><br/>Example: Finding out how many animals each intervention saves per year and choosing which one to pursue based on this information.</p>
		<br/>
		<p>2. <strong>Relative values (ordinal info)</strong><br/> Example: Comparing different interventions to each other and choosing which one to pursue based on how easy they seem to implement.</p>
		
		`;

    return (
			<div className="container">
				<HandleToolTip
					show={modalShow}
					onHide={() => setModalShow(false)}
					title={modalTitle}
				    text={modalText}
				/>

				<h2>
					Type of Information{" "}
					<a className="question-mark-button" onClick={() => setModalShow(true)}>?</a>
				</h2>
				<section className="border-decision-framework-pages">
					<h6 className="question-margin">
						What type of information will you have?
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
				</div>
			</div>
		);

};

export default TypeOfInformation;

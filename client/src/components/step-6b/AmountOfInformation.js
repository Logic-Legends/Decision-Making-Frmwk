import React, { useState,useContext } from "react";
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

    //Used for message error
    const [error, setError] = useState("");
    const [show, setShow] = useState(true);

    //Go to another page function
    const navigate = useNavigate();

    //When change the option from radio button
  const handleOptionChange = (event) => {
    setSelectedOptionAmountOfInformation(event.target.value);
  };

  //Check if any button was choosen
  const handleButtonClick = () => {

    if (selectedOptionAmountOfInformation === null) {
      // show the error message when field is empty
      setError("Please select a response.");
      setShow(true);
    } else {
        setStep(stepNumber+1);
        navigate("/Voting-Method"); //Go to page and pass data
    }
  };


  // Progress Bar Step Number
  const stepNumber=8;

    return (
		<div className="container">

			<FirstHandleTooltip
				show={FirstModalShow}
				onHide={() => FirstSetModalShow(false)}
			/>

            <h1>Amount of Information{" "}
				<img
					className="question-mark-pages"
					src={QuestionMark}
					alt="Qusestion Mark"
					border="0"
					onClick={() => FirstSetModalShow(true)}
				></img>
			</h1>
            <section className="border-decision-framework-pages">

                                {/* Show message em field is empty*/}
                                {show && error && (
                                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                {error}
                                </Alert>
                                )}
                                <p>How much information will we have?</p>
                                <form className="radio-btn-section container-radio-btn-long-text">
                                        <label>
                                            <input
                                                type="radio"
                                                name="option"
                                                value="high"
                                                checked={selectedOptionAmountOfInformation === "high"}
                                                onChange={handleOptionChange}
                                                className="radio-input"
                                            />
                                            <strong> High</strong> You have enough information to rank or assign values to all options
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="option"
                                                value="medium"
                                                checked={selectedOptionAmountOfInformation === "medium"}
                                                onChange={handleOptionChange}
                                                className="radio-input"
                                            />
                                            <strong> Medium</strong> You have enough information to...
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="option"
                                                value="low"
                                                checked={selectedOptionAmountOfInformation === "low"}
                                                onChange={handleOptionChange}
                                                className="radio-input"
                                            />
                                            <strong> Low</strong> You have enough information to say yes or no to each option
                                        </label>
                                </form>
                </section>

			<div id="button-same-line">
				<Link to="/type-of-information">	<button className="inner" onClick={()=>setStep(stepNumber-1)}>BACK</button></Link>
				<button className="inner" onClick={handleButtonClick}>NEXT</button>
			</div>
		</div>
	);
};

export default TypeOfInformation;

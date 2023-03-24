import React, { useState,useContext } from "react";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import { Link,useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import FirstHandleTooltip from "./FirstHandleTooltip";
import SecondHandleTooltip from "./SecondHandleTooltip";
import ThirdHandleTooltip from "./ThirdHandleTooltip";
import FourthHandleTooltip from "./FourthHandleTooltip";
import QuestionMark from "./images/question-mark.png";


const TypeOfInformation = () => {

    //FirstHandleTooltip
    const [FirstModalShow, FirstSetModalShow] = React.useState(false);

    //SecondtHandleTooltip
    const [SecondModalShow, SecondSetModalShow] = React.useState(false);

    //ThirdHandleTooltip
    const [ThirdModalShow, ThirdSetModalShow] = React.useState(false);

    //FourthHandleTooltip
    const [FourthModalShow, FourthSetModalShow] = React.useState(false);

    //Used for message error
    const [error, setError] = useState("");
    const [show, setShow] = useState(true);

    //Go to another page function
    const navigate = useNavigate();

    //Used to get data to select radio button
    const { selectedOptionTypeOfInformation,setSelectedOptionTypeOfInformation,setStep } = useContext( stepProgressContext );

    //When change the option from radio button
  const handleOptionChange = (event) => {
    setSelectedOptionTypeOfInformation(event.target.value);
  };

  //Check if any button was choosen
  const handleButtonClick = () => {

    if (selectedOptionTypeOfInformation === null) {
      // show the error message when field is empty
      setError("Please select a response.");
      setShow(true);
    } else {
        navigate("/amount-of-information"); //Go to page and pass data
        setStep(stepNumber+1);
    }
  };

// Progress Bar Step Number
  const stepNumber=7;



    return (
		<div className="container">

			<FirstHandleTooltip
				show={FirstModalShow}
				onHide={() => FirstSetModalShow(false)}
			/>

            <SecondHandleTooltip
				show={SecondModalShow}
				onHide={() => SecondSetModalShow(false)}
			/>

            <ThirdHandleTooltip
				show={ThirdModalShow}
				onHide={() => ThirdSetModalShow(false)}
			/>

            <FourthHandleTooltip
				show={FourthModalShow}
				onHide={() => FourthSetModalShow(false)}
			/>

			<h1>Plan to gather information needed to make the decision{" "}
				<img
					className="question-mark-pages"
					src={QuestionMark}
					alt="Qusestion Mark"
					border="0"
					onClick={() => FirstSetModalShow(true)}
				></img>
			</h1>
			<div className="border-decision-framework-pages">
				<table>
                    <tbody>
                        <tr className="table-background">
                            <th>Type of Information
                                <img className="question-mark-pages"
                                    src={QuestionMark}
                                    alt="Qusestion Mark"
                                    border="0"
                                    onClick={() => SecondSetModalShow(true)}
                                ></img>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                {/* Show message when field is empty*/}
                                {show && error && (
                                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                {error}
                                </Alert>
                                )}
                                <p>What type of information will we have?</p>
                                <form className="radio-btn-section">
                                        <label>
                                            <input
                                                type="radio"
                                                name="option"
                                                value="explicit"
                                                checked={selectedOptionTypeOfInformation === "explicit"}
                                                onChange={handleOptionChange}
                                                className="radio-input low-rdb"
                                            />
                                            Explicit
                                        </label>
                                                <img className="question-mark-pages"
                                                    src={QuestionMark}
                                                    alt="Qusestion Mark"
                                                    border="0"
                                                    onClick={() => ThirdSetModalShow(true)}
                                                ></img>
                                        <label>
                                            <input
                                                type="radio"
                                                name="option"
                                                value="relative"
                                                checked={selectedOptionTypeOfInformation === "relative"}
                                                onChange={handleOptionChange}
                                                className="radio-input high-rdb"
                                            />
                                            Relative

                                        </label>
                                        <img className="question-mark-pages"
                                                    src={QuestionMark}
                                                    alt="Qusestion Mark"
                                                    border="0"
                                                    onClick={() => FourthSetModalShow(true)}
                                                ></img>
                                </form>
                            </td>
                        </tr>
                    </tbody>
				</table>
			</div>

			<div id="button-same-line">
				<Link to="/type-of-decision">	<button className="inner" onClick={()=>setStep(stepNumber-1)}>BACK</button></Link>
				<button className="inner" onClick={handleButtonClick}>NEXT</button>
			</div>
		</div>
	);
};

export default TypeOfInformation;

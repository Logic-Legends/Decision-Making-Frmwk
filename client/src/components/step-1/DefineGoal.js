import React, { useState,useContext } from "react";
import { Alert } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import QuestionMark from "./images/question-mark.png";
import HandleTooltip from "./HandleTooltip";


const DefineGoal = () => {

  //Used for progress bar
  const stepNumber=1;
  const { labelArray,setStep }=useContext(stepProgressContext);


  //Go to webpage
  const navigate = useNavigate();

  //Used for message error
  const [error, setError] = useState("");
  const [show, setShow] = useState(true);

  //Used for Popup
  const [modalShow, setModalShow] = React.useState(false);

  //Used for get data and fill input
  const { defineGoalText,setDefineGoalText } = useContext( stepProgressContext );

  const handleChange = (event) => {
    setDefineGoalText(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (defineGoalText.trim().length !== 0) {
      setStep(stepNumber+1); //Used for progress bar
      navigate("/decision-makers");
    } else {
      // show the error message when field is empty
      setError("Please define your goals before you continue.");
      setShow(true);
    }
  };

  return (

  <div className="container">

      <HandleTooltip
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

        <h1>What is the goal?</h1>
        <div className="border-decision-framework-pages">

          {/* Show message when field is empty*/}
        {show && error && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          {error}
        </Alert>
      )}

          <p>Defining the goal will help you determine what kind of information you need to make a decision.
            <img className="question-mark-pages" src={QuestionMark} alt="Question Mark" border="0" onClick={() => setModalShow(true)}></img>
          </p>

            <input
              id="message"
              type="text"
              name="message"
              value={defineGoalText}
              onChange={handleChange}
              maxLength ="500"
              required
            />

        </div>
          <div id="button-same-line">
				  <Link to="/">	<button className="inner">BACK</button></Link>
				  <button className="inner" onClick={handleClick} type="submit" >NEXT</button>
      </div>
    </div>
  );
};

export default DefineGoal;

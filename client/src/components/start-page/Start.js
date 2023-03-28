import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";

const Start = () => {

  //GET REF FROM STEP1
    const { setDefineGoalText } = useContext( stepProgressContext );

    //CLEAR SESSION STORAGE
    const handleButtonClick = () => {
      if (sessionStorage.length > 0) {
        sessionStorage.clear();
        setDefineGoalText("");
      }
    };

  return (
    <div className="container">
      <h3>Voting Methods for Group Decisions</h3>
      <div className="border-decision-framework-pages">
        <p>This tool is designed to help facilitate group decisions that involve voting.</p>
            <p>It for team of 2 or more people.</p>
          <h6>Who should complete this tool?</h6>
          <p>1 or 2 people with good project knowledge, such as Project Manager and Team Lead. </p>
          <h6>What is the outcome? </h6>
          <p>You will receive a recommendation of the type of voting method to use in your group decision. </p>
          <h6>How much time will I need? </h6>
          <p>We advise you spend up to 30 minutes in using the tool. </p>
      </div>
          <div className="start-btn">
          <Link to="/define-goal"><button className="inner" onClick={handleButtonClick}>Start </button></Link>
          </div>
      <br></br>

    </div>
  );
};
export default Start;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";

const Start = () => {

  //GET REF FROM STEP1
  const { setDefineGoalText ,setStepCompleted,
   setSelectedOptionTypeOfInformation,
   setSelectedOptionAmountOfInformation,
   setEnteredData,
   setUsers,
    setSelectedOption,
    setSelectedOptionCapacity,
    setSelectedOptionDecision,
    setExplicitVotingMethod,
    setRelativeVotingMethod1,
    setRelativeVotingMethod2,
  } = useContext(stepProgressContext);

  //CLEAR SESSION STORAGE
  const handleButtonClick = () => {
    if (sessionStorage.length > 0) {
      sessionStorage.clear();
      setDefineGoalText("");
      setStepCompleted(1);
      setSelectedOptionTypeOfInformation("");
      setSelectedOptionAmountOfInformation("");
      setEnteredData("");
      setUsers([]);
      setSelectedOption("");
      setSelectedOptionCapacity("");
      setSelectedOptionDecision("");
      setExplicitVotingMethod("");
      setRelativeVotingMethod1("");
      setRelativeVotingMethod2("");
    }
  };

  return (
		<div className="container">
			<h2>Voting Methods for Group Decisions</h2>
			<div className="border-decision-framework-pages">
				<p>
					This tool is designed to help facilitate group decisions that involve
					voting.
				</p>
				<p>It is for teams of two or more people.</p>
				<h6>Who should complete this tool?</h6>
				<p>
					One or two people with good project knowledge, such as the Project
					Manager and Team Lead.{" "}
				</p>
				<h6>What is the outcome? </h6>
				<p>
					You will receive a recommendation of the type of voting method to use
					in your group decision.{" "}
				</p>
				<h6>How much time will I need? </h6>
				<p>We advise you to spend up to 30 minutes using the tool. </p>
			</div>
			<div className="start-btn">
				<Link to="/define-goal">
					<button className="inner" onClick={handleButtonClick}>
						Start{" "}
					</button>
				</Link>
			</div>
			<br></br>
		</div>
	);
};
export default Start;

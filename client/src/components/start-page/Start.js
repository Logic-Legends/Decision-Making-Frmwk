import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
        <h4>Voting Method For Group Decision</h4>
        <p>This tool is designed to help facilities group decision that involve voting.</p>
        <ul>
            <li>It for team of 2 or more people.</li>
        </ul>
          <h4>Who should complete this tool?</h4>
          <p>1 or 2 people with good project knowledge, such as Project Manager and Team Lead. </p>
          <h4>What is the outcome? </h4>
          <p>You will receive a recommendation of the type of voting method to use in your group decision. </p>
          <h4>How much time will I need? </h4>
          <p>We advise you spend up to 30 minutes in using the tool. </p>
      <button><Link to="/decision-making-framework">Start</Link></button>
    </div>
  );
};
export default Start;
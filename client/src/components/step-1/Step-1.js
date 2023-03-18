import React from "react";
import QuestionMark from "./images/question-mark.png"; // relative path to image
const Step1 = () => {

  return (
    <div className="container">
        <h1>What is the goal?</h1>
        <div className="border-decision-framework">
          <div>

          <p>Defining the goal will help you determine what kind of information you need to make a decision. <img className="question-mark-pages" src={QuestionMark} alt="Question Mark"></img></p>

            <input
              id="goal"
              type="text"
              name="input-goal"
              required
            />
          <button className = "add-goal" type="submit">NEXT</button>
          </div>
        </div>
    </div>
  );
};
export default Step1;

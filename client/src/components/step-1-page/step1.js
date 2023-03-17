import React from "react";

export const Step1 = () => {
  return (
    <div className="container">
        <h1>What is the goal?</h1>
        <div className="border-decision-framework">
          <p>Defining the goal will help you determine what kind of information you need to make a decision.</p>
          <img src="./images/question-mark.png" alt="Question Mark"></img>

            <input
              id="goal"
              type="text"
              name="input-goal"
              required
            />

          <button className = "add-goal" type="submit">NEXT</button>
        </div>
    </div>
  );
};
export default Step1;
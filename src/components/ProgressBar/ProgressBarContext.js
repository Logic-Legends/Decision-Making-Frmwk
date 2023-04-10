import React, { useState } from "react";
import App from "../../App";
export const stepProgressContext = React.createContext();
function ProgressBarContext() {
	const [currentStep, setCurrentStep] = useState(1);
	const [completedStep, setCompletedStep] = useState(1);
	const [enteredData, setEnteredData] = useState([]);
	const [defineGoalText, setDefineGoalText] = useState("");//Step1
	const [selectedOptionTypeOfInformation, setSelectedOptionTypeOfInformation] = useState(null);//Step6a
	const [selectedOptionAmountOfInformation, setSelectedOptionAmountOfInformation] = useState(null);//Step6b
	const labelArray = [
		{ id: "1", display:"1",location: "/define-goal" },
		{ id: "2", display:"2", location: "/decision-makers" },
		{ id: "3", display:"3", location: "/importance" },
		{ id: "4", display:"4", location: "/capacity" },
		{ id: "5", display:"5", location: "/type-of-decision" },
		{ id: "6", display:"6", location: "/type-of-information" },
		{ id: "7", display:"7", location: "/amount-of-information" },
		{ id:"8", display: "\u25c9", location: "/results" },
		// { id: "8", location: "/results" },

	];
	const [users, setUsers] = useState([]);
	const [selectedOption, setSelectedOption] = useState(null);
	const [selectedOptionCapacity, setSelectedOptionCapacity] = useState(null);
	const [selectedOptionDecision, setSelectedOptionDecision] = useState(null);
	const [explicitVotingMethod, setExplicitVotingMethod] = useState();
	const [relativeVotingMethod1, setRelativeVotingMethod1] = useState();
	const [relativeVotingMethod2, setRelativeVotingMethod2] = useState();
	function setStep(step) {
		setCurrentStep(step);
	}

	function setStepCompleted(step){
		setCompletedStep(step);
	}

	function getStepIdFromLocation(location) {
		const label = labelArray.find((label) => label.location === location);
		return label ? label.id : null;
	  }
	return (
		<>
			<stepProgressContext.Provider
				value={{
					defineGoalText,
					setDefineGoalText,
					selectedOptionTypeOfInformation,
					setSelectedOptionTypeOfInformation,
					selectedOptionAmountOfInformation,
					setSelectedOptionAmountOfInformation,
					currentStep,
					setCurrentStep,
					enteredData,
					setEnteredData,
					labelArray,
					setStep,
					getStepIdFromLocation,
					completedStep,
					setStepCompleted,
					users,
					setUsers,
					selectedOption,
					setSelectedOption,
					selectedOptionCapacity,
					setSelectedOptionCapacity,
					selectedOptionDecision,
					setSelectedOptionDecision,
					explicitVotingMethod,
					setExplicitVotingMethod,
					relativeVotingMethod1,
					setRelativeVotingMethod1,
					relativeVotingMethod2,
					setRelativeVotingMethod2,
				}}
			>
				<App />
			</stepProgressContext.Provider>
		</>
	);
}
export default ProgressBarContext;
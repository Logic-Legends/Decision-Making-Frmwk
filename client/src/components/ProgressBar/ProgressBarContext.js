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
		{ id: "1", location: "/define-goal" },
		{ id: "2", location: "/decision-makers" },
		{ id: "3", location: "/importance" },
		{ id: "4", location: "/capacity" },
		{ id: "5", location: "/time-resource" },
		{ id: "6", location: "/type-of-decision" },
		{ id: "7", location: "/type-of-information" },
		{ id: "8", location: "/amount-of-information" },
		{ id: "9", location: "/voting-method" },
		{ id: "10", location: "/results" },
		// { id: "11", location: "/review" },
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
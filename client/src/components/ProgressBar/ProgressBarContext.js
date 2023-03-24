import React , { useState } from "react";
import App from "../../App";

export const stepProgressContext=React.createContext();

function ProgressBarContext(){
	const [currentStep, setCurrentStep] = useState(1);
	const [enteredData, setEnteredData] = useState([]);
	const [defineGoalText,setDefineGoalText] = useState("");//Step1
  	const [selectedOptionTypeOfInformation,setSelectedOptionTypeOfInformation] = useState( null );//Step6a
	const [selectedOptionAmountOfInformation,setSelectedOptionAmountOfInformation] = useState( null );//Step6b
	const labelArray = [
		"1",
		"2",
		"3A",
		"3B",
		"4",
		"5",
		"6A",
		"6B",
		"7",
	];
	const [users, setUsers] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const[selectedOptionCapacity, setSelectedOptionCapacity]=useState(null);
	const [selectedOptionDecision, setSelectedOptionDecision] = useState(null);
	function setStep(step) {
		setCurrentStep(step);
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
					users,
					setUsers,
					selectedOption,
					setSelectedOption,
					selectedOptionCapacity,
					setSelectedOptionCapacity,
					selectedOptionDecision,
					setSelectedOptionDecision,
				}}
			>
				<App />
			</stepProgressContext.Provider>
		</>
	);
}


export default ProgressBarContext;
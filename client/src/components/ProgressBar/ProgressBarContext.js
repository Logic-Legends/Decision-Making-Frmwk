import React , { useState } from "react";
import App from "../../App";

export const stepProgressContext=React.createContext();

function ProgressBarContext(){

    const [currentStep,setCurrentStep]=useState(1);
    const [enteredData,setEnteredData]=useState([]);
	const labelArray=["Step 1","Step 2","Step 3","Step 4","Step 5","Step 6","Step 7"];
    const [users,setUsers]=useState([]);
	function setStep(step){
		setCurrentStep(step);
	}



    return (
    <>
     <stepProgressContext.Provider value={{ currentStep,setCurrentStep,enteredData,setEnteredData,labelArray,setStep,users,setUsers }}>
        <App />
     </stepProgressContext.Provider>
    </>
);
}


export default ProgressBarContext;
import React , { useState } from "react";
import App from "../../App";
export const stepProgressContext=React.createContext();

function ProgressContext(){

    const [currentStep,setCurrentStep]=useState(1);
    const [enteredData,setEnteredData]=useState([]);

    return (
    <>
     <stepProgressContext.Provider value={{ currentStep,setCurrentStep,enteredData,setEnteredData }}>
        <App />
     </stepProgressContext.Provider>
    </>
);
}


export default ProgressContext;
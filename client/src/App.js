import { useState,useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./components/start-page/Start";
import DecisionMakers from "./components/step-2/DecisionMakers";
import TimeResource from "./components/step-4/TimeResource";
import "./App.css";
import Importance from "./components/step-3a/Importance";
import Capacity from "./components/step-3b/Capacity";
import DefineGoal from "./components/step-1/DefineGoal";
import TypeOfInformation from "./components/step-6a/TypeOfInformation";
import AmountOfInformation from "./components/step-6b/AmountOfInformation";
import ProgressBar  from "./components/ProgressBar/ProgressBar";
import { stepProgressContext } from "./components/ProgressBar/ProgressBarContext";


const App = () => {
   const { currentStep,labelArray,setStep }=useContext(stepProgressContext);
	//This is the state of the progress bar
	// const [currentStep,setCurrentStep]=useState(1);
	// const labelArray=["Step 1","Step 2","Step 3","Step 4","Step 5","Step 6","Step 7"];

	// function setStep(step){
	// 	setCurrentStep(step);
	// }

return (
	<div>
		<header>
		<ProgressBar labelArray={labelArray} currentStep={currentStep} setStep={setStep}></ProgressBar>
		<p>Selected Step: {currentStep}</p>
	    <button onClick={()=>setStep(currentStep-1)}>Previous Step</button>
	    <button onClick={()=>setStep(currentStep+1)}>Next Step</button>

		</header>
		<Routes>
			{/* <Route path="/decision-makers" element={<DecisionMakers />} /> */}
			<Route path="/" element={<Start />} exact />
			<Route path="/define-goal" element={<DefineGoal />} />
			<Route path="/decision-makers" element={<DecisionMakers />} />
			<Route path="/Importance" element={<Importance />} />
			<Route path="/Capacity" element={<Capacity />} />
			<Route path="/time-resource" element={<TimeResource />} />
			<Route path="/type-of-information" element={<TypeOfInformation />} />
			<Route path="/amount-of-information" element={<AmountOfInformation />} />
		</Routes>
		<footer></footer>
	</div>
);
};

export default App;

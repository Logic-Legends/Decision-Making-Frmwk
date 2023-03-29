import { useContext } from "react";
import { Route, Routes,useLocation } from "react-router-dom";
import Start from "./components/start-page/Start";
import DecisionMakers from "./components/step-2/DecisionMakers";
import TimeResource from "./components/step-4/TimeResource";
import "./App.css";
import Importance from "./components/step-3a/Importance";
import Capacity from "./components/step-3b/Capacity";
import DefineGoal from "./components/step-1/DefineGoal";
import TypeOfInformation from "./components/step-6a/TypeOfInformation";
import AmountOfInformation from "./components/step-6b/AmountOfInformation";
import Results from "./components/Result/Results";
import ProgressBar  from "./components/ProgressBar/ProgressBar";
import { stepProgressContext } from "./components/ProgressBar/ProgressBarContext";
import TypeOfDecision from "./components/step-5/TypeOfDecision";
import VotingMethod from "./components/step-7/Voting-Method";
import ResultVotingMethod from "./components/step-7/ResultVotingMethod";
import ReviewPage from "./components/Result/Review";


const App = () => {
   const { currentStep,labelArray,setStep }=useContext(stepProgressContext);
   const location=useLocation();


return (
	<div>
		<header>
			{ location.pathname !== "/" && location.pathname !== "/review" && (
		<>
		<ProgressBar labelArray={labelArray} currentStep={currentStep} setStep={setStep}></ProgressBar>
		</>
			)}

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
			<Route path="/Results" element={<Results />} />
			<Route path="/type-of-decision" element={<TypeOfDecision />} />
			<Route path="/Voting-Method" element={<VotingMethod />} />
			<Route path="/ResultVotingMethod" element={<ResultVotingMethod />} />
			<Route path="/review" element={<ReviewPage />} />
		</Routes>
		<footer></footer>
	</div>
);
};

export default App;

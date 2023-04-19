import { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Start from "./components/start-page/Start";
import DecisionMakers from "./components/step-2/DecisionMakers";
import "./App.css";
import Importance from "./components/step-3a/Importance";
import Capacity from "./components/step-3b/Capacity";
import DefineGoal from "./components/step-1/DefineGoal";
import TypeOfInformation from "./components/step-6a/TypeOfInformation";
import AmountOfInformation from "./components/step-6b/AmountOfInformation";
import Results from "./components/Result/Results";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import { stepProgressContext } from "./components/ProgressBar/ProgressBarContext";
import TypeOfDecision from "./components/step-5/TypeOfDecision";
import VotingMethod from "./components/step-7/Voting-Method";
import ResultVotingMethod from "./components/step-7/ResultVotingMethod";


const App = () => {
	const { currentStep, labelArray, setStep } = useContext(stepProgressContext);
	const location = useLocation();

	return (
		<div>
			<header>
				{location.pathname !== "/" && location.pathname !== "/review" && (
					<>
						<ProgressBar
							labelArray={labelArray}
							currentStep={currentStep}
							setStep={setStep}
						></ProgressBar>
					</>
				)}
			</header>
			<Routes>
				{/* <Route path="/decision-makers" element={<DecisionMakers />} /> */}
				<Route path="/" element={<Start />} exact />
				<Route path="/define-goal" element={<DefineGoal />} />
				<Route path="/decision-makers" element={<DecisionMakers />} />
				<Route path="importance" element={<Importance />} />
				<Route path="/capacity" element={<Capacity />} />
				<Route path="/type-of-information" element={<TypeOfInformation />} />
				<Route
					path="/amount-of-information"
					element={<AmountOfInformation />}
				/>
				<Route path="/results" element={<Results />} />
				<Route path="/type-of-decision" element={<TypeOfDecision />} />
				<Route path="/voting-method" element={<VotingMethod />} />
				<Route path="/result-voting-method" element={<ResultVotingMethod />} />
				
			</Routes>
			<footer></footer>
		</div>
	);
};

export default App;

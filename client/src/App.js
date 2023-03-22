import { Route, Routes } from "react-router-dom";
import Start from "./components/start-page/Start";
import DecisionMakers from "./components/step-2/DecisionMakers";
import TimeResource from "./components/step-4/TimeResource";
import "./App.css";
import Importance from "./components/step-3a/Importance";
import Capacity from "./components/step-3b/Capacity";
import DefineGoal from "./components/step-1/DefineGoal";

const App = () => (
	<div>
		<header></header>
		<Routes>
			{/* <Route path="/decision-makers" element={<DecisionMakers />} /> */}
			<Route path="/" element={<Start />} exact />
			<Route path="/define-goal" element={<DefineGoal />} />
			<Route path="/decision-makers" element={<DecisionMakers />} />
			<Route path="/Importance" element={<Importance />} />
			<Route path="/Capacity" element={<Capacity />} />
			<Route path="/time-resource" element={<TimeResource />} />
		</Routes>
		<footer></footer>
	</div>
);

export default App;

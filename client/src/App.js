import { Route, Routes } from "react-router-dom";
import Start from "./components/start-page/Start";
import DecisionMakers from "./components/step-2/DecisionMakers";
import Step1 from "./components/step-1/Step-1";
import Step4 from "./components/step-4/Step-4";
import "./App.css";
const App = () => (
	<div>
	<header>

	</header>

	<Routes>

		<Route path="/decision-makers" element={<DecisionMakers />} />
		<Route path="/" element={<Start />} exact />
		<Route path="/goal" element={<Step1 />} />
		<Route path="/timeAndResource" element={<Step4 />} />
	</Routes>
<footer>

</footer>
	</div>
);

export default App;

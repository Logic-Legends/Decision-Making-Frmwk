import { Route, Routes } from "react-router-dom";
import Start from "./components/start-page/Start";
import DecisionMakers from "./components/step-2/DecisionMakers";
import Step1 from "./components/step-1/Step-1";
import Step1 from "./components/step-1/Step-1";
import DecisionMakers from "./components/step-2/DecisionMakers";
const App = () => (
	<div>
	<header>

	</header>

	<Routes>

		<Route path="/decision-makers" element={<DecisionMakers />} />
		<Route path="/" element={<Start />} exact />
		<Route path="/goal" element={<Step1 />} />
		<Route path="/decision-makers" element={<DecisionMakers />} />
	</Routes>
<footer>

</footer>
	</div>
);

export default App;

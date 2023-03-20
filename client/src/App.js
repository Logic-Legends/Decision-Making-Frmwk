import { Route, Routes } from "react-router-dom";
import Start from "./components/start-page/Start";
import DecisionMakers from "./components/step-2/DecisionMakers";
import Step1 from "./components/step-1/Step-1";
import Importance from "./components/step-3a/Importance";
import Capacity from "./components/step-3b/Capacity";
const App = () => (
	<div>
		<header></header>
		<Routes>
			<Route path="/decision-makers" element={<DecisionMakers />} />
			<Route path="/" element={<Start />} exact />
			<Route path="/goal" element={<Step1 />} />
      <Route path="/decision-makers" element={<DecisionMakers />} />
			<Route path="/Importance" element={<Importance />} />
			<Route path="/Capacity" element={<Capacity />} />
		</Routes>
		<footer></footer>

	</div>
);

export default App;

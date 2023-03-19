import { Route, Routes } from "react-router-dom";
import Start from "./components/start-page/Start";
import DecisionMakers from "./components/step-2/DecisionMakers";
const App = () => (
	<div>
	<header>

	</header>
	<Routes>
		<Route path="/" element={<Start />} />
		<Route path="/decision-makers" element={<DecisionMakers />} />
	</Routes>
<footer>

</footer>
	</div>
);

export default App;

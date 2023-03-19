import { Route, Routes } from "react-router-dom";
import Start from "./components/start-page/Start";
import Step1 from "./components/step-1/Step-1";
const App = () => (
	<div>
	<header>

	</header>

	<Routes>
		<Route path="/" element={<Start />} exact />
		<Route path="/goal" element={<Step1 />} />
	</Routes>
<footer>

</footer>
	</div>
);

export default App;

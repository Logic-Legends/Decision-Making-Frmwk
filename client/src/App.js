import { Route, Routes } from "react-router-dom";
import ImportanceStep from "./components/step-3a/ImportanceStep";
import CapacityStep from "./components/step-3b/CapacityStep";

import About from "./pages/About";
import Home from "./pages/Home";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/ImportanceStep" element={<ImportanceStep />} />
		<Route path="/CapacityStep" element={<CapacityStep />} />
	</Routes>
);

export default App;

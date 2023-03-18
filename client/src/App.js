import { Route, Routes } from "react-router-dom";
import "./components/step-2/DecisionMakers.css";
import About from "./pages/About";
import Home from "./pages/Home";
import DecisionMakers from "./components/step-2/DecisionMakers";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/Decision-Makers" element={<DecisionMakers />} />
	</Routes>
);

export default App;

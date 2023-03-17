import { Route, Routes } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
import  Step1 from "./components/step-1-page/step1";
import "./App.css";

const App = () => (
	<Routes>
		<Route path="/" element={<Step1 />} />
		{/* <Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} /> */}
	</Routes>
);



export default App;

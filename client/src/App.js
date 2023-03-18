import { Route, Routes } from "react-router-dom";
import Start from "./components/start-page/Start";
const App = () => (
	<div>
	<header>

	</header>
	<Routes>
		<Route path="/" element={<Start />} />
	</Routes>
<footer>

</footer>
	</div>
);

export default App;

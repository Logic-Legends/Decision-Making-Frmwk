import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import ProgressBarContext from "./components/ProgressBar/ProgressBarContext";

createRoot(document.getElementById("root")).render(
	<HashRouter>
	<ProgressBarContext>
		<App />
		</ProgressBarContext>
	</HashRouter>
);

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import ProgressBarContext from "./components/ProgressBar/ProgressBarContext";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
	<ProgressBarContext>
		<App />
		</ProgressBarContext>
	</BrowserRouter>
);

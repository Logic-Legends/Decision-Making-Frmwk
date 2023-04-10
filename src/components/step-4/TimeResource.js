import React, { useContext, useState, useEffect } from "react";
import { Link ,useNavigate,useLocation } from "react-router-dom";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import HandleToolTip from "../ProgressBar/HandleToolTip";

const TimeResource = () => {

	// progress bar step number
	const stepNumber = 5;
	const navigate = useNavigate();
	const location = useLocation();
	const { pathname } = location;

	const [modalShow, setModalShow] = React.useState(false);

	const { setStep, currentStep ,setStepCompleted,getStepIdFromLocation } = useContext(stepProgressContext);

	//Used for pass value inside the table
	const [titleAdvice, setTitleAdvice] = useState();
	const [textAdvice, setTextAdvice] = useState();

	const selectedOption = sessionStorage.getItem("selectedOption");
	const selectedOptionCapacity = sessionStorage.getItem("selectedOptionCapacity");


	const checkAdvice = () => {
		if (selectedOption === "Low" && selectedOptionCapacity === "Low") {
			setTitleAdvice("Low Importance and Low Capacity");
			setTextAdvice("Choose a single iteration, low complexity voting method. Don't spend too much time gathering information.");
			sessionStorage.setItem(
				"textAdvice",
				"Choose a single iteration, low complexity voting method. Don't spend too much time gathering information."
			);
		} else if (selectedOption === "Low" && selectedOptionCapacity === "High") {
			setTitleAdvice("Low Importance and High Capacity");
			setTextAdvice("Start the decision-making process later, take more time to gather information, or use a more complex voting method.");
			sessionStorage.setItem(
				"textAdvice",
				"Start the decision-making process later, take more time to gather information, or use a more complex voting method."
			);

		} else if (selectedOption === "High" && selectedOptionCapacity === "Low") {
			setTitleAdvice("High Importance and Low Capacity");
			setTextAdvice("Start sooner, de-prioritize other tasks that are taking up capacity, or use a less complex voting method that requires less information.");
			sessionStorage.setItem(
				"textAdvice",
				"Start sooner, de-prioritize other tasks that are taking up capacity, or use a less complex voting method that requires less information."
			);

		} else if (selectedOption === "High" && selectedOptionCapacity === "High") {
			setTitleAdvice("High Importance and High Capacity");
			setTextAdvice("Allocate as much time as you can to gather information and make a good decision. You could use a more complex voting method.");
			sessionStorage.setItem(
				"textAdvice",
				"Allocate as much time as you can to gather information and make a good decision. You could use a more complex voting method."
			);
		}
	};

	useEffect(() => {
		checkAdvice();
	}, [selectedOption, selectedOptionCapacity]);

	const handleNextClick= () => {
			setStep(stepNumber + 1);
			setStepCompleted(stepNumber+1);
			navigate("/type-of-decision");
		};

  // update the step number when using browser navigation or refreshing the component
  useEffect(() => {
	setStep(getStepIdFromLocation(pathname));
  }, [pathname]);

  const modalTitle = "<strong>Time and Resource Allocation</strong>  ";
  const modalText = "Spending more time on decisions creates an opportunity to gather and  use more information, leading to higher specificity and detail in the voting method.";


	return (
		<div className="container">
			<HandleToolTip
				show={modalShow}
				onHide={() => setModalShow(false)}
				title={modalTitle}
				text={modalText}
			/>

			<h2>
				Time and Resource allocation{" "}
				<a className="question-mark-button" onClick={() => setModalShow(true)}>?</a>
			</h2>
			<div className="border-decision-framework-pages">
				<table>
					<tbody>
						<tr className="table-background">
							<th>{titleAdvice}</th>
						</tr>
						<tr>
							<td>
								<h6>Advice:</h6>
								<p>
									{textAdvice}
								</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div id="button-same-line">
				<Link to="/capacity">	<button className="inner" onClick={() => setStep(stepNumber - 1)}>BACK</button></Link>
				<Link to="/type-of-decision"><button className="inner" onClick={handleNextClick}>NEXT</button></Link>
			</div>
		</div>
	);
};

export default TimeResource;

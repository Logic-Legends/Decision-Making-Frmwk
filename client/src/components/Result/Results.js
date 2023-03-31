import React,{ useContext ,useEffect } from "react";
import Pdf from "../pdf-generation/Pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useNavigate,useLocation } from "react-router-dom";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import Signup from "./Sign-up";

const Results = () => {

	const defineGoalText = sessionStorage.getItem("defineGoalText");
	const users = JSON.parse(sessionStorage.getItem("users"));
	const selectedOption = sessionStorage.getItem("selectedOption");
	const selectedOptionCapacity = sessionStorage.getItem(
		"selectedOptionCapacity"
	);
	const selectedOptionDecision = sessionStorage.getItem(
		"selectedOptionDecision"
	);
	const selectedOptionTypeOfInformation = sessionStorage.getItem(
		"selectedOptionTypeOfInformation"
	);
	const selectedOptionAmountOfInformation = sessionStorage.getItem(
		"selectedOptionAmountOfInformation"
	);
	const explicitVotingMethod = sessionStorage.getItem("explicitVotingMethod");
	const relativeVotingMethod1 = sessionStorage.getItem("relativeVotingMethod1");
	const relativeVotingMethod2 = sessionStorage.getItem("relativeVotingMethod2");
	const textAdvice = sessionStorage.getItem("textAdvice");
	const advice = sessionStorage.getItem("advice");
	const navigate = useNavigate();
	const { setStep,setStepCompleted,getStepIdFromLocation  } = useContext(stepProgressContext);

	const stepNumber = 10;
	const location = useLocation();
	const { pathname } = location;

  // update the step number when using browser navigation or refreshing the component
  useEffect(() => {
	setStep(getStepIdFromLocation(pathname));
	console.log("Step no.:",getStepIdFromLocation(pathname));
  }, [pathname]);


	return (
		<div className="container">
			<h3>Results</h3>
			<p>
				Thank you for using the <strong>Voting Methods for Group Decisions tool!</strong> We hope the recommended voting method(s) below will help you make an informed decision.
			</p>
			<h6>Summary</h6>
			<p>Below is a summary of all your responses. You can click on individual steps in the progress bar to go back and change any of the responses.</p>
			<div>
				<table>
					<tbody>
						<tr className="table-background">
							<th>Recommended Voting Method(s)</th>
							{selectedOptionTypeOfInformation === "Explicit" ? (
								<th>{explicitVotingMethod}</th>
							) : (
								<th>{relativeVotingMethod1 + " | " + relativeVotingMethod2}</th>
							)}
						</tr>
						<tr>
							<td>What is the goal?</td>
							<td>{defineGoalText}</td>
						</tr>
						<tr>
							<td>Who is making the decision?</td>
							<td> {users.map((user, index) => (
								<p key={index}>{user.name}</p>
							))}</td>

						</tr>
						<tr>
							<td>Importance</td>
							<td>{selectedOption}</td>
						</tr>
						<tr>
							<td>Capacity</td>
							<td>{selectedOptionCapacity}</td>
						</tr>
						<tr>
							<td>Time and Resource</td>
							<td>{textAdvice}</td>
						</tr>
						<tr>
							<td>Type of Decision </td>
							<td>{selectedOptionDecision + " decision: " + advice}</td>
						</tr>
						<tr>
							<td>Type of Information</td>
							<td>{selectedOptionTypeOfInformation}</td>
						</tr>
						<tr>
							<td>Amount of Information </td>
							<td>{selectedOptionAmountOfInformation}</td>
						</tr>
					</tbody>
				</table>


			</div>
			<div className="result-buttons-container">

				<PDFDownloadLink className="pdf-grid"
					document={
						<Pdf
							selectedOptionAmountOfInformation={
								selectedOptionAmountOfInformation
							}
							selectedOptionTypeOfInformation={
								selectedOptionTypeOfInformation
							}
							selectedOptionDecision={selectedOptionDecision}
							selectedOptionCapacity={selectedOptionCapacity}
							selectedOption={selectedOption}
							defineGoalText={defineGoalText}
							users={users}
							textAdvice={textAdvice}
							advice={advice}
							relativeVotingMethod1={relativeVotingMethod1}
							relativeVotingMethod2={relativeVotingMethod2}
							explicitVotingMethod={explicitVotingMethod}
						/>
					}
					fileName="decision.pdf"
				>

					{({ loading }) =>
						loading ? (
							<button className="inner-pdf-button ">Loading document... </button>
						) : (
							<button className="inner-pdf-button "> Download as a PDF</button>
						)
					}

				</PDFDownloadLink>
				<button className="inner-review inner-pdf-button" onClick={() => navigate("/review")}> Review</button>
				<Signup />
			</div>
		</div>
	);
};
export default Results;
import React from "react";
import Pdf from "../pdf-generation/Pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useNavigate } from "react-router-dom";
import Signup from "./Sign-up";
import Review from "./Review";

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
	return (
		<div className="container">
			<h3>You have completed the tool. Please check your responses below.</h3>
			<p>
				(Info)You can click on individual steps in the progress bar to go back
				and change any of the responses.
			</p>
			<div>
				<table>
					<tbody>
						<tr className="table-background">
							<th>Voting Method</th>
							{selectedOptionTypeOfInformation === "Explicit" ? (
								<th>{explicitVotingMethod}</th>
							) : (
								<th>{relativeVotingMethod1 + " | " + relativeVotingMethod2}</th>
							)}
						</tr>
						<tr>
							<td>What</td>
							<td>{defineGoalText}</td>
						</tr>
						<tr>
							<td>Who</td>
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
				<div className="start-btn">
					<PDFDownloadLink
						className="inner"
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
								<button>Loading document... </button>
							) : (
								<button> Download as a PDF</button>
							)
						}
					</PDFDownloadLink>
				</div>

			</div>
			<button onClick={()=>navigate("/review")}> Leave review</button>
			<Signup />
		</div>
	);
};
export default Results;
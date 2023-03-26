import React from "react";
import Pdf from "../pdf-generation/Pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useContext, useEffect, useState } from "react";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
const Results = () => {
	//context variable
	const { defineGoalText, setDefineGoalText } = useContext(stepProgressContext);
	const { users, setUsers } = useContext(stepProgressContext);
	const { selectedOption, setSelectedOption } = useContext(stepProgressContext);
	const { selectedOptionCapacity, setSelectedOptionCapacity } = useContext(stepProgressContext);
	const { selectedOptionDecision, setSelectedOptionDecision } = useContext(stepProgressContext);
	const { selectedOptionTypeOfInformation, setSelectedOptionTypeOfInformation } = useContext(stepProgressContext);
	const { selectedOptionAmountOfInformation, setSelectedOptionAmountOfInformation } = useContext(stepProgressContext);
	const{ explicitVotingMethod, setExplicitVotingMethod }=useContext(stepProgressContext);
	const { relativeVotingMethod1, setRelativeVotingMethod1 } =
		useContext(stepProgressContext);
	const { relativeVotingMethod2, setRelativeVotingMethod2 } =
		useContext(stepProgressContext);
	const [localStorageValues, setLocalStorageValues] = useState({});
	// Use useEffect to save context variables to localStorage
	useEffect(() => {
		const localStorageData = JSON.parse(localStorage.getItem("decisionData"));
		setLocalStorageValues(localStorageData);
	}, []);
	useEffect(() => {
		localStorage.setItem(
			"decisionData",
			JSON.stringify({
				defineGoalText,
				users,
				selectedOption,
				selectedOptionCapacity,
				selectedOptionDecision,
				selectedOptionTypeOfInformation,
				selectedOptionAmountOfInformation,
			})
		);
	}, [
	]);
	return (
		<div className="container">
			<h1>You have completed the tool. Please check your responses below.</h1>
			<p>
				(Info)You can click on individual steps in the progress bar to go back
				and change any of the responses.
			</p>
			<div className="border-decision-framework-pages">
				<table>
					<tbody>
						<tr className="table-background">
							<th>Voting Method</th>
							<th>Value from step7</th>
						</tr>
						<tr>
							<td>What</td>
							<td>{defineGoalText}</td>
						</tr>
						<tr>
							<td>Who</td>
							{users.map((user) => (
								<td>{user.name}</td>
							))}
						</tr>
						<tr>
							<td>Importance</td>
							<td>{selectedOption}</td>
						</tr>
						<tr>
							<td>Capacity</td>
							<td>{selectedOptionCapacity}</td>
						</tr>
						{/* <tr>
							<td>Time and Resource</td>
							<td></td>
						</tr> */}
						<tr>
							<td>Type of Decision </td>
							<td>{selectedOptionDecision}</td>
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
			<div className="start-btn">
				<PDFDownloadLink className="inner" document={<Pdf
					selectedOptionAmountOfInformation={selectedOptionAmountOfInformation}
					selectedOptionTypeOfInformation={selectedOptionTypeOfInformation}
					selectedOptionDecision={selectedOptionDecision}
					selectedOptionCapacity={selectedOptionCapacity}
					selectedOption={selectedOption}
					defineGoalText={defineGoalText}
				 	users={users}
					/>} fileName="decision.pdf">
					{({ loading }) =>
						loading ? (
						<button>Loading document... </button>
						) : (
						<button> Download as a PDF!</button>
						)
					}
				</PDFDownloadLink>
			</div>
		</div>
	);
};
export default Results;
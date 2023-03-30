import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";


const VotingMethod = () => {
	const navigate = useNavigate();

	//Used to get data to select radio button
	const { setStep,setStepCompleted } = useContext(stepProgressContext);

	const stepNumber = 9;

	const [explicitVotingMethod, setExplicitVotingMethod] = useState();
	const [explicitVotingMethodDesc, setExplicitVotingMethodDesc] = useState();


	const [relativeVotingMethod1, setRelativeVotingMethod1] = useState();
	const [relativeVotingMethodDesc1, setRelativeVotingMethodDesc1] = useState();
	const [relativeVotingMethod2, setRelativeVotingMethod2] = useState();
	const [relativeVotingMethodDesc2, setRelativeVotingMethodDesc2] = useState();
	const [isStarted, setIsStarted] = useState(false);

	const selectedOptionTypeOfInformation = sessionStorage.getItem("selectedOptionTypeOfInformation");
	const selectedOptionAmountOfInformation = sessionStorage.getItem("selectedOptionAmountOfInformation");

	const showExplicit = () => {
		if (
			selectedOptionTypeOfInformation === "Explicit" &&
			selectedOptionAmountOfInformation === "Low"
		) {
			setExplicitVotingMethod("Approval voting");
			setExplicitVotingMethodDesc(
				'Voters choose "Yes" or "No" for each option, and the option with the most "Yes" votes wins.'
			);
			sessionStorage.setItem("explicitVotingMethod", "Approval voting");
		} else if (
			selectedOptionTypeOfInformation === "Explicit" &&
			selectedOptionAmountOfInformation === "Medium"
		) {
			setExplicitVotingMethod("Score voting");
			setExplicitVotingMethodDesc(
				"Voters give each optiona score on some objective metric, and the option with the highest score wins."
			);
			sessionStorage.setItem("explicitVotingMethod", "Score voting");
		} else if (
			selectedOptionTypeOfInformation === "Explicit" &&
			selectedOptionAmountOfInformation === "High"
		) {
			setExplicitVotingMethod("Delphi method");
			setExplicitVotingMethodDesc(
				"Involves multiple anonymous surveys followed by discussions about the aggregate survey results until a decision has been reached."
			);
			sessionStorage.setItem(
				"explicitVotingMethod",
				"Delphi method"
			);
		}
	};
	useEffect(() => {
		showExplicit();
	}, [selectedOptionTypeOfInformation, selectedOptionAmountOfInformation]);

	const showRelative = () => {
		if (
			selectedOptionTypeOfInformation === "Relative" &&
			selectedOptionAmountOfInformation === "Low"
		) {
			setRelativeVotingMethod1("First past the post");
			setRelativeVotingMethodDesc1(
				"Each voter selects their favorite option, and the option with the most votes wins."
			);
			sessionStorage.setItem(
				"relativeVotingMethod1",
				"First past the post"
			);
			setRelativeVotingMethod2("Multivoting");
			setRelativeVotingMethodDesc2(
				"Each voter has a certain number of votes to place on any of the options."
			);
			sessionStorage.setItem(
				"relativeVotingMethod2",
				"Multivoting"
			);
		} else if (
			selectedOptionTypeOfInformation === "Relative" &&
			selectedOptionAmountOfInformation === "Medium"
		) {
			setRelativeVotingMethod1("STAR voting");
			setRelativeVotingMethodDesc1(
				"Voters score the options, and the one the majority prefers wins."
			);
			sessionStorage.setItem(
				"relativeVotingMethod1", "STAR voting"
			);
			setRelativeVotingMethod2("Ranked choice");
			setRelativeVotingMethodDesc2(
				"Voters rank options based on preference, then a winner is chosen based on majority of first preference votes."
			);
			sessionStorage.setItem(
				"relativeVotingMethod2",
				"Ranked choice"
			);
		} else if (
			selectedOptionTypeOfInformation === "Relative" &&
			selectedOptionAmountOfInformation === "High"
		) {
			setRelativeVotingMethod1("Delphi method");
			setRelativeVotingMethodDesc1(
				"Involves multiple anonymous surveys followed by discussions about the aggregate survey results until a decision has been reached."
			);
			sessionStorage.setItem("relativeVotingMethod1", "Delphi method");
			setRelativeVotingMethod2("Quadratic voting");
			setRelativeVotingMethodDesc2(
				"Voters use credits on any option, but the marginal cost of adding an additional credit to an option is higher than adding the last credit."
			);
			sessionStorage.setItem("relativeVotingMethod2", "Quadratic voting");
		}
	};
	useEffect(() => {
		showRelative();
	}, [selectedOptionTypeOfInformation, selectedOptionAmountOfInformation]);

	//click next btn handler
	const handleNextClick = () => {

		setIsStarted(true);
		navigate("/Results");
		setStep(stepNumber + 1);
		setStepCompleted(stepNumber+1);

	};
	const handleBackClick = () => {
		setIsStarted(true);
		navigate("/amount-of-information");
		setStep(stepNumber - 1);
	};

	return (
		<div className="container">
			<h2>Recommended Voting Method</h2>
			<div className="border-decision-framework-pages">
				{selectedOptionTypeOfInformation === "Explicit" ? (
					<table>
						<tbody>
							<tr className="table-background">
								<th>{explicitVotingMethod}</th>
							</tr>
							<tr>
								<td>
									<p>{explicitVotingMethodDesc}</p>
								</td>
							</tr>
						</tbody>
					</table>
				) : (
					<>
						{" "}
						{selectedOptionTypeOfInformation === "Relative" ? (
							<>
								<table>
									<tbody>
										<tr className="table-background">
											<th>{relativeVotingMethod1}</th>
										</tr>
										<tr>
											<td>
												<p>{relativeVotingMethodDesc1}</p>
											</td>
										</tr>
									</tbody>
								</table>

								<table>
									<tbody>
										<tr className="table-background">
											<th>{relativeVotingMethod2}</th>
										</tr>
										<tr>
											<td>
												<p>{relativeVotingMethodDesc2}</p>
											</td>
										</tr>
									</tbody>
								</table>
							</>
						) : null}
					</>
				)}
				<p>
					To consult the full voting method use this{" "}
					<Link to="/ResultVotingMethod" >
						link
					</Link>
				</p>
			</div>
			{/* btn sections */}
			<section id="button-same-line">
				<button onClick={handleBackClick} className="inner">
					<Link to="/amount-of-information"></Link>
					Back
				</button>
				<button onClick={handleNextClick} className="inner">
					<Link to="/Results"></Link>Next
				</button>
			</section>
		</div>
	);
};


export default VotingMethod;
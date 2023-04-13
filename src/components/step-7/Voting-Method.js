import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";

const VotingMethod = () => {
	const navigate = useNavigate();

	//Used to get data to select radio button
	const { setStep, setStepCompleted, getStepIdFromLocation } =
		useContext(stepProgressContext);

	const stepNumber = 9;
	const location = useLocation();
	const { pathname } = location;

	const [explicitVotingMethod, setExplicitVotingMethod] = useState();
	const [explicitVotingMethodDesc, setExplicitVotingMethodDesc] = useState();

	const [relativeVotingMethod1, setRelativeVotingMethod1] = useState();
	const [relativeVotingMethodDesc1, setRelativeVotingMethodDesc1] = useState();
	const [relativeVotingMethod2, setRelativeVotingMethod2] = useState();
	const [relativeVotingMethodDesc2, setRelativeVotingMethodDesc2] = useState();
	const [isStarted, setIsStarted] = useState(false);

	const selectedOptionTypeOfInformation = sessionStorage.getItem(
		"selectedOptionTypeOfInformation"
	);
	const selectedOptionAmountOfInformation = sessionStorage.getItem(
		"selectedOptionAmountOfInformation"
	);

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
			sessionStorage.setItem("ApprovalDesc",`Voters choose "Yes" or "No" for each option, and the option with the most "Yes" votes wins.`)
		} else if (
			selectedOptionTypeOfInformation === "Explicit" &&
			selectedOptionAmountOfInformation === "Medium"
		) {
			setExplicitVotingMethod("Score voting");
			setExplicitVotingMethodDesc(
				"Voters give each option a score on some objective metric, and the option with the highest score wins."
			);
			sessionStorage.setItem("explicitVotingMethod", "Score voting");
			sessionStorage.setItem(
        "ScoreDesc",
        "Voters give each option score on some objective metric, and the option with the highest score wins."
      );
		} else if (
			selectedOptionTypeOfInformation === "Explicit" &&
			selectedOptionAmountOfInformation === "High"
		) {
			setExplicitVotingMethod("Delphi method");
			setExplicitVotingMethodDesc(
				"Involves multiple anonymous surveys followed by discussions about the aggregate survey results until a decision has been reached."
			);
			sessionStorage.setItem("explicitVotingMethod", "Delphi method");
			sessionStorage.setItem(
        "DelphiDesc",
        "Involves multiple anonymous surveys followed by discussions about the aggregate survey results until a decision has been reached."
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
			sessionStorage.setItem("relativeVotingMethod1", "First past the post");
			sessionStorage.setItem(
        "FirstDesc",
        "Each voter selects their favorite option, and the option with the most votes wins."
      );
			setRelativeVotingMethod2("Multivoting");
			setRelativeVotingMethodDesc2(
				"Each voter has a certain number of votes to place on any of the options."
			);
			sessionStorage.setItem("relativeVotingMethod2", "Multivoting");
			sessionStorage.setItem(
        "MultiDesc",
        "Each voter has a certain number of votes to place on any of the options."
      );
		} else if (
			selectedOptionTypeOfInformation === "Relative" &&
			selectedOptionAmountOfInformation === "Medium"
		) {
			setRelativeVotingMethod1("STAR voting");
			setRelativeVotingMethodDesc1(
				"Voters score the options, and the one the majority prefers wins."
			);
			sessionStorage.setItem("relativeVotingMethod1", "STAR voting");
			sessionStorage.setItem(
        "StarDesc",
        "Voters score the options, and the one the majority prefers wins."
      );
			setRelativeVotingMethod2("Ranked choice");
			setRelativeVotingMethodDesc2(
				"Voters rank options based on preference, then a winner is chosen based on majority of first preference votes."
			);
			sessionStorage.setItem("relativeVotingMethod2", "Ranked choice");
			sessionStorage.setItem(
        "RankDesc",
        "Voters rank options based on preference, then a winner is chosen based on majority of first preference votes."
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
			sessionStorage.setItem(
        "DelphiRDesc",
        "Involves multiple anonymous surveys followed by discussions about the aggregate survey results until a decision has been reached."
      );
			setRelativeVotingMethod2("Quadratic voting");
			setRelativeVotingMethodDesc2(
				"Voters use credits on any option, but the marginal cost of adding an additional credit to an option is higher than adding the last credit."
			);
			sessionStorage.setItem("relativeVotingMethod2", "Quadratic voting");
			sessionStorage.setItem(
        "QDesc",
        "Voters use credits on any option, but the marginal cost of adding an additional credit to an option is higher than adding the last credit."
      );
		}
	};
	useEffect(() => {
		showRelative();
	}, [selectedOptionTypeOfInformation, selectedOptionAmountOfInformation]);

	//click next btn handler
	const handleNextClick = () => {
		setIsStarted(true);
		navigate("/results");
		setStep(stepNumber + 1);
		// setStepCompleted(stepNumber + 1);
	};
	const handleBackClick = () => {
		setIsStarted(true);
		navigate("/amount-of-information");
		setStep(stepNumber - 1);
	};

	// update the step number when using browser navigation or refreshing the component
	useEffect(() => {
		setStep(getStepIdFromLocation(pathname));
		console.log(getStepIdFromLocation(pathname));
	}, [pathname]);

	return (
		<div className="container">
			{/* <h2>Recommended Voting Method(s)</h2> */}
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
					<Link to="/result-voting-method">Click here</Link> to view the full
					list of voting methods.
				</p>
			</div>
			{/* btn sections */}
			<section id="button-same-line">
				<button onClick={handleBackClick} className="inner">
					<Link to="/amount-of-information"></Link>
					Back
				</button>
			</section>
		</div>
	);
};

export default VotingMethod;

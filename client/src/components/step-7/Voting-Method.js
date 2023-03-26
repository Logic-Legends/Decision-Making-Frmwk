import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";


const VotingMethod=()=>{
	const navigate = useNavigate();
	// const {
	// 	selectedOptionTypeOfInformation,
	// 	setSelectedOptionTypeOfInformation,
	// } = useContext(stepProgressContext);
	// const {
	// 	selectedOptionAmountOfInformation,
	// 	setSelectedOptionAmountOfInformation,
	// } = useContext(stepProgressContext);

	const [explicitVotingMethod, setExplicitVotingMethod] = useState();
	const [explicitVotingMethodDesc, setExplicitVotingMethodDesc] = useState();
	const [selectedOptionVoting, setSelectedOptionVoting] = useState();

	const [relativeVotingMethod1, setRelativeVotingMethod1] = useState();
	const [relativeVotingMethodDesc1, setRelativeVotingMethodDesc1] = useState();
	const [relativeVotingMethod2, setRelativeVotingMethod2] = useState();
	const [relativeVotingMethodDesc2, setRelativeVotingMethodDesc2] = useState();
    const [isStarted, setIsStarted] = useState(false);

	const selectedOptionTypeOfInformation = sessionStorage.getItem("selectedOptionTypeOfInformation");
  	const selectedOptionAmountOfInformation = sessionStorage.getItem("selectedOptionAmountOfInformation");

	const showExplicit = () => {
		if (
			selectedOptionTypeOfInformation === "explicit" &&
			selectedOptionAmountOfInformation === "low"
		) {
			setExplicitVotingMethod("Approval voting");
			setExplicitVotingMethodDesc(
				'Voters choose "Yes" or "No" for each option, and the option with the most "Yes" votes wins.'
			);
		} else if (
			selectedOptionTypeOfInformation === "explicit" &&
			selectedOptionAmountOfInformation === "medium"
		) {
			setExplicitVotingMethod("Score voting");
			setExplicitVotingMethodDesc(
				"Voters give each optiona score on some objective metric, and the option with the highest score wins."
			);
		} else if (
			selectedOptionTypeOfInformation === "explicit" &&
			selectedOptionAmountOfInformation === "high"
		) {
			setExplicitVotingMethod("Delphi method");
			setExplicitVotingMethodDesc(
				"Involves multiple anonymous surveys followed by discussions about the aggregate survey results until a decision has been reached."
			);
		}
	};
	useEffect(() => {
		showExplicit();
	}, [selectedOptionTypeOfInformation, selectedOptionAmountOfInformation]);

	const showRelative = () => {
		if (
			selectedOptionTypeOfInformation === "relative" &&
			selectedOptionAmountOfInformation === "low"
		) {
			setRelativeVotingMethod1("First past the post");
			setRelativeVotingMethodDesc1(
				"Each voter selects their favorite option, and the option with the most votes wins."
			);
			setRelativeVotingMethod2("Multivoting");
			setRelativeVotingMethodDesc2(
				"Each voter has a certain number of votes to place on any of the options."
			);
		} else if (
			selectedOptionTypeOfInformation === "relative" &&
			selectedOptionAmountOfInformation === "medium"
		) {
			setRelativeVotingMethod1("STAR voting");
			setRelativeVotingMethodDesc1(
				"Voters score the options, and the one the majority prefers wins."
			);
			setRelativeVotingMethod2("Ranked choice");
			setRelativeVotingMethodDesc2(
				"Voters rank options based on preference, then a winner is chosen based on majority of first preference votes."
			);
		} else if (
			selectedOptionTypeOfInformation === "relative" &&
			selectedOptionAmountOfInformation === "high"
		) {
			setRelativeVotingMethod1("Delphi method");
			setRelativeVotingMethodDesc1(
				"Involves multiple anonymous surveys followed by discussions about the aggregate survey results until a decision has been reached."
			);
			setRelativeVotingMethod2("Quadratic voting");
			setRelativeVotingMethodDesc2(
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
			navigate("/Results");

	};
     const handleBackClick = () => {
				setIsStarted(true);
				navigate("/amount-of-information");
			};

    return (
			<div className="container">
				<h1>Recommended Voting Method</h1>
				<div className="border-decision-framework-pages">
				{selectedOptionTypeOfInformation === "explicit" ? (
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
						{selectedOptionTypeOfInformation === "relative" ? (
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
					<Link to="/ResultVotingMethod">link</Link>
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
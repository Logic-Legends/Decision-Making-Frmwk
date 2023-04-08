import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const ResultVotingMethod = () => {
	const navigate = useNavigate();
	const [isStarted, setIsStarted] = useState(false);
	const handleBackClick = () => {
		setIsStarted(true);
		navigate("/results");
	};
	return (
		<div className="container">
			<h3>Voting Methods</h3>
			<hr />
			<h6 className="table-header">Explicit</h6>
			<div>
				<table className="tbl-vote">
					<thead>
						<tr className="table-background">
							<th>Voting Methods</th>
							<th>Amount of Information Needed</th>
							<th>Examples</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<a href="https://electionscience.org/library/approval-voting/">Approval voting</a> (Voters choose &quot;Yes&quot; or &quot;No&quot; for each

								option, and the option with the most &quot;Yes&quot; votes wins).

							</td>
							<td>
								Enough information for voters to answer yes or no to each
								option.
							</td>
							<td>
								You want to narrow down a list of 100 research topics based

								on if they meet a certain set of criteria.

							</td>
						</tr>
						<tr>
							<td>
								<a href="https://electionscience.org/library/score-voting/">Score voting</a> (Voters give each option a score on some objective metric, and the option with the highest score wins).

							</td>
							<td>
								Enough information for voters to score each option from 1-5
								(less information). Enough information for voters to score
								each option from 1-100 (more information).
							</td>
							<td>
								You want to select 5 research topics to pursue this year
								from a list of 50 options. Your metric is: &quot;How many studies
								have already been published about this topic?&quot;

							</td>
						</tr>
						<tr>
							<td>
								<a href="https://www.bps.org.uk/psychologist/delphi-method">Delphi method</a> (Involves multiple anonymous surveys followed by discussions about the aggregate survey results until a decision has been reached).

							</td>
							<td>
								Enough information for voters to score each option
								individually according to an external, objective metric.
							</td>
							<td>
								You are making a very important decision, you have a long
								time frame and high team capacity, you would like to reach a
								consensus, and anonymity among voters is important.

							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<h6 className="table-header">Relative</h6>
			<div>
				<table className="tbl-vote">
					<thead>
						<tr className="table-background">
							<th>Voting Methods</th>
							<th>Amount of Information Needed</th>
							<th>Examples</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><a href="https://en.wikipedia.org/wiki/First-past-the-post_voting">First past the post</a> (Each voter selects their favorite option, and the option with the most votes wins.)
							</td>
							<td>
								Enough information for voters to pick a top 1 or 2 from the
								list of options.
							</td>
							<td>
								You want to select the target for your next campaign from a
								list of 10 options based on how they compare to each other
								on estimated tractability for your organization.
							</td>
						</tr>
						<tr>
							<td><a href="https://sixsigmastudyguide.com/multivoting/">Multivoting</a> (Each voter has a certain number of votes to place on any of the options.)
								</td>
							<td>
								Enough information for voters to pick a top 5 from the list
								of options.
							</td>
							<td>
								You want to select 5 research topics to pursue this year

								based on how motivated research staff are to investigate the
								topics.

							</td>
						</tr>
						<tr>
							<td><a href="https://www.starvoting.org/">STAR voting</a> (Voters score the options, and the one the majority prefers wins.)</td>
							<td>
								Enough information for voters to score the options, and the
								one the majority prefers wins.
							</td>
							<td>
								You want to select 5 research topics to pursue this year
								based on how motivated research staff are to investigate the
								topics.
							</td>
						</tr>
						<tr>
							<td><a href="https://ballotpedia.org/Ranked-choice_voting_(RCV)">Ranked choice</a> (Voters rank options based on preference, then a winner is chosen based on majority of first preference votes.)</td>
							<td>

								Enough information for voters to rank all of the options
								from highest to lowest preference.

							</td>
							<td>
								You want to see which research topics are the most and least
								preferred by allowing team members to rank them all.
							</td>
						</tr>
						<tr>
							<td><a href="https://www.bps.org.uk/psychologist/delphi-method">Delphi method</a> (Involves multiple anonymous surveys followed by discussions about the aggregate survey results until a decision has been reached.)</td>
							<td>
								Enough information for voters to score each option
								individually according to an external, objective metric.
							</td>
							<td>

								You are making a very important decision, you have a long
								time frame and high team capacity, you would like to reach a
								consensus, and anonymity among voters is important.

							</td>
						</tr>
						<tr>
							<td><a href="https://towardsdatascience.com/what-is-quadratic-voting-4f81805d5a06">Quadratic voting</a> (Voters use credits on any option, but the marginal cost of adding an additional credit to an option is higher than adding the last credit.)</td>
							<td>
								Enough information for voters to understand subtle
								differences between options so they can express a higher
								preference for a select few options over many others.
							</td>
							<td>
								You would like to capture more details about voter
								preferences. You want to allow team members to vote multiple
								times for the same option if they feel strongly about it.
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<section id="button-same-line">
				<button onClick={handleBackClick} className="inner">
					<Link to="/results"></Link>
					Back
				</button>
			</section>
		</div>
	);
};

export default ResultVotingMethod;
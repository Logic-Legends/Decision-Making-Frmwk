import React from "react";

const VotingMethod=()=>{
    return (
			<div className="container">
				<h1>Recommended Voting Method</h1>

				<div className="border-decision-framework-pages">
					<h2 className="table-header">Explicit</h2>
					<div className="vmethod-table-container ">
						<table className="tbl-explicit ">
							<thead>
								<tr>
									<th>Amount of Info</th>
									<th>Voting Method</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Low</td>
									<td>Approval Voting</td>
								</tr>
								<tr>
									<td>Medium</td>
									<td>Score Voting</td>
								</tr>
								<tr>
									<td>High</td>
									<td>Delphi Method</td>
								</tr>
							</tbody>
						</table>
					</div>
					<h2 className="table-header">Relative</h2>
					<div className="vmethod-table-container">
						<table>
							<thead>
								<tr>
									<th>Amount of Info</th>
									<th>Voting Method 1</th>
									<th>Voting Method 2</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Low</td>
									<td>Approval Voting</td>
									<td>MultiVoting</td>
								</tr>
								<tr>
									<td>Medium</td>
									<td>Score Voting</td>
									<td>XVoting</td>
								</tr>
								<tr>
									<td>High</td>
									<td>Delphi Method</td>
									<td>YVoting</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
}

export default VotingMethod;
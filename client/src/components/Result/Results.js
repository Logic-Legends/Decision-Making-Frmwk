import React from "react";
import Pdf from "../pdf-generation/Pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Results=()=>{
return (
	<div className="container">
		<h1>You have completed the tool. Please check your responses below.</h1>
		<p>
			(Info)You can click on individual steps in the progress bar to go back and
			change any of the responses.
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
						<td>Value from Step 1</td>
					</tr>
					<tr>
						<td>Who</td>
						<td>Value from Step 2</td>
					</tr>
					<tr>
						<td>Importance</td>
						<td>Value from Step 3a</td>
					</tr>

					<tr>
						<td>Capacity</td>
						<td>Value from Step 3b</td>
					</tr>
					<tr>
						<td>Time & Resource</td>
						<td>Value from Step 4</td>
					</tr>
					<tr>
						<td>Type of Desicion</td>
						<td>Value from Step 5</td>
					</tr>
					<tr>
						<td>Type of Information</td>
						<td>Value from Step 6a</td>
					</tr>
					<tr>
						<td>Amount of Information</td>
						<td>Value from Step 6b</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div className="button-same-line">
			<button className="inner pdf-btn">Genetate PDF</button>
		</div>
		<PDFDownloadLink document={<Pdf />} fileName="decision.pdf">
			{({ loading }) =>
				loading ? "Loading document..." : "Download as a PDF!"
			}
		</PDFDownloadLink>
	</div>
);
};


export default Results;
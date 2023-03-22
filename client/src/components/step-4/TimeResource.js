import React from "react";
import QuestionMark from "./images/question-mark.png";
import { Link } from "react-router-dom";
import HandleTooltip from "./HandleTooltip";

const TimeResource = () => {

  const [modalShow, setModalShow] = React.useState(false);

  return (
		<div className="container">
			{/* Call popup function*/}
			<HandleTooltip
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>

			<h1>
				Time and Resource allocation{" "}
				<img
					className="question-mark-pages"
					src={QuestionMark}
					alt="Qusestion Mark"
					border="0"
					onClick={() => setModalShow(true)}
				></img>
			</h1>
			<div className="border-decision-framework-pages">
				<table>
					<tbody>
						<tr className="table-background">
							<th>Low importance and high capacity:</th>
						</tr>
						<tr>
							<td>
								<h6>Advice:</h6>
								<p>
									Start the decision-making process later, take more time to
									gather information, or use a more complex voting method.
								</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div id="button-same-line">
				<Link to="/Capacity">	<button className="inner">BACK</button></Link>
				<Link to="/type-of-decision" state= {{ capacitySelection: "teste" }} ><button className="inner">NEXT</button>	</Link>
			</div>
		</div>
	);
};

export default TimeResource;

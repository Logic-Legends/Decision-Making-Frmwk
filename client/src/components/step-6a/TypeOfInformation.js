import React from "react";
import FirstHandleTooltip from "./FirstHandleTooltip";
import QuestionMark from "./images/question-mark.png";
import { Link } from "react-router-dom";

const TypeOfInformation = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
		<div className="container">
			{/* Call popup function*/}
			<FirstHandleTooltip
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>

			<h1>Plan to gather information needed to make the decision{" "}
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
					<tr className="table-background">
						<th>Type of information</th>
					</tr>
					<tr>
						<td>
							<p>What type of information will we have?</p>
							<form className="radio-btn-section">
					<label>
						<input
							type="radio"
							name="importance"
							value="low"
							// checked={selectedOption === "low"}
							// onChange={handleOptionChange}
							className="radio-input low-rdb"
						/>
						Explicit Values (Cardinal info)
					</label>
					<label>
						<input
							type="radio"
							name="importance"
							value="high"
							// checked={selectedOption === "high"}
							// onChange={handleOptionChange}
							className="radio-input high-rdb"
						/>
						Relative Values (Ordinal info)
					</label>
				</form>
						</td>
					</tr>
				</table>
			</div>

			<div id="button-same-line">
				<Link to="/Capacity">	<button className="inner">BACK</button></Link>
				<Link to="/step5" state= {{ capacitySelection: "teste" }} ><button className="inner">NEXT</button>	</Link>
			</div>
		</div>
	);
};

export default TypeOfInformation;

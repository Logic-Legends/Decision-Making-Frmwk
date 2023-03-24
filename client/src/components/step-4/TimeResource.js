import React,{ useContext, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import QuestionMark from "./images/question-mark.png";
import HandleTooltip from "./HandleTooltip";

const TimeResource = () => {

  const [modalShow, setModalShow] = React.useState(false);

  //Used for get data to analyze the advice
  const { selectedOption, setSelectedOption } = useContext( stepProgressContext );
  const { selectedOptionCapacity, setSelectedOptionCapacity } = useContext( stepProgressContext );

  //Used for pass value inside the table
  const[titleAdvice, setTitleAdvice] = useState();
  const[textAdvice, setTextAdvice] = useState();

  const checkAdvice = () => {
    if(selectedOption === "low" && selectedOptionCapacity === "low") {
		setTitleAdvice("Low Importance and Low Capacity");
		setTextAdvice("Choose a single iteration, low complexity voting method. Don't spend too much time gathering information.");
    } else if(selectedOption === "low" && selectedOptionCapacity === "high"){
		setTitleAdvice("Low Importance and High Capacity");
		setTextAdvice("Start the decision-making process later, take more time to gather information, or use a more complex voting method.");

    } else if(selectedOption === "high" && selectedOptionCapacity === "low"){
		setTitleAdvice("High Importance and Low Capacity");
		setTextAdvice("Start sooner, de-prioritize other tasks that are taking up capacity, or use a less complex voting method that requires less information.");

	} else if(selectedOption === "high" && selectedOptionCapacity === "high"){
		setTitleAdvice("High Importance and High Capacity");
		setTextAdvice("Allocate as much time as you can to gather information and make a good decision. You could use a more complex voting method.");
 	}
};

useEffect(() => {
    checkAdvice();
  }, [selectedOption, selectedOptionCapacity]);

  return (
		<div className="container">
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
							<th>{titleAdvice}</th>
						</tr>
						<tr>
							<td>
								<h6>Advice:</h6>
								<p>
									{textAdvice}
								</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div id="button-same-line">
				<Link to="/Capacity">	<button className="inner">BACK</button></Link>
				<Link to="/type-of-decision"><button className="inner">NEXT</button></Link>
			</div>
		</div>
	);
};

export default TimeResource;

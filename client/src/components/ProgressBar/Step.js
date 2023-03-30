import React,{ useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { stepProgressContext } from "./ProgressBarContext";


export default function Step(props) {


	const {  setStep,labelArray,completedStep ,currentStep } = useContext(stepProgressContext);
	const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate=useNavigate();

  const clickStep=()=>{
    let locationValue;
 console.log("currentStep:",currentStep);
  const clickedStep = labelArray.find((obj) => obj.id == props.label);

  if (clickedStep) {
    locationValue = clickedStep.location;
  }

  if (props.label > completedStep) {
    setIsModalOpen(true);
    return;
}
  navigate(locationValue);
  setStep(props.label);
  };

  return (
    <>
    <div className={"stepBlock" + (props.selected ? " selected" : "") + (props.grayed ? " grayed" : "")}>
      {/* <div className={"stepBlock" +(props.grayed? " grayed":"") }> */}
      <div className={"circleWrapper"} >
        <div className={"circle"} onClick={clickStep}>{props.label}</div>
        <span>{props.currentStep}</span>
      </div>
    </div>
    {isModalOpen && (
					<div className="modal">
						<div className="modal-display">
							<p>Please complete previous steps</p>
							<button
								onClick={() => setIsModalOpen(false)}
								className="modal-btn"
							>
								OK
							</button>
						</div>
					</div>
				)}
    </>
  );
}

import React,{ useState } from "react";
import Step from "./Step";
import { Container } from "react-bootstrap";
import "./ProgressBar.css";


function ProgressBar(props){

// const [currentStep,setCurrentStep]=useState(1);

return(
    <Container className="stepWrapper d-flex justify-content-center">
        {/* {props.labelArray.map((item,index)=><Step key={index} index={index} label={item} selected={props.currentStep === index + 1} grayed={props.currentStep<index+1} setStep={props.setStep}></Step>)} */}
        {props.labelArray.map((item,index)=><Step key={index} index={index} label={item} selected={props.currentStep === index + 1} grayed={props.currentStep<index+1} setStep={props.setStep} onClick={() => props.setStep(index+1)}></Step>)}

    </Container>
);

}

export default ProgressBar;
import Step from "./Step";
import { Container } from "react-bootstrap";
import "./ProgressBar.css";


function ProgressBar(props) {


    return (
        <Container className="stepWrapper d-flex justify-content-center mt-1">
            {/* {props.labelArray.map((item,index)=><Step key={index} index={index} label={item} selected={props.currentStep === index + 1} grayed={props.currentStep<index+1} setStep={props.setStep}></Step>)} */}
            {props.labelArray.map((item, index) => <Step key={index} index={index} label={item.id} display={item.display} selected={props.currentStep ==item.id} grayed={props.currentStep < index + 1} setStep={props.setStep}></Step>)}

        </Container>
    );

}

export default ProgressBar;
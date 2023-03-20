import React from "react";
import QuestionMark from "./images/question-mark.png";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

//function that calls the popup on the screen

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h6>Your goal needs to be SMART:</h6>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Specific</p>
        <p>Measurable</p>
        <p>Achievable</p>
        <p>Realistic</p>
        <p>Time-based</p>
      </Modal.Body>
    </Modal>
  );
}

const Step1 = () => {

  const [modalShow, setModalShow] = React.useState(false);

  return (

    <div className="container">

      {/* Call popup function*/}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

        <h1>What is the goal?</h1>
        <div className="border-decision-framework-pages">

          <p>Defining the goal will help you determine what kind of information you need to make a decision.
            <img className="question-mark-pages" src={QuestionMark} alt="Qusestion Mark" border="0" onClick={() => setModalShow(true)}></img>
          </p>

            <input
              id="goal"
              type="text"
              name="input-goal"
              required
            />

          <Link to="/decision-makers" ><button className = "add-goal">NEXT</button></Link>
        </div>
    </div>
  );
};

export default Step1;

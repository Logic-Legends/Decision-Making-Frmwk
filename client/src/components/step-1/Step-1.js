import React, { useState } from "react";
import QuestionMark from "./images/question-mark.png";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

//function that calls the popup on the screen

function ShowPopup(props) {
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

  //Used for message error
  const [error, setError] = useState("");
  const [show, setShow] = useState(true);
  const [message, setMessage] = useState("");

  //Used for Popup
  const [modalShow, setModalShow] = React.useState(false);

  //
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (message.trim().length !== 0) {
      window.location.href = "/decision-makers";
    } else {
      // show the error message when field is empty
      setError("Please define your goals before you continue.");
      setShow(true);
    }
  };

  return (

  <div className="container">

      {/* Call popup function - tooltip*/}
      <ShowPopup
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      {/* Call popup function - tooltip*/}

        <h1>What is the goal?</h1>
        <div className="border-decision-framework-pages">

          {/* Show message em field is empty*/}
        {show && error && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          {error}
        </Alert>
      )}

          <p>Defining the goal will help you determine what kind of information you need to make a decision.
            <img className="question-mark-pages" src={QuestionMark} alt="Qusestion Mark" border="0" onClick={() => setModalShow(true)}></img>
          </p>

            <input
              id="message"
              type="text"
              name="message"
              onChange={handleChange}
              maxLength ="500"
              required
            />

        </div>
          <div id="button-same-line">
				  <Link to="/">	<button className="inner">BACK</button></Link>
				  <button className="inner" onClick={handleClick} >NEXT</button>
      </div>
    </div>
  );
};

export default Step1;

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
      <Modal.Body>
        <p>Spending more time on decisions creates an opportunity to gather and use more information, leading to higher specificity and detail in the voting method.</p>
      </Modal.Body>
    </Modal>
  );
}

const Step4 = () => {

  const [modalShow, setModalShow] = React.useState(false);

  return (

    <div className="container">

      {/* Call popup function*/}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

        <h1>Time and Resource allocation <img className="question-mark-pages" src={QuestionMark} alt="Qusestion Mark" border="0" onClick={() => setModalShow(true)}></img></h1>
        <div className="border-decision-framework-pages">

        <table>
            <tr className="table-background">
                <th>teste</th>
            </tr>
            <tr>
                <td>
                    <h6>Advice:</h6>
                    <p>Start the decision-making process later, take more time to gather information, or use a more complex voting method.</p>
                </td>
            </tr>
        </table>
        </div>

            <div id="button-same-line">
                <Link to="/step3"><button className = "inner">BACK</button></Link>
                <Link to="/step5"><button className = "inner">NEXT</button></Link>
            </div>
    </div>
  );
};

export default Step4;

import React, { useState,useContext } from "react";
import DecisionMakersForm from "./DicisionMakersForm";
import { Container, Table,Alert } from "react-bootstrap";
import QuestionMark from "../step-1/images/question-mark.png";
import ModalComponent from "./ModalComponent";
import { Link,useNavigate } from "react-router-dom#";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";

function DecisionMakers() {
  // const [users, setUsers] = useState([]);

  const { users,setUsers,currentStep,labelArray,setStep }=useContext(stepProgressContext);

  const [editIndex, setEditIndex] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [show, setShow] = useState(true);

  const stepNumber=2;


  const navigate=useNavigate();
  const addUser = (newUser) => {
    if (editIndex === -1) {
      setUsers((prevUsers) => [...prevUsers, newUser]);
    } else {
      setUsers((prevUsers) => prevUsers.map((user, index) => (index === editIndex ? newUser : user)));
      setEditIndex(-1);
    }
  };

  const editUser = (index) => {
    setEditIndex(index);
  };

  const deleteUser = (index) => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
    setEditIndex(-1);

  };


  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };


const handleNextBtn=()=>{
console.log("users:",users);
if (!users.length) {
console.log("Next Button Clicked"+users);
  setError("Please complete this step!");
  setShow(true);
}else{
  setStep(stepNumber+1);
  navigate("/Importance");



}


};


const handleBackBtn=()=>{
  setStep(stepNumber-1);
navigate("/define-goal");


};

  return (

    <Container  className="container">
      {error &&show&& (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          {error}
        </Alert>
      )}
      {showModal&&<ModalComponent showModal={showModal} handleClose={handleClose} />}

      {/* <div className="d-flex"> */}

      <h1>Who are the decision-makers<img className="question-mark-pages" src={QuestionMark} alt="Qusestion Mark" border="0" onClick={ handleShow }></img></h1>

      {/* </div> */}
      <div className="border-decision-framework-pages">
      <DecisionMakersForm
        addUser={addUser}
        editUser={users[editIndex]}
        editIndex={editIndex}
      />
      <Table striped  hover responsive  >
        <thead>
          <tr>
            <th className="border">Name</th>
            <th className="border border-end-0">Role</th>
            <th className="border border-start-0"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="vh-auto border">
              <td className="w-50 border pt-4">{user.name}</td>
              <td className="w-50 border pt-4 border-end-0">{user.role}</td>
              <td className="d-flex justify-content-end border  border-start-0">
                {/* <Button
                className="px-3"
                  variant="warning"
                  onClick={() => editUser(index)}
                >
                  Edit
                </Button> */}
                <button className="inner  mb-0 py-2" onClick={() => editUser(index)}>EDIT</button>
                <button className="inner button-delete-team  mb-0 py-2" onClick={() => deleteUser(index)}>DELETE</button>
                {/* <Button className="ms-2 "  variant="danger" onClick={() => deleteUser(index)}>
                  Delete
                </Button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <div className="d-flex justify-content-center mt-5"> */}

      {/* <Link to="/define-goal"><Button variant="success"  className="inner"> Back </Button></Link>

      <Link to="/Importance"><Button variant="success"  className="ms-2 px-4"> Next </Button></Link> */}
      <div id="button-same-line">
				<Link to="/define-goal">	<button className="inner" onClick={handleBackBtn}>BACK</button></Link>
				<button className="inner"  onClick={handleNextBtn}><Link to="/Importance"></Link>NEXT</button>
			</div>
            {/* <Button variant="success"  className="ms-2 px-4">
Next
            </Button> */}
            {/* </div> */}
            </div>
    </Container>
  );
}

export default DecisionMakers;

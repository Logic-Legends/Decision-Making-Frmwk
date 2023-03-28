import React, { useState,useContext,useEffect } from "react";
import DecisionMakersForm from "./DicisionMakersForm";
import { Container, Table,Alert } from "react-bootstrap";
import QuestionMark from "../step-1/images/question-mark.png";
import ModalComponent from "./ModalComponent";
import { Link,useNavigate } from "react-router-dom#";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import Icon from "react-crud-icons";

function DecisionMakers() {
  // const [users, setUsers] = useState([]);

  const { users,setUsers,currentStep,labelArray,setStep }=useContext(stepProgressContext);

  const [editIndex, setEditIndex] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  // const [error, setError] = useState("");
  // const [show, setShow] = useState(true);
    //state for error handling
	const [isModalOpen, setIsModalOpen] = useState(false);

  const stepNumber=2;

  console.log(users);
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
// console.log("Next Button Clicked"+users);
setIsModalOpen(true);
  // setError("Please complete this step!");
  // setShow(true);
}else{
  setStep(stepNumber+1);
  navigate("/Importance");
  console.log(users);
  sessionStorage.setItem("users", JSON.stringify(users)); //ADD SESSION STORAGE

}


};


const handleBackBtn=()=>{
  setStep(stepNumber-1);
navigate("/define-goal");
sessionStorage.setItem("users", JSON.stringify(users)); //ADD SESSION STORAGE


};

//ADD TO STORAGE SESSION LAST PAGE
useEffect(() => {
  const storedUsers = sessionStorage.getItem("users");
  console.log(storedUsers);
  if (storedUsers) {
    setUsers( JSON.parse(storedUsers));
  }
}, []);

  return (

    <Container  className="container">
      {/* {error &&show&& (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          {error}
        </Alert>
      )} */}
      {showModal&&<ModalComponent showModal={showModal} handleClose={handleClose} />}

      <h3>Who are the decision-makers<img className="question-mark-pages" src={QuestionMark} alt="Qusestion Mark" border="0" onClick={ handleShow }></img></h3>

      {/* </div> */}
      <div className="border-decision-framework-pages">
      <DecisionMakersForm
        addUser={addUser}
        editUser={users[editIndex]}
        editIndex={editIndex}
      />
      <Table striped  hover   >
        <thead>
          <tr>
            <th className="border">Name</th>
            {/* <th className="border border-start-0"></th> */}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="vh-auto border">
              <td className="w-50 border pt-4">{user.name}</td>
              <td className="d-flex justify-content-end border  border-start-0" >

                <button className="inner  mb-0 py-2 " onClick={() => editUser(index)}>EDIT</button>
                <button className="inner button-delete-team  mb-0 py-2" onClick={() => deleteUser(index)}>DELETE</button>
                <div className="dlt-edt-icons">
                <Icon
                  name="edit"
                  theme="light"
                  size="small"
                  onClick={() => editUser(index)}
                  className="edt-icon"
                />
                <Icon
                  name="delete"
                  theme="light"
                  size="small"
                  onClick={() => deleteUser(index)}
                  className="dlt-icon"

                />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


            </div>
      <div id="button-same-line">
        <Link to="/define-goal">	<button className="inner" onClick={handleBackBtn}>BACK</button></Link>
        <button className="inner" onClick={handleNextBtn}><Link to="/Importance"></Link>NEXT</button>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-display">
              <p>Please complete this step!</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="modal-btn"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default DecisionMakers;

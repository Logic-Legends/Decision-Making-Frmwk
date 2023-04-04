import React, { useState, useContext, useEffect } from "react";
import DecisionMakersForm from "./DicisionMakersForm";
import { Container, Table } from "react-bootstrap";
import QuestionMark from "../step-1/images/question-mark.png";
import { Link, useNavigate ,useLocation } from "react-router-dom#";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import Icon from "react-crud-icons";
import HandleTooltip from "../ProgressBar/HandleToolTip";

function DecisionMakers() {
  // const [users, setUsers] = useState([]);

  const { users, setUsers, currentStep, labelArray, setStep,setStepCompleted,getStepIdFromLocation } = useContext(stepProgressContext);

  const [editIndex, setEditIndex] = useState(-1);
  // const [showModal, setShowModal] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stepNumber = 2;
	const location = useLocation();
	const { pathname } = location;


  const navigate = useNavigate();
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





  const handleNextBtn = () => {
    if (!users.length) {
      setIsModalOpen(true);
    } else {
      setStep(stepNumber + 1);
      setStepCompleted(stepNumber+1);
      navigate("/importance");
      sessionStorage.setItem("users", JSON.stringify(users)); //ADD SESSION STORAGE

    }


  };


  const handleBackBtn = () => {
    setStep(stepNumber - 1);
    navigate("/define-goal");
    sessionStorage.setItem("users", JSON.stringify(users)); //ADD SESSION STORAGE


  };

  //ADD TO STORAGE SESSION LAST PAGE
  useEffect(() => {
    const storedUsers = sessionStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);


    // update the step number when using browser navigation or refreshing the component
	useEffect(() => {
		setStep(getStepIdFromLocation(pathname));
	  }, [pathname]);


    const modalTitle = "<strong>Questions to consider:</strong>";
    const modalText = `Should you include all team members working on the project or a smaller
    subset?
    <br />
    <br />
    Have you included a diverse set of viewpoints in our decision-making
    team?
    <br />
    <br />
    Is there any sensitive information that may influence team selection?`;

  return (

    <Container className="container">
			<HandleTooltip
         title={modalTitle}
         text={modalText}
         show={modalShow}
         onHide={() => setModalShow(false)}
         />

      <h3>Who is making the decision?<img className="question-mark-pages" src={QuestionMark} alt="Qusestion Mark" border="0" onClick={() => setModalShow(true)}></img></h3>

      <div className="border-decision-framework-pages">
        <p><strong>Please add the responsible party(ies)</strong></p>
        <DecisionMakersForm
          addUser={addUser}
          editUser={users[editIndex]}
          editIndex={editIndex}
        />
          {users.length > 0 && (
        <Table striped hover   >
          <thead>
            <tr>
              <th className="border nameTable">Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="vh-auto border">
                <td className="w-50 border pt-4">{user.name}</td>
                <td className="border  border-start-0" >
                  <div  className="dlt-edt-icons">
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
 )}

      </div>
      <div id="button-same-line">
        <Link to="/define-goal">	<button className="inner" onClick={handleBackBtn}>BACK</button></Link>
        <button className="inner" onClick={handleNextBtn}><Link to="/importance"></Link>NEXT</button>
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

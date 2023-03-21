import React, { useState } from "react";
import DecisionMakersForm from "./DicisionMakersForm";
import { Container, Table, Button } from "react-bootstrap";
import QuestionMark from "../step-1/images/question-mark.png";
import ModalComponent from "./ModalComponent";
import { Link } from "react-router-dom#";
function DecisionMakers() {
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [showModal, setShowModal] = useState(false);

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


  const qIconStyle = {
    width:"1.5em",
    height:"1.5em",
    cursor:"pointer",
  };

  return (

    <Container  className="pt-5">
      {showModal&&<ModalComponent showModal={showModal} handleClose={handleClose} />}

      <div className="d-flex">
      <h1 className="mb-5">Who are the decision-makers</h1>
      <img style={qIconStyle} src={QuestionMark} alt="Qusestion Mark" border="0" onClick={ handleShow }></img>
      </div>
      <DecisionMakersForm
        addUser={addUser}
        editUser={users[editIndex]}
        editIndex={editIndex}
      />
      <Table striped  hover responsive  >
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="vh-auto">
              <td className="w-50">{user.name}</td>
              <td className="w-50">{user.role}</td>
              <td className="d-flex justify-content-end">
                <Button
                className="px-3"
                  variant="warning"
                  onClick={() => editUser(index)}
                >
                  Edit
                </Button>
                <Button className="ms-2 "  variant="danger" onClick={() => deleteUser(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center mt-5">

      <Link to="/define-goal"><Button variant="success"  className="px-3"> Back </Button></Link>

      <Link to="/Importance"><Button variant="success"  className="ms-2 px-4"> Next </Button></Link>

            {/* <Button variant="success"  className="ms-2 px-4">
Next
            </Button> */}
            </div>
    </Container>
  );
}

export default DecisionMakers;

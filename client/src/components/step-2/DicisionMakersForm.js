import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Icon from "react-crud-icons";

function DecisionMakersForm({ addUser, editUser, editIndex }) {
  const [user, setUser] = useState({ name: "" });
  // const [error, setError] = useState("");
  // const [show, setShow] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (editUser) {
      setUser(editUser);
    } else {
      setUser({ name: "" });
    }
  }, [editUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name.trim() === "") {
      // setError("Both Name and Role fields must be filled.");
      // setShow(true);
      setIsModalOpen(true);
    } else {
      // setError("");
      addUser(user);
      setUser({ name: "" });
    }
  };

  return (
    <>
      {/* {show && error && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          {error}
        </Alert>
      )} */}
      {isModalOpen && (
					<div className="modal">
						<div className="modal-display">
							<p>Name fields must be filled.</p>
							<button
								onClick={() => setIsModalOpen(false)}
								className="modal-btn"
							>
								OK
							</button>
						</div>
					</div>
				)}
      <Form onSubmit={handleSubmit} className="mb-5" >
        <Row>
          <Col>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter name"
              />
            </Form.Group>
          </Col>
          <Col className="d-flex align-items-end ">
            <button className="inner mb-0 py-2" type="submit">
              {editIndex === -1 ? "Add" : "Update"}
            </button>

            <button className="add-update-icon" type="submit">
              {editIndex === -1 ? (<Icon
                name="add"
                theme="light"
                size="medium"
                onChange={handleChange}
                className="add-icon"

              />) : (<Icon
                name="edit"
                theme="light"
                size="medium"
                onChange={handleChange}
                className="add-icon"

              />) }
            </button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default DecisionMakersForm;

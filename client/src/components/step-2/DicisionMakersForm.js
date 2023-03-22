import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";

function DecisionMakersForm({ addUser, editUser, editIndex }) {
  const [user, setUser] = useState({ name: "", role: "" });
  const [error, setError] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (editUser) {
      setUser(editUser);
    } else {
      setUser({ name: "", role: "" });
    }
  }, [editUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name.trim() === "" || user.role.trim() === "") {
      setError("Both Name and Role fields must be filled.");
      setShow(true);
    } else {
      setError("");
      addUser(user);
      setUser({ name: "", role: "" });
    }
  };

  return (
    <>
      {show && error && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          {error}
        </Alert>
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
          <Col>
            <Form.Group controlId="formRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                name="role"
                value={user.role}
                onChange={handleChange}
                placeholder="Enter role"
              />
            </Form.Group>
          </Col>
          <Col className="d-flex align-items-end ">
            <button className="inner mb-0 py-2" type="submit">
              {editIndex === -1 ? "Add" : "Update"}
            </button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default DecisionMakersForm;

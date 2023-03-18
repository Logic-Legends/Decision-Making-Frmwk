import React,{ useState } from "react";
import DicisionMakersForm from "./DicisionMakersForm";
import "./DecisionMakers.css";
 function DecisionMakers() {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div className="step-container">
      <h1>Who are the decision-makers?</h1>
      <DicisionMakersForm addUser={addUser} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DecisionMakers;
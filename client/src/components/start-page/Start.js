import React from "react";
import { Link } from "react-router-dom";
// import Pdf from "../pdf-generation/Pdf";
// import { PDFDownloadLink } from "@react-pdf/renderer";
const Start = () => {
  return (
    <div>
        <h1>Voting Method For Group Decision</h1>
        <p>This tool is designed to help facilitate group decisions that involve voting.</p>
        <ul>
            <li>It for team of 2 or more people.</li>
        </ul>
          <h4>Who should complete this tool?</h4>
          <p>1 or 2 people with good project knowledge, such as Project Manager and Team Lead. </p>
          <h4>What is the outcome? </h4>
          <p>You will receive a recommendation of the type of voting method to use in your group decision. </p>
          <h4>How much time will I need? </h4>
          <p>We advise you spend up to 30 minutes in using the tool. </p>
          <div className="start-btn">
      <Link className="inner" to="/define-goal"><button>Start </button></Link>
          </div>
      <br></br>
      {/* <PDFDownloadLink document={<Pdf />} fileName="decision.pdf">
        {({ loading }) =>
          loading ? "Loading document..." : "Download as a PDF!"
        }
      </PDFDownloadLink> */}
    </div>
  );
};
export default Start;
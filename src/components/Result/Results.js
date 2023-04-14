import React,{ useContext ,useEffect,useState } from "react";
import Pdf from "../pdf-generation/Pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useNavigate,useLocation } from "react-router-dom";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import VothingMethod from "../step-7/Voting-Method";

const Results = () => {

	const defineGoalText = sessionStorage.getItem("defineGoalText");
	const users = JSON.parse(sessionStorage.getItem("users"));
	const selectedOption = sessionStorage.getItem("selectedOption");
	const selectedOptionCapacity = sessionStorage.getItem(
		"selectedOptionCapacity"
	);
	const selectedOptionDecision = sessionStorage.getItem(
		"selectedOptionDecision"
	);
	const selectedOptionTypeOfInformation = sessionStorage.getItem(
		"selectedOptionTypeOfInformation"
	);
	const selectedOptionAmountOfInformation = sessionStorage.getItem(
		"selectedOptionAmountOfInformation"
	);
	const explicitVotingMethod = sessionStorage.getItem("explicitVotingMethod");
	const relativeVotingMethod1 = sessionStorage.getItem("relativeVotingMethod1");
	const relativeVotingMethod2 = sessionStorage.getItem("relativeVotingMethod2");
	const approvalExplicitDesc = sessionStorage.getItem("ApprovalDesc");
	const scoreExplicitDesc = sessionStorage.getItem("ScoreDesc");
	const delphiExplicitDesc = sessionStorage.getItem("DelphiDesc");
	const fisrtRelativeDesc = sessionStorage.getItem("FirstDesc");
	const multiRelativeDesc = sessionStorage.getItem("MultiDesc");
	const starRelativeDesc = sessionStorage.getItem("StarDesc");
	const rankRelativeDesc = sessionStorage.getItem("RankDesc");
	const delphiRelativeDesc = sessionStorage.getItem("DelphiRDesc");
	const qRelativeDesc = sessionStorage.getItem("QDesc");
	const textAdvice = sessionStorage.getItem("textAdviceResult");
	const advice = sessionStorage.getItem("advice");
	const questionStep1 = sessionStorage.getItem("questionStep1");
	const questionStep2 = sessionStorage.getItem("questionStep2");
	const questionStep3 = sessionStorage.getItem("questionStep3");
	const questionStep4 = sessionStorage.getItem("questionStep4");
	const questionStep5 = sessionStorage.getItem("questionStep5");
	const questionStep6 = sessionStorage.getItem("questionStep6");
	const questionStep7 = sessionStorage.getItem("questionStep7");

	const navigate = useNavigate();
	const { setStep,setStepCompleted,getStepIdFromLocation  } = useContext(stepProgressContext);

	const stepNumber = 8;
	const location = useLocation();
	const { pathname } = location;

  // update the step number when using browser navigation or refreshing the component
  useEffect(() => {
	setStep(getStepIdFromLocation(pathname));
	console.log("Step no.:",getStepIdFromLocation(pathname));
  }, [pathname]);

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

	return (
    <div className="container">
      <h3>Results</h3>
      <p>
        Thank you for using the{" "}
        <strong>Voting Methods for Group Decisions tool!</strong> We hope the
        recommended voting method(s) below will help you make an informed
        decision.
      </p>

      <div>
        <ul className="ace-tabs" role="tablist">
          <li
            role="tab"
            tabIndex="0"
            className={`  ${activeTab === 1 ? "ui-tabs-active" : ""}`}
            aria-controls="recommended voting method()"
            aria-labelledby="ui-id-1"
            aria-selected={activeTab === 1}
            aria-expanded={activeTab === 1}
          >
            <a tabIndex="-1" id="ui-id-1" onClick={() => handleTabClick(1)}>
              <h4>Recommended Voting Method(s)</h4>
            </a>
          </li>
          <li
            role="tab"
            tabIndex="-1"
            className={` ${activeTab === 2 ? "ui-tabs-active" : ""}`}
            aria-controls="summary"
            aria-labelledby="ui-id-2"
            aria-selected={activeTab === 2}
            aria-expanded={activeTab === 2}
          >
            <a tabIndex="-1" id="ui-id-2" onClick={() => handleTabClick(2)}>
              <h4>Summary</h4>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          {activeTab === 1 && <VothingMethod />}
          {activeTab === 2 && (
            <div>
              {/* <h6>Summary</h6> */}
              <p>
                Below is a summary of all your responses. You can click on
                individual steps in the progress bar to go back and change any
                of the responses.
              </p>
              <div>
                <table>
                  <tbody>
                    <tr className="table-background">
                      <th>Recommended Voting Method(s)</th>
                      {selectedOptionTypeOfInformation === "Explicit" ? (
                        <th>{explicitVotingMethod}</th>
                      ) : (
                        <th>
                          {relativeVotingMethod1 +
                            " | " +
                            relativeVotingMethod2}
                        </th>
                      )}
                    </tr>
                    <tr>
                      <td>{questionStep1}</td>
                      <td>{defineGoalText}</td>
                    </tr>
                    <tr>
                      <td>{questionStep2}</td>
                      <td>
                        {" "}
                        {users.map((user, index) => (
                          <p key={index}>{user.name}</p>
                        ))}
                      </td>
                    </tr>
                    <tr>
                      <td>{questionStep3}</td>
                      <td>{selectedOption}</td>
                    </tr>
                    <tr>
                      <td>{questionStep4}</td>
                      <td>{selectedOptionCapacity}</td>
                    </tr>
                    <tr>
                      <td>Time and Resource Advice</td>
                      <td>{textAdvice}</td>
                    </tr>
                    <tr>
                      <td>{questionStep5} </td>
                      <td>{selectedOptionDecision + " decision: " + advice}</td>
                    </tr>
                    <tr>
                      <td>{questionStep6}</td>
                      <td>{selectedOptionTypeOfInformation}</td>
                    </tr>
                    <tr>
                      <td>{questionStep7} </td>
                      <td>{selectedOptionAmountOfInformation}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="result-buttons-container">
                <PDFDownloadLink
                  className="pdf-grid"
                  document={
                    <Pdf
                      selectedOptionAmountOfInformation={
                        selectedOptionAmountOfInformation
                      }
                      selectedOptionTypeOfInformation={
                        selectedOptionTypeOfInformation
                      }
                      selectedOptionDecision={selectedOptionDecision}
                      selectedOptionCapacity={selectedOptionCapacity}
                      selectedOption={selectedOption}
                      defineGoalText={defineGoalText}
                      users={users}
                      textAdvice={textAdvice}
                      advice={advice}
                      relativeVotingMethod1={relativeVotingMethod1}
                      relativeVotingMethod2={relativeVotingMethod2}
                      explicitVotingMethod={explicitVotingMethod}
                      questionStep1={questionStep1}
                      questionStep2={questionStep2}
                      questionStep3={questionStep3}
                      questionStep4={questionStep4}
                      questionStep5={questionStep5}
                      questionStep6={questionStep6}
                      questionStep7={questionStep7}
                      approvalExplicitDesc={approvalExplicitDesc}
                      scoreExplicitDesc={scoreExplicitDesc}
                      delphiExplicitDesc={delphiExplicitDesc}
                      fisrtRelativeDesc={fisrtRelativeDesc}
                      multiRelativeDesc={multiRelativeDesc}
                      starRelativeDesc={starRelativeDesc}
                      rankRelativeDesc={rankRelativeDesc}
                      delphiRelativeDesc={delphiRelativeDesc}
                      qRelativeDesc={qRelativeDesc}
                    />
                  }
                  fileName="decision.pdf"
                >
                  {({ loading }) =>
                    loading ? (
                      <button className="inner-pdf-button ">
                        Loading document...{" "}
                      </button>
                    ) : (
                      <button className="inner-pdf-button ">
                        {" "}
                        Download as a PDF
                      </button>
                    )
                  }
                </PDFDownloadLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Results;
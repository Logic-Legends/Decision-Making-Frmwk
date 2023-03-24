import React,{ useState } from "react";
import { Link,useNavigate,useLocation } from "react-router-dom";
import { Alert } from "react-bootstrap";
import FirstHandleTooltip from "./FirstHandleTooltip";
import SecondHandleTooltip from "./SecondHandleTooltip";
import ThirdHandleTooltip from "./ThirdHandleTooltip";
import FourthHandleTooltip from "./FourthHandleTooltip";
import FifthHandleTooltip from "./FifthHandleTooltip";
import QuestionMark from "./images/question-mark.png";

const TypeOfInformation = () => {

    //Get data from another page
    const location = useLocation();
    const dataStep1 = location.state?.GoalData;
    const dataStep2 = location.state?.TeamData;
    const dataStep3a = location.state?.ImportanceData;
    const dataStep3b = location.state?.CapacityData;
    const dataStep4 = location.state?.TimeAndResourcelData;
    const dataStep5 = location.state?.TypeOfDecisionData;
    const dataStep6a = location.state?.TypeOfInformationData;
    const dataStep6b = location.state?.AmountOfInformationData;
    const dataStep7 = location.state?.VotingMethodsData;

    //FirstHandleTooltip
    const [FirstModalShow, FirstSetModalShow] = React.useState(false);

    //SecondtHandleTooltip
    const [SecondModalShow, SecondSetModalShow] = React.useState(false);

    //ThirdHandleTooltip
    const [ThirdModalShow, ThirdSetModalShow] = React.useState(false);

    //FourthHandleTooltip
    const [FourthModalShow, FourthSetModalShow] = React.useState(false);

    //FifthHandleTooltip
    const [FifthModalShow, FifthSetModalShow] = React.useState(false);



    //Used for message error
    const [error, setError] = useState("");
    const [show, setShow] = useState(true);

    //Go to another page function
    const navigate = useNavigate();



    //Used to check the value of radio button
    const [selectedOption, setSelectedOption] = useState("");


    //When change the option from radio button
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //Check if any button was choosen
  const handleButtonClick = () => {
    if (selectedOptionAmountOfInformation === null) {
			// show the error message when field is empty
			setError("Please select a response.");
			setShow(true);
		} else {
			navigate("/voting-method", { state: { selectedOption } }); //Go to page and pass data
		}
  };

    return (
		<div className="container">

			<FirstHandleTooltip
				show={FirstModalShow}
				onHide={() => FirstSetModalShow(false)}
			/>

            <SecondHandleTooltip
				show={SecondModalShow}
				onHide={() => SecondSetModalShow(false)}
			/>

            <ThirdHandleTooltip
				show={ThirdModalShow}
				onHide={() => ThirdSetModalShow(false)}
			/>

            <FourthHandleTooltip
				show={FourthModalShow}
				onHide={() => FourthSetModalShow(false)}
			/>

            <FifthHandleTooltip
				show={FifthModalShow}
				onHide={() => FifthSetModalShow(false)}
			/>

			<h1>Plan to gather information needed to make the decision{" "}
				<img
					className="question-mark-pages"
					src={QuestionMark}
					alt="Qusestion Mark"
					border="0"
					onClick={() => FirstSetModalShow(true)}
				></img>
			</h1>
			<div className="border-decision-framework-pages">
				<table>
                    <tbody>
                        <tr className="table-background">
                            <th>Amount of Information
                                <img className="question-mark-pages"
                                    src={QuestionMark}
                                    alt="Qusestion Mark"
                                    border="0"
                                    onClick={() => SecondSetModalShow(true)}
                                ></img>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                {/* Show message em field is empty*/}
                                {show && error && (
                                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                {error}
                                </Alert>
                                )}
                                <p>How much information will we have?</p>
                                <form className="radio-btn-section">
                                        <label>
                                            <input
                                                type="radio"
                                                name="option"
                                                value="high"
                                                checked={selectedOption === "high"}
                                                onChange={handleOptionChange}
                                                className="radio-input low-rdb"
                                            />
                                            High
                                        </label>
                                                <img className="question-mark-pages"
                                                    src={QuestionMark}
                                                    alt="Qusestion Mark"
                                                    border="0"
                                                    onClick={() => ThirdSetModalShow(true)}
                                                ></img>
                                        <label>
                                            <input
                                                type="radio"
                                                name="option"
                                                value="medium"
                                                checked={selectedOption === "medium"}
                                                onChange={handleOptionChange}
                                                className="radio-input high-rdb"
                                            />
                                            Medium

                                        </label>
                                        <img className="question-mark-pages"
                                                    src={QuestionMark}
                                                    alt="Qusestion Mark"
                                                    border="0"
                                                    onClick={() => FourthSetModalShow(true)}
                                                ></img>
                                        <label>
                                            <input
                                                type="radio"
                                                name="option"
                                                value="low"
                                                checked={selectedOption === "low"}
                                                onChange={handleOptionChange}
                                                className="radio-input high-rdb"
                                            />
                                            Low

                                        </label>
                                        <img className="question-mark-pages"
                                                    src={QuestionMark}
                                                    alt="Qusestion Mark"
                                                    border="0"
                                                    onClick={() => FifthSetModalShow(true)}
                                                ></img>
                                </form>
                            </td>
                        </tr>
                    </tbody>
				</table>
			</div>

			<div id="button-same-line">
				<Link to="/type-of-information" state= {{ TypeOfInformationData:dataStep6a }}>	<button className="inner">BACK</button></Link>
				<button className="inner" onClick={handleButtonClick}>NEXT</button>
			</div>
		</div>
	);
};

export default TypeOfInformation;

import React,{ useState } from "react";
import { Link,useNavigate,useLocation } from "react-router-dom";
import FirstHandleTooltip from "./FirstHandleTooltip";
import SecondHandleTooltip from "./SecondHandleTooltip";
import ThirdHandleTooltip from "./ThirdHandleTooltip";
import FourthHandleTooltip from "./FourthHandleTooltip";
import QuestionMark from "./images/question-mark.png";
import { Alert } from "react-bootstrap";

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

    console.log(dataStep1);
    console.log(dataStep2);
    console.log(dataStep3a);
    console.log(dataStep3b);
    console.log(dataStep4);
    console.log(dataStep5);
    console.log(dataStep6a);
    console.log(dataStep6b);
    console.log(dataStep7);

    //FirstHandleTooltip
    const [FirstModalShow, FirstSetModalShow] = React.useState(false);

    //SecondtHandleTooltip
    const [SecondModalShow, SecondSetModalShow] = React.useState(false);

    //ThirdHandleTooltip
    const [ThirdModalShow, ThirdSetModalShow] = React.useState(false);

    //FourthHandleTooltip
    const [FourthModalShow, FourthSetModalShow] = React.useState(false);



    //Used for message error
    const [error, setError] = useState("");
    const [show, setShow] = useState(true);

    //Go to another page function
    const navigate = useNavigate();



    //Used to get data
    const [data, setData] = useState(dataStep6a);


    //When change the option from radio button
  const handleOptionChange = (event) => {
    setData(event.target.value);
  };

  //Check if any button was choosen
  const handleButtonClick = () => {
    if (data === undefined) {
      // show the error message when field is empty
      setError("Please select a response.");
      setShow(true);
    } else {
        navigate("/amount-of-information", { state: { TypeOfInformationData:data } }); //Go to page and pass data
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
                            <th>Type of Information
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
                                <p>What type of information will we have?</p>
                                <form className="radio-btn-section">
                                        <label>
                                            <input
                                                type="radio"
                                                name="option"
                                                value="explicit"
                                                checked={data === "explicit"}
                                                onChange={handleOptionChange}
                                                className="radio-input low-rdb"
                                            />
                                            Explicit
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
                                                value="relative"
                                                checked={data === "relative"}
                                                onChange={handleOptionChange}
                                                className="radio-input high-rdb"
                                            />
                                            Relative

                                        </label>
                                        <img className="question-mark-pages"
                                                    src={QuestionMark}
                                                    alt="Qusestion Mark"
                                                    border="0"
                                                    onClick={() => FourthSetModalShow(true)}
                                                ></img>
                                </form>
                            </td>
                        </tr>
                    </tbody>
				</table>
			</div>

			<div id="button-same-line">
				<Link to="/type-of-decision" state= {{ capacitySelection: "teste" }}>	<button className="inner">BACK</button></Link>
				<button className="inner" onClick={handleButtonClick}>NEXT</button>
			</div>
		</div>
	);
};

export default TypeOfInformation;

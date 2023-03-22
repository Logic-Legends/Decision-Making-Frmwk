import React,{ useState } from "react";
import FirstHandleTooltip from "./FirstHandleTooltip";
import SecondHandleTooltip from "./SecondHandleTooltip";
import ThirdHandleTooltip from "./ThirdHandleTooltip";
import FourthHandleTooltip from "./FourthHandleTooltip";
import QuestionMark from "./images/question-mark.png";
import { Link } from "react-router-dom";

const TypeOfInformation = () => {

    //FirstHandleTooltip
    const [FirstModalShow, FirstSetModalShow] = React.useState(false);

    //SecondtHandleTooltip
    const [SecondModalShow, SecondSetModalShow] = React.useState(false);

    //ThirdHandleTooltip
    const [ThirdModalShow, ThirdSetModalShow] = React.useState(false);

    //FourthHandleTooltip
    const [FourthModalShow, FourthSetModalShow] = React.useState(false);

    //Check the value of radio button
    const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

    return (
		<div className="container">
			{/* Call popup function*/}
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
						<th>Type of information
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
							<p>What type of information will we have?</p>
							<form className="radio-btn-section">
                                {/* <tr> */}
                                    <label>
                                        <input
                                            type="radio"
                                            name="explicit"
                                            value="explicit"
                                            checked={selectedOption === "explicit"}
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
                                            name="relative"
                                            value="relative"
                                            checked={selectedOption === "relative"}
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
                                {/* </tr> */}
				            </form>
						</td>
					</tr>
                    </tbody>
				</table>
			</div>

			<div id="button-same-line">
				<Link to="/Capacity" state= {{ capacitySelection: "teste" }}>	<button className="inner">BACK</button></Link>
				<Link to="/step5" state= {{  selectedOption   }} ><button className="inner">NEXT</button>	</Link>
			</div>
		</div>
	);
};

export default TypeOfInformation;

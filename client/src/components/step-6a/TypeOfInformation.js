import React,{ useState,useRef } from "react";
import FirstHandleTooltip from "./FirstHandleTooltip";
import SecondHandleTooltip from "./SecondHandleTooltip";
import ThirdHandleTooltip from "./ThirdHandleTooltip";
import FourthHandleTooltip from "./FourthHandleTooltip";
import QuestionMark from "./images/question-mark.png";
import { Link,useNavigate } from "react-router-dom";

const TypeOfInformation = () => {

    //Go to webpage
    const navigate = useNavigate();

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


    const formRef = useRef(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption === "") {
      alert("Please choose an option");
      console.log("nao escolheu");
    } else {
      alert(`You chose ${selectedOption}`);
      console.log("escolheu");
    }
  };

  const handleButtonClick = () => {
    if (selectedOption === "") {
      alert("Please choose an option");
      console.log("No option selected");
    } else {
        navigate("/step5", { state: { selectedOption } });
    }
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
							<form className="radio-btn-section" ref={formRef} onSubmit={handleSubmit}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="option"
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
                                            name="option"
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
                                <button type="submit" style={{ display: "none" }} />
				            </form>
						</td>
					</tr>
                    </tbody>
				</table>
			</div>

			<div id="button-same-line">
				<Link to="/Capacity" state= {{ capacitySelection: "teste" }}>	<button className="inner">BACK</button></Link>
				<button className="inner" onClick={handleButtonClick}>NEXT</button>
                {/* <Link to="/step5" state= {{  selectedOption   }} ><button className="inner" type="submit">NEXT</button>	</Link> */}
			</div>
		</div>
	);
};

export default TypeOfInformation;

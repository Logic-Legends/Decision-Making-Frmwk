import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import tooltipIcon from "./images/tooltipicon.png";
import HandleTooltipClick from "./HandleTooltipClick";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import "./TypeOfDecision.css";

const TypeOfDecision = () => {
    //state for navigation on page by next and back btn
    const [isStarted, setIsStarted] = useState(false);

    //state for showing first topic tooltip
    const [modalShow, setModalShow] = useState(false);

    //state for selecting radio btn
    const { selectedOptionDecision, setSelectedOptionDecision } = useContext(stepProgressContext);

    //state for error handling
    const [isModalOpen, setIsModalOpen] = useState(false);

    //Local storage for storing RB value
    const navigate = useNavigate();
    //click back btn handler
    const handleBackClick = () => {
        setIsStarted(true);
        navigate("/time-resource");
    };

    //click next btn handler
    const handleNextClick = () => {
        if (selectedOptionDecision === null) {
            setIsModalOpen(true);

        } else {
            setIsStarted(true);
            navigate("/type-of-information");
        }
    };

    //radio btn handler
    const handleOptionChange = (event) => {
        setSelectedOptionDecision(event.target.value);
    };

    return (
        <div className="container">
            {/* call first tooltip component */}
            <HandleTooltipClick
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <h1>
                Type Of Decision{" "}
                <img
                    src={tooltipIcon}
                    alt="Tooltip"
                    className="question-mark-pages"
                    onClick={() => setModalShow(true)}
                />
            </h1>
            <section className="border-decision-framework-pages">
                <p>
                    Are you making an iterative or single decision decision?

                </p>
                {/* Radio btn section */}
                <form className="radio-btn-section ">
                    <label>
                        <input
                            type="radio"
                            name="typeOfDecision"
                            value="iterative"
                            checked={selectedOptionDecision === "iterative"}
                            onChange={handleOptionChange}
                            className="radio-input low-rdb"
                        />
                        Iterative Decision
                    </label>
                    <label htmlFor="single">
                        <input
                            type="radio"
                            name="typeOfDecision"
                            value="single"
                            checked={selectedOptionDecision === "single"}
                            onChange={handleOptionChange}
                            className="radio-input high-rdb"
                        />
                        Single Decision
                    </label>
                </form>
                {(selectedOptionDecision == "single") ?
                    <table>
                        <tbody>
                            <tr className="table-background">
                                <th>Single decision:</th>
                            </tr>
                            <tr>
                                <td>
                                    <h6>Advice:</h6>
                                    <p>
                                        Go through the voting methods table once.
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    :
                    <table>
                        <tbody>
                            <tr className="table-background">
                                <th>Iterative decision:</th>
                            </tr>
                            <tr>
                                <td>
                                    <h6>Advice:</h6>
                                    <p>
                                        Go through the voting methods table for each stage of the decision.
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>}
            </section>
            {/* btn sections */}
            <section id="button-same-line">
                {isStarted}
                <button onClick={handleBackClick} className="inner">
                    <Link to="/time-resource"></Link>
                    Back
                </button>
                <button onClick={handleNextClick} className="inner">
                    <Link to="/type-of-information"></Link>Next
                </button>
                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-display">
                            <p>Please select a response</p>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="modal-btn"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default TypeOfDecision;

import React,{ useEffect } from "react";
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
    const { selectedOptionDecision, setSelectedOptionDecision,setStep } = useContext(stepProgressContext);

    //state for error handling
    const [isModalOpen, setIsModalOpen] = useState(false);

    //Local storage for storing RB value
    const navigate = useNavigate();

      // Progress Bar Step Number

      const stepNumber=6;

    //click back btn handler
    const handleBackClick = () => {
        setIsStarted(true);
        setStep(stepNumber-1);
        navigate("/time-resource");

    };

    //click next btn handler
    const handleNextClick = () => {
        if (selectedOptionDecision === null) {
            setIsModalOpen(true);

        } else {
            setIsStarted(true);
            setStep(stepNumber+1);
            navigate("/type-of-information");
        }
    };

    //radio btn handler
    const handleOptionChange = (event) => {
        setSelectedOptionDecision(event.target.value);
        sessionStorage.setItem("selectedOptionDecision", event.target.value);
    };

    //ADD TO STORAGE SESSION LAST PAGE
    useEffect(() => {
        const storedTypeOfDecision = sessionStorage.getItem("selectedOptionDecision");
        if (storedTypeOfDecision) {
            setSelectedOptionDecision(storedTypeOfDecision);
        }
    }, []);


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
                <form className="radio-btn-section container-radio-btn-long-text">
                    <label >
                        <input
                            type="radio"
                            name="typeOfDecision"
                            value="Iterative"
                            checked={selectedOptionDecision === "Iterative"}
                            onChange={handleOptionChange}
                            className="radio-input"
                        />
                        <strong> Iterative Decision</strong> An ongoing decision that needs to updated on a regular schedule
                    </label>
                    <label htmlFor="single">
                        <input
                            type="radio"
                            name="typeOfDecision"
                            value="Single"
                            checked={selectedOptionDecision === "Single"}
                            onChange={handleOptionChange}
                            className="radio-input"
                        />
                        <strong> Single Decision</strong> A one-time decision which does not need further review
                    </label>
                </form>
                {(selectedOptionDecision == "Single") ?
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
                    selectedOptionDecision == "Iterative" ?
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
                    </table>
                    :
                    null
                    }
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

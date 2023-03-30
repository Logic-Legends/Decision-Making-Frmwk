import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import tooltipIcon from "./images/tooltipicon.png";
import HandleTooltipClick from "./HandleTooltipClick";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import "./TypeOfDecision.css";

const TypeOfDecision = () => {
    const stepNumber = 6;
    const [isStarted, setIsStarted] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const { selectedOptionDecision, setSelectedOptionDecision, setStep } = useContext(stepProgressContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const [advice, setAdvice] = useState();
    const [titleAdvice, setTitleAdvice] = useState();
    const checkOption = () => {
        if (selectedOptionDecision === "Iterative") {
            setAdvice("Go through the voting methods table for each stage of the decision.");
            setTitleAdvice("Iterative decision: ");
            sessionStorage.setItem("advice", "Go through the voting methods table for each stage of the decision.");
        } else if (selectedOptionDecision === "Single") {
            setAdvice("Go through the voting methods table once.");
            setTitleAdvice("Single decision: ");
            sessionStorage.setItem("advice", "Go through the voting methods table once.");
        } else {
            setAdvice(null);
            setTitleAdvice(null);
        }
    };
    useEffect(() => {
        checkOption();
    }, [selectedOptionDecision]);
    const handleBackClick = () => {
        setIsStarted(true);
        setStep(stepNumber - 1);
        navigate("/time-and-resource");
    };
    const handleNextClick = () => {
        if (selectedOptionDecision === null) {
            setIsModalOpen(true);

        } else {
            setIsStarted(true);
            setStep(stepNumber + 1);
            navigate("/type-of-information");
        }
    };
    const handleOptionChange = (event) => {
        setSelectedOptionDecision(event.target.value);
        sessionStorage.setItem("selectedOptionDecision", event.target.value);
    };
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
            <h2>
                Type of Decision{" "}
                <img
                    src={tooltipIcon}
                    alt="Tooltip"
                    className="question-mark-pages"
                    onClick={() => setModalShow(true)}
                />
            </h2>
            <section className="border-decision-framework-pages">

                <h6 className="question-margin">
                    Are you making an iterative or single decision?

                </h6>
                {/* Radio btn section */}
                <form className="radio-btn-section container-radio-btn">
                    <label className="radio">
                        <input
                            type="radio"
                            name="typeOfDecision"
                            value="Iterative"
                            checked={selectedOptionDecision === "Iterative"}
                            onChange={handleOptionChange}
                            className="input-radio-btn"
                        />
                        <span className="radio-label">
                            <span className="radio-title">Iterative Decision </span>
                            <span className="radio-description">An ongoing decision that needs to be updated on a regular schedule</span>
                        </span>
                    </label>
                    <label className="radio">
                        <input
                            type="radio"
                            name="typeOfDecision"
                            value="Single"
                            checked={selectedOptionDecision === "Single"}
                            onChange={handleOptionChange}
                            className="input-radio-btn"
                        />
                        <span className="radio-label">
                            <span className="radio-title">Single Decision</span>
                            <span className="radio-description">A one-time decision which does not need further review</span>
                        </span>
                    </label>
                </form>
            </section>
            {/* btn sections */}
            <section id="button-same-line">
                {isStarted}
                <button onClick={handleBackClick} className="inner">
                    <Link to="/time-and-resource"></Link>
                    Back
                </button>
                <button onClick={handleNextClick} className="inner">
                    <Link to="/type-of-information"></Link>Next
                </button>
                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-display">
                            <p>Please select a response!</p>
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

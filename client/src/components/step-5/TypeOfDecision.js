import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import tooltipIcon from "./images/tooltipicon.png";
import HandleTooltipClick from "./HandleTooltipClick";



const TypeOfDecision = () => {
    //state for navigation on page by next and back btn
    const [isStarted, setIsStarted] = useState(false);

    //state for showing first topic tooltip
    const [modalShow, setModalShow] = useState(false);

    //state for selecting radio btn
    const [selectedOption, setSelectedOption] = useState(null);

    //state for error handling
    const [isModalOpen, setIsModalOpen] = useState(false);

    //Local storage for storing RB value
    const navigate = useNavigate();

    useEffect(() => {
        const storedValue = localStorage.getItem("importanceSelection");
        if (storedValue) {
            setSelectedOption(storedValue);
        } else {
            setSelectedOption(null); // Clear the selection when no value is stored in localStorage
        }
    }, []);

    //click back btn handler
    const handleBackClick = () => {
        setIsStarted(true);
        localStorage.setItem("importanceSelection", selectedOption);
        navigate("/time-resource");
    };

    //click next btn handler
    const handleNextClick = () => {
        if (selectedOption === null) {
            setIsModalOpen(true);
        } else {
            setIsStarted(true);
            navigate("/type-of-information");
        }
    };

    //radio btn handler
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        localStorage.setItem("importanceSelection", event.target.value);

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
                <form className="radio-btn-section">
                    <label>
                        <input
                            type="radio"
                            name="typeOfDecision"
                            value="iterative"
                            checked={selectedOption === "iterative"}
                            onChange={handleOptionChange}
                            className="radio-input low-rdb"
                        />
                        Iterative Decision
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="typeOfDecision"
                            value="single"
                            checked={selectedOption === "single"}
                            onChange={handleOptionChange}
                            className="radio-input high-rdb"
                        />
                        Single Decision
                    </label>
                </form>
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

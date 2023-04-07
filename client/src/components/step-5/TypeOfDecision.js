import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { stepProgressContext } from "../ProgressBar/ProgressBarContext";
import "./TypeOfDecision.css";
import HandleToolTip from "../ProgressBar/HandleToolTip";



const TypeOfDecision = () => {
    const stepNumber = 6;
    const location = useLocation();
	const { pathname } = location;

    const [isStarted, setIsStarted] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const { selectedOptionDecision, setSelectedOptionDecision, setStep,setStepCompleted,getStepIdFromLocation } = useContext(stepProgressContext);
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
        navigate("/time-resource");
    };
    const handleNextClick = () => {
        if (!selectedOptionDecision ) {
            setIsModalOpen(true);

        } else {
            setIsStarted(true);
            setStep(stepNumber + 1);
            setStepCompleted(stepNumber+1);
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

      // update the step number when using browser navigation or refreshing the component
	useEffect(() => {
		setStep(getStepIdFromLocation(pathname));
	  }, [pathname]);


      const modalTitle = "<strong>Question to consider:</strong>";
      const modalText = `				<ul className="tooltip-list" style="list-style-type: none;">
      <li>
          Would it be better to do a first pass at the decision with a simple
          voting method (e.g., yes/no to each option) and then do a second
          pass with a more complex voting method (e.g., scale of 1-5 for each
          option)?
      </li>
      <br>
      <li>
          Would it be good for decision-makers to share their views before
          making a final decision?
      </li>
      <br>
      <li>
          Is this an ongoing decision that needs to be updated on a regular
          schedule?
      </li>
  </ul>
  <br></br>
  <div style="text-align: center;">
    <p className="tool-tip-bold">
        <strong>If you answered YES to any of these questions, consider categorizing it
        as iterative.</strong>
    </p>
  </div>`;

    return (
        <div className="container">
            {/* call first tooltip component */}
            <HandleToolTip
                show={modalShow}
                onHide={() => setModalShow(false)}
                title={modalTitle}
				text={modalText}
            />
            <h2>
                Type of Decision{" "}
                <a className="question-mark-button" onClick={() => setModalShow(true)}>?</a>
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
                    <Link to="/time-resource"></Link>
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

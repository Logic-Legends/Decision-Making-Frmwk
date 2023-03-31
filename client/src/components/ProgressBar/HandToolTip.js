import React, { useRef, useEffect } from "react";

function HandToolTip({ show, onHide, title, text }) {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onHide();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      {show && (
        <div className="custom-modal-wrapper">
          <div className="custom-modal" ref={modalRef}>
            <div className="custom-modal-content">
              <span className="close" onClick={onHide}>
                &times;
              </span>
              <p>
                <div dangerouslySetInnerHTML={{ __html: title }}></div>
              </p>
              <div dangerouslySetInnerHTML={{ __html: text }}></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HandToolTip;
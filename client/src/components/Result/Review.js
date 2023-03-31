import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { FaTimes } from "react-icons/fa";+

function Review() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  //state for error handling
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === "" || comment.trim() === "") {
      setIsModalOpen(true);
    } else {
      fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          comment: comment,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setName("");
          setComment("");
          setShowSuccessMessage(true);
          setReviews((prevReviews) => [...prevReviews, data]);
        })
        .catch((error) => {
          console.error(error);
          setShowErrorMessage(true);
        });
    }
  };

  //Show reviews
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const response = await fetch("/api/reviews");
      const data = await response.json();
      setReviews(data);
    }
    fetchReviews();
  }, [reviews]);

  useEffect(() => {
    let timeoutId;
    if (showSuccessMessage) {
      timeoutId = setTimeout(() => {
        setShowSuccessMessage(false);
      },2000); // set the time interval here (in milliseconds)
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showSuccessMessage]);

  const navigate = useNavigate();

  //click back btn handler
  const handleBackClick = () => {
    navigate("/Results");
  };




  return (
    <div className="review-container">
      {showSuccessMessage && (
        <div className="modal">
        <div className="modal-display">
          <p>Thank you for your review!</p>
        </div>
      </div>
      )}
      {showErrorMessage && (
        <div className="modal">
        <div className="modal-display">
          <p>An error occurred. Please try again.</p>
          <button
            onClick={() => setIsModalOpen(false)}
            className="modal-btn"
          >
            OK
          </button>
        </div>
      </div>
      )}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-display">
            <p>Please enter your review before adding it.</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="modal-btn"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <h2 className="review-title">Leave Review</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label className= "review-name-label" htmlFor="name">Name:</label>
        <input
          className="input-review"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value.replace(/[^a-z]/gi, ""))}
          onKeyPress={(event) => {
          if (event.key === "Enter") {
          event.preventDefault();
          }
          }}
          placeholder="Name"
          maxLength="20"
          pattern="[A-Za-z\s]+"
          required
        />
        <label className="review-comment-label" htmlFor="comment">Comment:</label>
        <textarea
          className="input-review"
          id="comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment"
          maxLength="500"
          required
        ></textarea>
        <button onClick={handleBackClick} className="inner">
          Back
        </button>
        <button className="inner" type="submit">Submit</button>
      </form>


      <div className="review-list-container">
      <h2 className="review-title">Reviews</h2>
      <ul className="review-ul">
        {reviews.map((review, index) => (
          <li key={index}>
            <div className="review-card border">
                <div className="review-header">
                  <div className="review-name">{review.name}</div>
                  <div className="review-date">{new Date(review.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</div>
                </div>
              <div className="review-comment">{review.comment}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Review;
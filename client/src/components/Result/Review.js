import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { FaTimes } from "react-icons/fa";

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
  }, []);

  const navigate = useNavigate();

  //click back btn handler
  const handleBackClick = () => {
    navigate("/Results");
  };


  return (
    <div className="review-container">
      {showSuccessMessage && (
        <div className="success-message">Thank you for your review!</div>
      )}
      {showErrorMessage && (
        <div className="error-message">An error occurred. Please try again.</div>
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
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          maxLength="20"
          pattern="[a-zA-Z]+"
          required
        />
        <label htmlFor="comment">Comment:</label>
        <textarea
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
      <h2 className="review-title">Reviews:</h2>
      <ul className="review-ul">
      {reviews.map((review, index) => (
        <li key={index}>
          <div className="review-header">
            {review.name}
          </div>
          <div className="review-comment">{new Date(review.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</div>
          <div className="review-comment">{review.comment}</div>
        </li>
      ))}
    </ul>
    </div>
    </div>
  );
}

export default Review;
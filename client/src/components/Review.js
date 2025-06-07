import React, { useState } from 'react';
import './Review.css'; 
const Review = () => {
  const [reviewText, setReviewText] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    //logic to submit the review
  };

  return (
    <div className="review"> 
      <h2>Write a Review</h2>
      <form onSubmit={handleReviewSubmit}>
        <label>
          Your Review:
          <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Review;

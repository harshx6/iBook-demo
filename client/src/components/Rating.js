import React, { useState } from 'react';
import './Rating.css'; 

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    // logic to handle user's rating for a book
    setRating(newRating);
  };

  return (
    <div className="rating"> 
      <h2>Rate This Book</h2>
      <div>
        <p>Your Rating: {rating}</p>
        {[1, 2, 3, 4, 5].map((value) => (
          <span key={value}>
            <button
              onClick={() => handleRatingChange(value)}
              className={value <= rating ? 'selected' : ''}
            >
              {value}
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
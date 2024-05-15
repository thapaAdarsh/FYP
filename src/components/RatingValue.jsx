// Rating.js
import React from "react";

const Rating = ({ value, size }) => {
  const filledStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  const renderStar = (filled) => {
    return filled ? "★" : "☆";
  };

  const starStyle = {
    fontSize: size // Set the size of the stars using the size prop
  };

  return (
    <div style={starStyle}>
      {[...Array(filledStars)].map((_, index) => (
        <span key={index}>{renderStar(true)}</span>
      ))}
      {hasHalfStar && <span>{renderStar(false)}</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index}>{renderStar(false)}</span>
      ))}
    </div>
  );
};

export default Rating;

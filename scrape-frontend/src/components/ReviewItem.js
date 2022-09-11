import React from "react";

const ReviewItem = ({ review }) => {
  const { comment, rating } = review;
  return (
    <div className="ui very padded segment item">
      <div
        className="header"
        style={{
          fontSize: 24,
          fontFamily: "Varela Round",
          padding: 10,
        }}
      >
        #Review ID: {review.id}
      </div>
      <div className="content">
        <p className="description">Comment: {comment}</p>
        <p className="description">Rating: {rating} out of 5</p>
      </div>
    </div>
  );
};

export default ReviewItem;

import "./Reviews.css";
import React, { useState, useEffect } from "react";
import ReviewItem from "../ReviewItem";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  // const URL = "http://localhost:9292/reviews";
  const URL = `${process.env.REACT_APP_API_URL}/reviews`;

  // CREATE (READ) REVIEWS
  // ======================
  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((reviews) => setReviews(reviews))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
}

export default Reviews;

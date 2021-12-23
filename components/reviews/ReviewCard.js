import React from "react";
import styles from "./reviewCard.module.css";

const ReviewCard = ({ review }) => {
  if (!review) {
    return (
      <div className={styles.card}>
        <p>No reviews in yet, be the first one to review!</p>
      </div>
    );
  }
  const { comment, email, fullName, rating, title } = review;

  return (
    <div className={styles.card}>
      <p>
        {fullName} - {email}
      </p>
      <h1>{title}</h1>
      <p>Rating {rating}</p>
      <article>{comment}</article>
    </div>
  );
};

export default ReviewCard;

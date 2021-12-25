import React from "react";
import styles from "./reviewCard.module.css";
import ReactStars from "react-rating-stars-component";

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
      <div className={styles.stars}>
        <ReactStars
          activeColor="#f5961d"
          count={5}
          edit={false}
          isHalf={true}
          value={rating}
          size={18}
        />
      </div>
      <article>{comment}</article>
    </div>
  );
};

export default ReviewCard;

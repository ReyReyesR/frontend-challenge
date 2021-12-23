import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ data }) => {
  return (
    <div>
      {data?.length ? (
        data
          .map((review) => {
            return <ReviewCard key={review.id} review={review} />;
          })
          .reverse()
      ) : (
        <ReviewCard />
      )}
    </div>
  );
};

export default Reviews;

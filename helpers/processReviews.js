const processReviews = (reviews) => {
  let [five, four, three, two, one] = Array(5).fill(0);

  reviews.map((review) => {
    if (review.rating === 5) five++;
    if (review.rating === 4) four++;
    if (review.rating === 3) three++;
    if (review.rating === 2) two++;
    if (review.rating === 1) one++;
  });

  const average =
    reviews
      .map((review) => review.rating)
      .reduce((prev, curr) => prev + curr, 0) / reviews.length;
  const count = reviews.length;
  const results = [five, four, three, two, one];
  return { average, results, count };
};

export default processReviews;

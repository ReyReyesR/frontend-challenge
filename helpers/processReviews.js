const getAverage = (reviews) =>
  reviews
    .map((review) => review.rating)
    .reduce((prev, curr) => prev + curr, 0) / reviews.length;

const getResults = (reviews) => {
  const [five, four, three, two, one] = Array(5).fill(0);

  /*
   * I did not use a reduce array on this instance due to the fact
   *  if any rating is equal to 0 there would be no entry on the
   *  produced array meaning there would be no data for the bar chart.
   */

  reviews.map((review) => {
    if (review.rating === 5) five++;
    if (review.rating === 4) four++;
    if (review.rating === 3) three++;
    if (review.rating === 2) two++;
    if (review.rating === 1) one++;
  });
  return [five, four, three, two, one];
};

const processReviews = (reviews) => {
  return {
    average: getAverage(reviews),
    results: getResults(reviews),
    count: reviews.length,
  };
};

export default processReviews;

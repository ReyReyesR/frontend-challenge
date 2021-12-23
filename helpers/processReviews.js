const processReviews = (reviews) => {
  let count = 0;
  let total = 0;
  let five = 0;
  let four = 0;
  let three = 0;
  let two = 0;
  let one = 0;

  reviews.map((review) => {
    count = count + review.rating;
    if (review.rating === 5) five++;
    if (review.rating === 4) four++;
    if (review.rating === 3) three++;
    if (review.rating === 2) two++;
    if (review.rating === 1) one++;
  });
  total = count / reviews.length;
  return { total, five, four, three, two, one, count: reviews.length };
};

export default processReviews;

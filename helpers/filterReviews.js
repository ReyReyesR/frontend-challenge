const filterReviews = (props) => {
  const { data, filter } = props;
  return data.filter((review) => review.rating === filter);
};
export default filterReviews;

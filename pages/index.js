import React, { useState, useEffect } from "react";
import getReviews from "../helpers/getReviews";
import processReviews from "../helpers/processReviews";
import Chart from "../components/chart/Chart";
import Reviews from "../components/reviews/Reviews";
import classes from "./index.module.css";
import Button from "../components/ui/button";
import ReactStars from "react-rating-stars-component";

const Home = () => {
  const [data, setData] = useState(null);
  const [ratings, setRatings] = useState(0);
  const [reviews, setReviews] = useState(null);
  const [value, setValue] = useState(0);
  const [filter, setFilter] = useState(null);

  const getAllReviews = async (filter) => {
    if (filter) {
      const allReviews = await getReviews(filter);
      setReviews(allReviews);
    } else {
      const allReviews = await getReviews();
      const { average, results, total } = processReviews(allReviews);
      setData(results);
      setValue(parseFloat(average.toFixed(2)));
      setReviews(allReviews);
      setRatings(total);
    }
  };

  const reviewFilterCallback = (data) => {
    setFilter(data);
  };

  useEffect(() => {
    getAllReviews(filter);
  }, [filter]);

  useEffect(() => {
    getAllReviews();
  }, []);

  return (
    <div className={classes.container}>
      <main>
        <h1 className={classes.title}>Checkout.com Customer Feedback Page</h1>
        <div className={classes.grid}>
          <div className={classes.left}>
            {
              <div className={classes.box}>
                <h2>Customer Reviews</h2>
                {value ? (
                  <div>
                    <ReactStars
                      activeColor="#f5961d"
                      count={5}
                      edit={false}
                      isHalf={true}
                      value={value}
                      size={24}
                    />
                    {value} out of 5
                  </div>
                ) : (
                  <div>No ratings!</div>
                )}
                <div>{ratings} Total Ratings</div>
                {filter && (
                  <div className={classes.button}>
                    <Button onClick={() => setFilter(null)}>
                      Clear Filters
                    </Button>
                  </div>
                )}
                <div className={classes.chart}>
                  <Chart data={data} callback={reviewFilterCallback} />
                </div>
              </div>
            }
            <div className={classes.feedback}>
              <strong>Review this product!</strong>
              <p>Tell us what you think</p>
              <Button link="/review">Write a Review</Button>
            </div>
          </div>
          <div className={classes.right}>
            <Reviews data={reviews} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

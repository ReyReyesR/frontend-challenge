import axios from "axios";
import filterReviews from "./filterReviews";

const getReviews = async (filter) => {
  try {
    const { data } = await axios({
      headers: {
        accept: "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      method: "GET",
      url: "http://localhost:3004/reviews",
    });
    if (filter) return filterReviews({ data, filter });
    return data;
  } catch (error) {
    console.error(error.response);
    return null;
  }
};

export default getReviews;

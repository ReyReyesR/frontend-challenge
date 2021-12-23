import axios from "axios";

const postReview = async (data) => {
  try {
    const result = await axios({
      data,
      headers: {
        accept: "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      method: "POST",
      url: "http://localhost:3004/reviews",
    });
    if (result) return true;
    return false;
  } catch (error) {
    console.error(error.response);
    return false;
  }
};

export default postReview;

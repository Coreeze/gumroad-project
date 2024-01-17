import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const endpoints = {
  default: "/api/review",
  create: "/create",
  get: "/get",
};

export const createReview = async (data) => {
  try {
    const requestUrl = BASE_URL + endpoints.default + endpoints.create;

    var config = {
      method: "post",
      url: requestUrl,
      data,
    };

    const response = await axios(config);

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getReview = async ({ productId, user }) => {
  try {
    const requestUrl =
      BASE_URL +
      endpoints.default +
      endpoints.get +
      `?productId=${productId}&user=${user}`;

    var config = {
      method: "get",
      url: requestUrl,
    };

    const response = await axios(config);

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

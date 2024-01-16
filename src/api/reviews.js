const BASE_URL = process.env.REACT_APP_SERVER;

const endpoints = {
  default: "/api/reviews",
  create: "/create",
  get: "/get",
};

export const createReview = async (data) => {
  const response = await fetch(BASE_URL + endpoints.create, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const getReviews = async () => {
  const response = await fetch(BASE_URL + endpoints.get, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

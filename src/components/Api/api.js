import axios from "axios";

const ACCESS_KEY = "bC9Y0JD6XZ2qTWbs8qQwT_4PTroYWKuL_hxdm6je2to";

export const requestPicsByQuery = async (query, page) => {
  try {
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=20`,
      {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      }
    );

    return data;
  } catch (error) {
    console.error("An error occurred while making the request:", error);
    throw error;
  }
};

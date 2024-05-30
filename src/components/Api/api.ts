import axios, { AxiosResponse } from "axios";

const ACCESS_KEY = "bC9Y0JD6XZ2qTWbs8qQwT_4PTroYWKuL_hxdm6je2to";

interface UnsplashResponse {
  results: UnsplashPhoto[];
}

interface UnsplashPhoto {
  id: string;
  urls: {
    regular: string;
  };
}

export const requestPicsByQuery = async (
  query: string,
  page: number
): Promise<UnsplashResponse> => {
  try {
    const { data }: AxiosResponse<UnsplashResponse> = await axios.get(
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

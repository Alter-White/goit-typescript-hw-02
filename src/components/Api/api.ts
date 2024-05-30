import axios, { AxiosResponse } from "axios";
import { PicsResponse } from "../../App";

const ACCESS_KEY = "bC9Y0JD6XZ2qTWbs8qQwT_4PTroYWKuL_hxdm6je2to";

export const requestPicsByQuery = async (
  query: string,
  page: number
): Promise<PicsResponse> => {
  const response: AxiosResponse<PicsResponse> = await axios.get(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=20`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }
  );

  return response.data;
};

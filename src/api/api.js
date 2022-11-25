import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/books/v1`,
});

export const booksAPI = {
  async search({ search, startIndex }) {
    try {
      const res = await instance.get("/volumes", {
        params: {
          key: process.env.REACT_APP_API_KEY,
          q: `intitle:"${search}"`,
          startIndex,
        },
      });
      return res.data;
    } catch (error) {
      return axios.isAxiosError(error) ? error.response?.data : error.response;
    }
  },
};

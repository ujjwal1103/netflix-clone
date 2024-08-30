import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:5000/api/",
  withCredentials: true,
});

request.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { status } = error.response || {};

    if (status === 401) {
      localStorage.clear();
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export { request };

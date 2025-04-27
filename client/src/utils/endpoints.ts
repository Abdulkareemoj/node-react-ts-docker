import axios from "axios";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL || "http://localhost:7000",
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get the token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Set the token in the Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor (optional)
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors here
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Response error:", error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Request error:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

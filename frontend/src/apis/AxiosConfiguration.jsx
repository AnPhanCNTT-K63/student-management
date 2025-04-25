import axios from "axios";
const API_URL = "http://localhost:3000/api";

const apiClient = axios.create({
  baseURL: API_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      console.log("No token found in localStorage or sessionStorage");
    }
    console.log("Authorization header:", config.headers["Authorization"]);
    return config;
  },
  (error) => Promise.reject(error)
);

const handleApiError = (error) => {
  if (error.response) {
    console.error("API Error:", error.response.status, error.response.data);

    if (error.response.status === 401) {
      console.error("Unauthorized - redirecting to login");
    }

    return {
      success: false,
      error: error.response.data,
      status: error.response.status,
    };
  } else if (error.request) {
    console.error("No response received:", error.request);
    return {
      success: false,
      error: "Network error - no response received",
      status: 0,
    };
  } else {
    console.error("Request error:", error.message);
    return {
      success: false,
      error: error.message,
      status: 0,
    };
  }
};

const callApi = async (method, endpoint, data = null, options = {}) => {
  try {
    const config = {
      ...options,
    };

    let response;

    switch (method.toLowerCase()) {
      case "get":
        response = await apiClient.get(endpoint, config);
        break;
      case "post":
        response = await apiClient.post(endpoint, data, config);
        break;
      case "put":
        response = await apiClient.put(endpoint, data, config);
        break;
      case "patch":
        response = await apiClient.patch(endpoint, data, config);
        break;
      case "delete":
        response = await apiClient.delete(endpoint, config);
        break;
      default:
        throw new Error(`Unsupported API method: ${method}`);
    }

    return {
      success: true,
      res: response.data,
      status: response.status,
    };
  } catch (error) {
    return handleApiError(error);
  }
};

export const apiGet = (endpoint, options = {}) =>
  callApi("get", endpoint, null, options);
export const apiPost = (endpoint, data, options = {}) =>
  callApi("post", endpoint, data, options);
export const apiPut = (endpoint, data, options = {}) =>
  callApi("put", endpoint, data, options);
export const apiPatch = (endpoint, data, options = {}) =>
  callApi("patch", endpoint, data, options);
export const apiDelete = (endpoint, options = {}) =>
  callApi("delete", endpoint, null, options);

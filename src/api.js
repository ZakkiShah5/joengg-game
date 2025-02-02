import axios from "axios";

const BASE_URL = "https://apigame.meccain.com";

// Get token from localStorage
const getAuthToken = () => {
  const token = localStorage.getItem("authToken");
  console.log("🔹 Using Token:", token || "No token found"); // Debugging
  return token;
};

// Create Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach Authorization dynamically to each request
api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = token; // Keep this if API does NOT require Bearer
      // If API requires "Bearer <token>", use:
      // config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.warn("⚠️ No auth token found. API calls may fail.");
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Prevent multiple login attempts
let isReauthenticating = false;

// Handle API Errors Globally
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.warn("⚠️ Unauthorized request. Re-authenticating...");
      localStorage.removeItem("authToken");

      if (!isReauthenticating) {
        isReauthenticating = true;
        const newSession = await loginUser(); // Attempt to log in again
        isReauthenticating = false;

        if (newSession) {
          error.config.headers.Authorization = newSession;
          return api.request(error.config); // Retry the failed request with new session
        }
      }

      return Promise.reject("Unauthorized - Logging in again...");
    }
    return Promise.reject(error);
  }
);

// Login function (called if session is invalid)
export const loginUser = async () => {
  try {
    console.log("🔄 Attempting login...");
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      security_code: "joasdf8921kljds",
      telegram_id: 10,
    });

    if (response.data.sessionId) {
      const sessionId = response.data.sessionId;
      localStorage.setItem("authToken", sessionId);
      console.log("✅ New session stored:", sessionId);
      return sessionId;
    } else {
      console.error("❌ Login failed: No session ID returned.");
      return null;
    }
  } catch (error) {
    console.error("❌ Login error:", error.response?.data || error.message);
    return null;
  }
};

export default api;

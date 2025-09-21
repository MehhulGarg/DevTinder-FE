import axios from "axios";


const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    "Content-Type": "application/json",
  }
});
export async function login(emailId, password) {
  try {
    const response = await apiClient.post("login", {
      emailId,
      password,
    },
      {
        withCredentials: true,
      });

    console.log("Login successful:", response.data);
    return response.data; // maybe contains token/user info
  } catch (error) {
    if (error.response) {
      // Server responded with error status
      console.error("Login failed:", error.response.data);
    } else {
      console.error("Error:", error.message);
    }
  }
}
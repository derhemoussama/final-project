import request from "../utils/request";
import { toast } from "react-toastify";


// Login User
export function loginUser(userData) {
 
  return async () => {
    try {
      const { data } = await request.post("/api/login", userData, {
        withCredentials: true,
      });
      const { user, token } = data;
      console.log("DATA:", user);
      localStorage.setItem("userInfo", JSON.stringify(token)); // Save user info to local storage
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

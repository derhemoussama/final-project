import { getAllUsers } from "../redux/users/userSlice";
import request from "../utils/request";
import { toast } from "react-toastify";
import store from "../redux/store";
// Fetch All Users
export async function fetchUsers() {
  try {
    const token = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
    // console.log("token", token);

    if (!token) {
      throw new Error("Token not found");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await request.get("/users/", config);
    store.dispatch(getAllUsers(data));
    console.log(data);
  } catch (error) {
    console.error("Error fetching users:", error);
    toast.error("Failed to fetch users. Please try again.");
  }
}

export const fetchUsersByCriteria = async (searchQuery, searchCriteria) => {
  try {
    const response = await request.post("/users/search", {
      query: searchQuery,
      criteria: searchCriteria,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};


// // Fetch All Users
// export async function fetchUsers(page, limit) {
//   try {
//     const token = localStorage.getItem("userInfo")
//       ? JSON.parse(localStorage.getItem("userInfo"))
//       : null;

//     if (!token) {
//       throw new Error("Token not found");
//     }

//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       params: {
//         page: page,
//         limit: limit,
//       },
//     };

//     const { data } = await request.get("/users/", config);
//     store.dispatch(getAllUsers(data));
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     toast.error("Failed to fetch users. Please try again.");
//   }
// }


// Delete User
export const deleteUser = async (userId) => {
  try {
    const token = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

    if (!token) {
      throw new Error("Token not found");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await request.delete(`/users/delete/${userId}`, config);
    if (response.status === 200) {
      toast.success("User deleted successfully");
    } else {
      throw new Error(response.data.message || "Failed to delete user");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    toast.error(error.message || "Failed to delete user. Please try again.");
  }
};

// Edit User
export const modifierUser = async (userId, userData) => {
  try {
    const token = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

    if (!token) {
      throw new Error("Token not found");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await request.put(`/users/edit/${userId}`, userData, config);
    if (response.status === 200) {
      toast.success("User details updated successfully");
    } else {
      throw new Error(response.data.message || "Failed to update user details");
    }
  } catch (error) {
    console.error("Error updating user:", error);
    toast.error(error.message || "Failed to update user details. Please try again.");
  }
};


// Add User
// export const addUser = async (userData) => {
//   try {
//     const token = localStorage.getItem("userInfo")
//       ? JSON.parse(localStorage.getItem("userInfo"))
//       : null;

//     if (!token) {
//       throw new Error("Token not found");
//     }

//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const response = await request.post(`/users/add`, userData, config);
//     if (response.status === 201) {
//       toast.success("User added successfully");
//     } else {
//       throw new Error(response.data.message || "Failed to add user");
//     }
//   } catch (error) {
//     console.error("Error adding user:", error);
//     toast.error(error.message || "Failed to add user. Please try again.");
//   }
// };

export const addUser = async (userData) => {
  try {
    const token = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;

    if (!token) {
      throw new Error("Token not found");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await request.post(`/users/add`, userData, config);
    if (response.status === 201) {
      toast.success("User added successfully");
      return response.data; // Return the data from the response
    } else {
      throw new Error(response.data.message || "Failed to add user");
    }
  } catch (error) {
    console.error("Error adding user:", error);
    toast.error(error.message || "Failed to add user. Please try again.");
    throw error; // Re-throw the error
  }
};


// export const addUser = async (userData) => {
//   try {
//     const token = localStorage.getItem("userInfo")
//       ? JSON.parse(localStorage.getItem("userInfo"))
//       : null;

//     if (!token) {
//       throw new Error("Token not found");
//     }

//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const response = await request.post(`/users/add`, userData, config); // userData should be passed as the second argument
//     if (response.status === 201) {
//       toast.success("User added successfully");
//     } else {
//       throw new Error(response.data.message || "Failed to add user");
//     }
//   } catch (error) {
//     console.error("Error adding user:", error);
//     toast.error(error.message || "Failed to add user. Please try again.");
//   }
// };

// export const addUser = async (userData) => {
//   try {
//     console.log("UserData:", userData); // Add this line to log userData
//     const token = localStorage.getItem("userInfo")
//       ? JSON.parse(localStorage.getItem("userInfo"))
//       : null;

//     if (!token) {
//       throw new Error("Token not found");
//     }

//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     console.log("Config:", config); // Add this line to log the request configuration

//     const response = await request.post(`/users/add`, userData, config); // userData should be passed as the second argument
//     console.log("Response data:", response.data); // Add this line to log response data

//     if (response.status === 201) {
//       toast.success("User added successfully");
//     } else {
//       throw new Error(response.data.message || "Failed to add user");
//     }
//   } catch (error) {
//     console.error("Error adding user:", error);
//     if (error.response) {
//       console.error("Response data:", error.response.data);
//     }
//     toast.error(error.message || "Failed to add user. Please try again.");
//   }
// };


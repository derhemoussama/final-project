
import request from "../utils/request";
import { toast } from "react-toastify";
import store from "../redux/store";
import { getAllProduct } from "../redux/products/productSlice";
// Fetch All Products
export async function fetchProducts() {
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

    const { data } = await request.get("/products/", config);
    store.dispatch(getAllProduct(data));
    console.log(data);
  } catch (error) {
    console.error("Error fetching products:", error);
    toast.error("Failed to fetch products. Please try again.");
  }
}
// Delete Product
export const deleteProduct = async (productId) => {
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
  
      const response = await request.delete(`/products/delete/${productId}`, config);
    

      if (response.status === 200) {
        toast.success("Product deleted successfully");
      } else {
        throw new Error(response.data.message || "Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error(error.message || "Failed to delete product. Please try again.");
    }
  };

//   // Edit User
// export const modifierProduct = async (productId, productData) => {
//     try {
//       const token = localStorage.getItem("userInfo")
//         ? JSON.parse(localStorage.getItem("userInfo"))
//         : null;
  
//       if (!token) {
//         throw new Error("Token not found");
//       }
  
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
  
//       const response = await request.put(`/products/edit/${productId}`, productData, config);
//       if (response.status === 200) {
//         toast.success("Product details updated successfully");
//       } else {
//         throw new Error(response.data.message || "Failed to update product details");
//       }
//     } catch (error) {
//       console.error("Error updating product:", error);
//       toast.error(error.message || "Failed to update product details. Please try again.");
//     }
//   };

// Edit Product
export const modifierProduct = async (productId, productData) => {
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
  
      const response = await request.put(
        `/products/edit/${productId}`,
        productData,
        config
      );
      if (response.status === 200) {
        return response.data; // return updated product data
      } else {
        throw new Error(
          response.data.message || "Failed to update product details"
        );
      }
    } catch (error) {
      throw error;
    }
  };
  
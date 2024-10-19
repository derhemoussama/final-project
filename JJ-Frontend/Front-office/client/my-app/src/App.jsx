import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
// import Signup from './components/Signup';
import PageAdmin from "./pages/pageAdmin";
import ProductPage from "./pages/productPage";
import PageOrders from "./pages/PageOrders";
import PageReviews from "./pages/PageReviews";
import PageCategories from "./pages/PageCategories";
import PageCustomers from "./pages/PageCustomers";
import PageUsers from "./pages/PageUsers";
import { useSelector } from "react-redux";

function App() {
  //const [user, setUser] = useState(null);
  const user = useSelector((state) => state.auth);
  console.log("user", user);
  return (
    <>
      <BrowserRouter>
        <ToastContainer theme="colored" position="top-center" />

        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/" element={<PageAdmin />} />
          <Route path="/products" element={<ProductPage />} />
          {/* // element={user ? <ProductPage /> : <Navigate to="/login" />} */}
          {/* /> */}
          <Route path="/orders" element={<PageOrders />} />
          <Route path="/reviews" element={<PageReviews />} />
          <Route path="/Categories" element={<PageCategories />} />
          <Route path="/Customers" element={<PageCustomers />} />
          <Route path="/users" element={<PageUsers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

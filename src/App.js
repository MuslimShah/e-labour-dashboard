import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Corrected Import

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar/navbar";
import Sidebar from "./Components/SideBar/sidebar";
import Dashboard from "./Pages/Dashboard/dashboard";

import CategoryPage from "./Pages/Categories/category_page";
import AllAdmins from "./Pages/Admin/all_Admins";
import Users from "./Pages/Users/Users";
import Login from "./Pages/Authentication/login";

import ForgotPassword from "./Pages/Authentication/forgotPassword";
import { useDispatch, useSelector } from "react-redux";
import { useGetCurrentUserQuery } from "./features/Auth_Api_Slice";
import { setCredientials } from "./features/Auth_Slice";
import ResetPassword from "./Pages/Authentication/ResetPassword";

function App() {
  const { token } = useSelector((state) => state.auth);
  const { data } = useGetCurrentUserQuery(token);
  const dispatch = useDispatch();

  if (data) {
    dispatch(setCredientials(data));
  }

  if (token) {
    return (
      <Router>
        <ToastContainer style={{ zIndex: 9999 }} position="top-center" />
        <div className="container-scroller">
          <Navbar />
          <div className="container-fluid page-body-wrapper">
            <Sidebar />
            <div className="main-panel">
              <div className="content-wrapper">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/list-category" element={<CategoryPage />} />
                  <Route path="/admin" element={<AllAdmins />} />
                  <Route path="/user" element={<Users />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <ToastContainer style={{ zIndex: 9999 }} position="top-center" />
      <div className="container-scroller">
        <Navbar />

        <div className="main-panel">
          <div className="content-wrapper">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/otp" element={<ResetPassword />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

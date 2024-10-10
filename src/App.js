import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom"; // Corrected Import

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar/navbar";
import Sidebar from "./Components/SideBar/sidebar";
import Dashboard from "./Pages/Dashboard/dashboard";

import CategoryPage from "./Pages/Categories/category_page";
import AllAdmins from "./Pages/Admin/all_Admins";
import Users from "./Pages/Users/Users";
import Login from "./Pages/Authentication/login";
import Otp from "./Pages/Authentication/otp";
import ForgotPassword from "./Pages/Authentication/forgotPassword";
import { useDispatch, useSelector } from "react-redux";
import { useGetCurrentUserQuery } from "./features/Auth_Api_Slice";
import { setCredientials } from "./features/Auth_Slice";

function App() {
  const dispatch = useDispatch();
  const { token, userInfo } = useSelector((state) => state.auth);
  const { data, error } = useGetCurrentUserQuery(token, {
    skip: !token,
  });

  if (data) {
    dispatch(setCredientials(data));
  }

  if (error) {
    console.log(error);
    toast.error("Something went wrong");
  }

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
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/list-category" element={<CategoryPage />} />
                <Route path="/admin" element={<AllAdmins />} />
                <Route path="/user" element={<Users />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/otp" element={<Otp />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

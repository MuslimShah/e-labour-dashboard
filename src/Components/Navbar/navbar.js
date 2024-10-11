import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/Auth_Slice";

function Navbar() {
  const { userInfo, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a class="navbar-brand brand-logo mr-5" href="index.html">
          <img src="./logo.ico" class="mr-2" alt="logo" />
        </a>
        <a class="navbar-brand brand-logo-mini" href="index.html">
          <img src="../../images/logo-mini.svg" alt="logo" />
        </a>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button
          class="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span class="ti-layout-grid2"></span>
        </button>

        <ul class="navbar-nav navbar-nav-right">
          {token && (
            <li class="nav-item nav-profile dropdown">
              <p
                class="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                id="profileDropdown"
              >
                <img src={userInfo.image} alt={userInfo.name} />
              </p>
              <div
                class="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="profileDropdown"
              >
                <p class="dropdown-item" onClick={logoutHandler}>
                  <i class="ti-power-off text-primary"></i>
                  Logout
                </p>
              </div>
            </li>
          )}
        </ul>
        <button
          class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span class="ti-layout-grid2"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

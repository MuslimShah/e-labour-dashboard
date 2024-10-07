import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">
              <i class="ti-home menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/list-category">
              <i class="ti-home menu-icon"></i>
              <span class="menu-title">Category</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/admin">
              <i class="ti-home menu-icon"></i>
              <span class="menu-title">Add Admin</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/user">
              <i class="ti-home menu-icon"></i>
              <span class="menu-title">User</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;

import React from "react";
import "./Style.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div
      class="col-md-3 col-lg-2 sidebar-offcanvas pl-0"
      id="sidebar"
      role="navigation"
    >
      <div class="navSide flex-column sticky-top pl-0 pt-5 p-3 mt-2 ">
        <div class="nav-item mb-2 mt-1">
          <label class="nav-link text-secondary">
            <h1>Dash Board</h1>
          </label>
        </div>
        <div className="nav-item mb-2">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <li
              class="nav-link btn btn-outline-primary p-2 mt-3 active"
              aria-current="page"
            >
              Info
            </li>
          </NavLink>
          <NavLink to="/search" style={{ textDecoration: "none" }}>
            <li
              class="nav-link btn btn-secondary p-2 mt-3 active"
              aria-current="page"
            >
              Search
            </li>
          </NavLink>
          {/* <NavLink to="/weight" style={{ textDecoration: "none" }}>
            <li
              class="nav-link btn btn-secondary p-2 mt-3 active"
              aria-current="page"
            >
              Weight
            </li>
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

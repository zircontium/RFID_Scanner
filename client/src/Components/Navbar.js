import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container mx-5">
          <div className="navbar-brand">TMILL</div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink className="mx-4" to="/" style={{ textDecoration: "none" }}>
                <li class="nav-item">Home</li>
              </NavLink>
              <NavLink className="mx-4" to="/adddevice" style={{ textDecoration: "none" }}>
                <li class="nav-item">Add Device</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

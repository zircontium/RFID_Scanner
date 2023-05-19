import { React } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <label class="navbar-brand px-5">TMILL</label>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NavLink to="/" className="nav-link active mx-2" aria-current="page">Home</NavLink>
              <NavLink to="/addDevice" className="nav-link active ">Connect Device</NavLink>
              <NavLink to="/devices" className="nav-link ">Devices</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default Navbar;

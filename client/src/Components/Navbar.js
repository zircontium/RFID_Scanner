import { React } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-brand px-5">TMILL</div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample02">
          <ul class="navbar-nav mr-auto">
            <NavLink className="mx-4" to="/" style={{ textDecoration: "none" }}>
              <li class="btn btn-primary">Home</li>
            </NavLink>
            <NavLink className="mx-4" to="/adddevice" style={{ textDecoration: "none" }}>
              <li class="btn btn-primary">Add Device</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>

  );
}

export default Navbar;

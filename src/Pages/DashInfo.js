import React from "react";
import Sidebar from "../Components/SideBar";
import Info from "../Components/Info";

function DashInfo() {
  return (
    <div>
      <div className="row">
        <Sidebar />
        <div class="col" id="accordions">
          <Info />
        </div>
      </div>
    </div>
  );
}

export default DashInfo;

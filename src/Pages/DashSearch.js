import React from "react";
import Sidebar from "../Components/SideBar";
import Search from "../Components/Search";
function DashSearch() {
  return (
    <div>
      <div className="row">
        <Sidebar />
        <div class="col" id="accordions">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default DashSearch;

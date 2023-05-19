import React from "react";
import "../Components/Style.css";
import Table from "./TableData";

function Search() {
  return (
    <div className="bg">
      <div className="container">
        <form>
          <div className="mt-4 p-4" controlId="formBasicEmail">
            <label>Search by RFID no.:</label>
            <input className="form-control"></input>
            <button className="btn btn-primary mt-3" type="submit">
              Search
            </button>
          </div>
        </form>
        <Table />
      </div>
    </div>
  );
}

export default Search;

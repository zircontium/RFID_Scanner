import React from "react";
import "./Ui.css";
import Table from "./TableData";

function Ui() {
  return (
    <div>
      <div className="container">
        <form>
          <div className="mb-3 mt-4" controlId="formBasicEmail">
            <label>Search by RFID no.:</label>
            <input className="form-control"></input>
          </div>
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
        <Table />
      </div>
    </div>
  );
}

export default Ui;

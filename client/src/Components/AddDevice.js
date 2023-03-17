import React from "react";
import { useState } from "react";

function AddDevice() {
  const [button1Checked, setButton1Checked] = useState(false);
  const [button2Checked, setButton2Checked] = useState(false);

  const handleButton1Change = (event) => {
    setButton1Checked(event.target.checked);
    setButton2Checked(false);
  };

  const handleButton2Change = (event) => {
    setButton2Checked(event.target.checked);
    setButton1Checked(false);
  };
  return (
    <div className="container mt-5">
      <form>
        <div className="row">
          <div className="col px-2">
            <div className="form-check form-switch">
              <input
                id="button1"
                checked={button1Checked}
                onChange={handleButton1Change}
                className="form-check-input"
                type="checkbox"
              />
              <label className="form-check-label" for="form11Example4">
                Turn on COM
              </label>
            </div>
            <label className="mt-2" for="inputEmail4">
              Serial Port
            </label>
            <select className="form-control">
              <option>Select Port</option>
              <option>Com1</option>
              <option>Com2</option>
              <option>Com3</option>
              <option>Com4</option>
              <option>Com5</option>
              <option>Com6</option>
              <option>Com7</option>
              <option>Com8</option>
            </select>
            <label className="mt-2" for="inputEmail4">
              Baud rate:
            </label>
            <select className="form-control">
              <option>Select Baud rate</option>
              <option>9600</option>
              <option>14400</option>
              <option>19200</option>
              <option>38400</option>
              <option>57600</option>
              <option>115200</option>
              <option>128000</option>
              <option>256000</option>
            </select>
            <button type="submit" className="btn btn-primary mt-2 ">
              Open
            </button>
            <button type="submit" className="btn btn-primary mx-2 mt-2">
              Close
            </button>
          </div>
          <div className="col">
            <div className="form-check form-switch">
              <input
                id="button2"
                checked={button2Checked}
                onChange={handleButton2Change}
                className="form-check-input"
                type="checkbox"
              />
              <label class="form-check-label" for="form11Example4">
                Turn on TCP
              </label>
            </div>
            <label className="mt-2" for="inputEmail4">
              Enter IP
            </label>
            <input className="form-control" placeholder="135.7.47.28"></input>
            <label for="inputEmail4" className="mt-2">
              Enter Connecting Port:
            </label>
            <input className="form-control" placeholder="6000"></input>
            <button type="submit" class="btn btn-primary mt-2 ">
              Open
            </button>
            <button type="submit" className="btn btn-primary mx-2 mt-2">
              Close
            </button>
          </div>
        </div>
        <label className="mt-2" for="comment">
          Electronics Product Code (EPC) :
        </label>
        <textarea
          className="form-control"
          rows="10"
          id="comment"
          name="text"
        ></textarea>
        <div className="d-flex justify-content-center mt-2">
          <button type="submit" class="btn btn-primary btn-lg">
            Start
          </button>
          <button type="submit" className="btn btn-primary btn-lg mx-2">
            Stop
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddDevice;

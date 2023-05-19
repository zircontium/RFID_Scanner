import React, { useState, useEffect } from "react";
import { AllID } from "./AddDevice";
import { stopTCP } from "../api";

function Devices() {
  useEffect(() => {
    localStorage.setItem("connected_device", AllID.length);
  }, );

  const [deviceIDs, setDeviceIDs] = useState(
    sessionStorage.getItem("AllID") != null
      ? JSON.parse(sessionStorage.getItem("AllID"))
      : []
  );
  // const [storedID, setStoredID] = useState(sessionStorage.getItem("AllID") != null ? sessionStorage.getItem("AllID").length : [])

  const handleCloseButtonClick = (deviceID, index) => {
    stopTCP(deviceID);
    setDeviceIDs(deviceIDs.filter((id) => id !== deviceID));
    sessionStorage.setItem(
      "AllID",
      JSON.stringify(deviceIDs.filter((id) => id !== deviceID))
    );
  };

  return (
    <div className="container mt-5 shadow">
      <div className="row pt-4">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Device ID</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {deviceIDs.map((deviceID, index) => (
                <tr key={deviceID}>
                  <td>{deviceID}</td>
                  <td>
                    <button
                      onClick={() => handleCloseButtonClick(deviceID, index)}
                      type="button"
                      className="btn btn-primary"
                    >
                      Close
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Devices;

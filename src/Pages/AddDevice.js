import { React, useEffect } from "react";
import { useState } from "react";
import { addReader, closePort, openPort, stopTCP, startTCP } from "../api";

export let AllID = [];

function AddDevice() {

  const [data, setData] = useState({
    ip: "135.7.47.28",
    port: "6000",
  });

  const [isEnableTcpChecked, setEnableTcpChecked] = useState(false);

  const [isChecked, setIsChecked] = useState(false);


  useEffect(() => {
    if (sessionStorage.getItem("AllID") === null) {
      sessionStorage.setItem("AllID", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    if (isChecked) {
      AllID.push("res");
      addReader()
        .then((res) => {
          setId(res);
          if (sessionStorage.getItem("AllID") != null) {
            var storedID = JSON.parse(sessionStorage.getItem("AllID"));
            storedID.push(res);
            sessionStorage.setItem("AllID", JSON.stringify(storedID));
          }
        })
        .catch((err) => console.log(err.message));
    }
  }, [isChecked]);

  const handleEnableTcp = (event) => {
    setEnableTcpChecked(!isEnableTcpChecked);
    setIsChecked(event.target.checked);
  };

  const [id, setId] = useState("");

  const handleOpenPort = (e) => {
    e.preventDefault();
    openPort(id, data).then((res) => {
      console.log(res);
    });
  };

  const handleClosePort = (e) => {
    e.preventDefault();
    closePort(id).then((res) => {
      console.log(res);
    });
  };

  const handleStopTcp = (e) => {
    e.preventDefault();
    stopTCP(id).then((res) => {
      console.log(res);
    });
  };
  const handleStartTcp = (e) => {
    e.preventDefault();
    startTCP(id).then((res) => {
      console.log(res);
    });
  };

  const handleClickNewDevice = () => {
    window.location.reload();
  };

  return (
    <div className="container mt-5 p-4">
      <form>
        <div>
          <div className="form-check form-switch">
            <input
              id="button2"
              className="form-check-input"
              type="checkbox"
              onChange={handleEnableTcp}
            />
            <label class="form-check-label" for="form11Example4">
              Turn on TCP
            </label>
          </div>
          <label className="mt-2" for="inputEmail4">
            Enter IP
          </label>
          <input
            className="form-control"
            value={data.ip}
            onChange={(e) => setData({ ...data, ip: e.target.value })}
            disabled={!isEnableTcpChecked}
          />
          <label for="inputEmail4" className="mt-2">
            Enter Connecting Port:
          </label>
          <input
            className="form-control"
            value={data.port}
            onChange={(e) => setData({ ...data, port: e.target.value })}
            disabled={!isEnableTcpChecked}
          />
          <button
            type="submit"
            onClick={handleOpenPort}
            class="btn btn-primary mt-2 "
            disabled={!isEnableTcpChecked}
          >
            Open
          </button>
          <button
            type="submit"
            onClick={handleClosePort}
            className="btn btn-primary mx-2 mt-2"
            disabled={!isEnableTcpChecked}
          >
            Close
          </button>
        </div>
        <h3 for="inputEmail4" className="mt-2">
          State
        </h3>
        <div className="d-flex mx-2 mt-2">
          <div class="form-check mx-2">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              IN
            </label>
          </div>
          <div class="form-check mx-2">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              OUT
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <button
            type="submit"
            class="btn btn-primary btn-lg"
            onClick={handleStartTcp}
            disabled={!isEnableTcpChecked}
          >
            Start
          </button>
          <button
            type="submit"
            onClick={handleStopTcp}
            className="btn btn-primary btn-lg mx-2"
            disabled={!isEnableTcpChecked}
          >
            Stop
          </button>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg mx-2"
          disabled={!isEnableTcpChecked}
          onClick={handleClickNewDevice}
        >
          Add New Device
        </button>
      </form>
    </div>
  );
}

export default AddDevice;

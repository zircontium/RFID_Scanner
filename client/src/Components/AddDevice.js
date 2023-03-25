import React, { useEffect } from "react";
import { useState } from "react";
import { addReader, closePort, openPort, stopTCP } from "../api";

function AddDevice() {
  const [data, setData] = useState({
    ip: "135.7.47.28",
    port: "6000"
  });

  const [id, setId] = useState("");

  const handleOpenPort = () => {
    openPort(id, data).then(res => {
      console.log(res);
    });
  };
 
  const handleClosePort = () => {
    closePort(id).then(res => {
      console.log(res);
    });
  };
 
  const handleStopTcp = () => {
    stopTCP(id).then(res => {
      console.log(res);
    });
  };

  useEffect(() => {
    addReader()
      .then(res => {
        setId(res);
      })
      .catch(err => console.log(err.message));
  }, []);

  return (
    <div className="container mt-5">
      <form>
        <div>
          <div className="form-check form-switch">
            <input id="button2" className="form-check-input" type="checkbox" />
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
            onChange={e => setData({ ...data, ip: e.target.value })}
          />
          <label for="inputEmail4" className="mt-2">
            Enter Connecting Port:
          </label>
          <input
            className="form-control"
            value={data.port}
            onChange={e => setData({ ...data, port: e.target.value })}
          />
          <button
            type="submit"
            onClick={handleOpenPort}
            class="btn btn-primary mt-2 "
          >
            Open
          </button>
          <button type="submit" onClick={handleClosePort} className="btn btn-primary mx-2 mt-2">
            Close
          </button>
        </div>
        <label className="mt-2" for="comment">
          Electronics Product Code (EPC) :
        </label>
        <textarea className="form-control" rows="10" id="comment" name="text" />
        <div className="d-flex justify-content-center mt-2">
          <button type="submit" class="btn btn-primary btn-lg">
            Start
          </button>
          <button
            type="submit"
            onClick={handleStopTcp}
            className="btn btn-primary btn-lg mx-2"
          >
            Stop
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddDevice;

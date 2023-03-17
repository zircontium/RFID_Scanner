import React from "react";

function AddDevice() {
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

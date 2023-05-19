import { React, useEffect, useState } from "react";
import { BsFillArchiveFill, BsFillMenuButtonWideFill } from "react-icons/bs";
import { GiShipBow } from "react-icons/gi";

function Info() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const [storedID, setStoredID] = useState(
    sessionStorage.getItem("AllID") != null
      ? JSON.parse(sessionStorage.getItem("AllID"))
      : []
  );

  useEffect(() => {
    setStoredID(
      sessionStorage.getItem("AllID") != null
        ? JSON.parse(sessionStorage.getItem("AllID"))
        : []
    );
  }, []);

  return (
    <div>
      <div className="container Dash mt-5">
        <div className="">
          <div class="mt-5 mx-5 row">
            <div class="col">
              <div
                class="card text-white bg-primary mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div class="card-header">
                  <BsFillArchiveFill />
                </div>
                <div class="card-body">
                  <h3 class="card-title">Date</h3>
                  <h3 class="card-title">
                    <h5>
                      {date.toLocaleDateString()} || {date.toLocaleTimeString()}
                    </h5>
                  </h3>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="card text-white bg-warning mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div class="card-header">
                  <BsFillMenuButtonWideFill />
                </div>
                <div class="card-body">
                  <h3 class="card-title">Device Connected</h3>
                  <h4 class="card-title">
                    {storedID.length}
                  </h4>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="card text-white bg-info mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div class="card-header">
                  <GiShipBow />
                </div>
                <div class="card-body">
                  <h3 class="card-title">Vehicle IN Count</h3>
                  <h3 class="card-title">Vehicle IN Count</h3>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="card text-white bg-danger mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div class="card-header">
                  <GiShipBow />
                </div>
                <div class="card-body">
                  <h3 class="card-title">Vehicle OUT Count</h3>
                  <h3 class="card-title">Vehicle OUT Count</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;

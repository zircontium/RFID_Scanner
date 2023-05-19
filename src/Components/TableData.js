import React from "react";

function Table() {
  return (
    <div className="mt-2 p-4">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Serial No.:</th>
            <th scope="col">Tag ID</th>
            <th scope="col">VRN</th>
            <th scope="col">Time</th>
            <th scope="col">State</th>
            <th scope="col">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;

import React from "react";
import "./Ui.css";
import Table from "./TableData";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Ui() {
  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label>Search by RFID no.:</Form.Label>
          <Form.Control type="email" placeholder="Enter RFID NO" />
        </Form.Group>
        <Button type="submit">Search</Button>
      </Form>
      <Table />
    </div>
  );
}

export default Ui;

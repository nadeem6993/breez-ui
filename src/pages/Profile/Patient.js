import React from "react";
import { Table } from "react-bootstrap";

const Patient = () => {
  return (
    <div>
      <Table hover style={{ fontSize: "small" }}>
        <thead style={{ backgroundColor: "lightgrey" }}>
          <tr>
            <th>Profile ID</th>
            <th>Name</th>
            <th>Email Address</th>
            <th colSpan="2">Mobile Phone</th>
            <th>Assigned</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>P323192</td>
            <td>Daniel Avina</td>
            <td>dan.avina@boltdental.com</td>
            <td colSpan="2">415-577-4654</td>
            <td>Mary Arredondo</td>
          </tr>
          <tr>
            <td>P323192</td>
            <td>Suranne Cooke</td>
            <td>dan.avina@boltdental.com</td>
            <td colSpan="2">415-577-4654</td>
            <td>Mary Arredondo</td>
          </tr>
          <tr>
            <td>P323193</td>
            <td>Daniel Avina</td>
            <td>dan.avina@boltdental.com</td>
            <td colSpan="2">415-577-4654</td>
            <td>Mary Arredondo</td>
          </tr>
          <tr>
            <td>P323194</td>
            <td>Daniel Avina</td>
            <td>dan.avina@boltdental.com</td>
            <td colSpan="2">415-577-4654</td>
            <td>Mary Arredondo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Patient;

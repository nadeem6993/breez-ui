import React, { useState } from "react";
import { Form, Row, Col, Table, Button } from "react-bootstrap";

const Patient = () => {
  const data = [
    {
      id: "P323192",
      firstName: "Daniel",
      lastName: "Avina",
      email: "dan.avina@boltdental.com",
      mobilePhone: "415-577-4654",
      assigned: "Mary Arredondo",
      billingHistory: [
        {
          REF: "A000001",
          status: "Resubmitted",
          balance: "$322.20",
        },
        {
          REF: "A000002",
          status: "Paid",
          balance: "$478.12",
        },
        {
          REF: "A000003",
          status: "Outstanding",
          balance: "$4,023.55",
        },
        {
          REF: "A000004",
          status: "Paid",
          balance: "$89.93",
        },
        {
          REF: "A000005",
          status: "Resubmitted",
          balance: "$322.20",
        },
      ],
    },
    {
      id: "P323193",
      firstName: "Suranne",
      lastName: "Cooke",
      email: "Suranne@gmail.com",
      mobilePhone: "415-577-4654",
      assigned: "Mary Arredondo",
      billingHistory: [
        {
          REF: "A000001",
          status: "Resubmitted",
          balance: "$322.20",
        },
        {
          REF: "A000002",
          status: "Paid",
          balance: "$478.12",
        },
        {
          REF: "A000003",
          status: "Outstanding",
          balance: "$4,023.55",
        },
        {
          REF: "A000004",
          status: "Paid",
          balance: "$89.93",
        },
        {
          REF: "A000005",
          status: "Resubmitted",
          balance: "$322.20",
        },
      ],
    },
    {
      id: "P323194",
      firstName: "Zahara",
      lastName: "Griffith",
      email: "Zahara@gmail.com",
      mobilePhone: "415-577-4654",
      assigned: "Kenya Milton",
      billingHistory: [
        {
          REF: "A000001",
          status: "Resubmitted",
          balance: "$322.20",
        },
        {
          REF: "A000002",
          status: "Paid",
          balance: "$478.12",
        },
        {
          REF: "A000003",
          status: "Outstanding",
          balance: "$4,023.55",
        },
        {
          REF: "A000004",
          status: "Paid",
          balance: "$89.93",
        },
        {
          REF: "A000005",
          status: "Resubmitted",
          balance: "$322.20",
        },
      ],
    },
    {
      id: "P323195",
      firstName: "Ammaar",
      lastName: "Talley",
      email: "Ammar@gmail.com",
      mobilePhone: "415-577-4654",
      assigned: "Mary Arredondo",
      billingHistory: [
        {
          ref: "A000001",
          status: "Resubmitted",
          balance: "$322.20",
        },
        {
          REF: "A000002",
          status: "Paid",
          balance: "$478.12",
        },
        {
          REF: "A000003",
          status: "Outstanding",
          balance: "$4,023.55",
        },
        {
          REF: "A000004",
          status: "Paid",
          balance: "$89.93",
        },
        {
          REF: "A000005",
          status: "Resubmitted",
          balance: "$322.20",
        },
      ],
    },
    {
      id: "P323196",
      firstName: "Fredrick",
      lastName: "Donaldson",
      email: "fredrickdonald@gmail.com",
      mobilePhone: "415-577-4654",
      assigned: "Kenya Milton",
      billingHistory: [
        {
          REF: "A000001",
          status: "Resubmitted",
          balance: "$322.20",
        },
        {
          REF: "A000002",
          status: "Paid",
          balance: "$478.12",
        },
        {
          REF: "A000003",
          status: "Outstanding",
          balance: "$4,023.55",
        },
        {
          REF: "A000004",
          status: "Paid",
          balance: "$89.93",
        },
        {
          REF: "A000005",
          status: "Resubmitted",
          balance: "$322.20",
        },
      ],
    },
  ];

  const [patientDetail, setPatientDetail] = useState();

  const handlePatient = (patient) => {
    setPatientDetail(patient);
  };

  return (
    <div className="patientMain">
      <div className="patientTable">
        <Table hover style={{ fontSize: "small" }}>
          <thead style={{ backgroundColor: "lightgrey" }}>
            <tr>
              <th>Profile ID</th>
              <th>Name</th>
              <th>Email Address</th>
              <th>Mobile Phone</th>
              <th>Assigned</th>
            </tr>
          </thead>
          <tbody>
            {data.map((patient) => {
              return (
                <tr onClick={() => handlePatient(patient)}>
                  <td>{patient.id}</td>
                  <td>{`${patient.firstName} ${patient.lastName}`}</td>
                  <td>{patient.email}</td>
                  <td>{patient.mobilePhone}</td>
                  <td>{patient.assigned}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div>
        <Row>
          <Col lg="8" style={{ padding: "30px" }}>
            {patientDetail && (
              <Form>
                <h5>{`Profile ID #${patientDetail.id}`}</h5>
                <Row>
                  <Col lg="6" md="6">
                    <Form.Group controlId="formFirstName">
                      <Form.Label style={{ fontSize: "small" }}>
                        First Name
                        <p style={{ color: "red", display: "inline" }}>*</p>
                      </Form.Label>
                      <Form.Control
                        name="firstName"
                        type="text"
                        value={patientDetail.firstName}
                        required
                        style={{ height: "45px", borderRadius: "10px" }}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6" md="6">
                    <Form.Group controlId="formLastName">
                      <Form.Label style={{ fontSize: "small" }}>
                        Last Name
                        <p style={{ color: "red", display: "inline" }}>*</p>
                      </Form.Label>
                      <Form.Control
                        required
                        value={patientDetail.lastName}
                        name="lastName"
                        type="text"
                        style={{ height: "45px", borderRadius: "10px" }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6" md="6">
                    <Form.Group controlId="formEmail">
                      <Form.Label style={{ fontSize: "small" }}>
                        Email Address
                      </Form.Label>
                      <Form.Control
                        value={patientDetail.email}
                        name="email"
                        type="email"
                        style={{ height: "45px", borderRadius: "10px" }}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6" md="6">
                    <Form.Group controlId="formMobilePhone">
                      <Form.Label style={{ fontSize: "small" }}>
                        Mobile Phone
                        <p style={{ color: "red", display: "inline" }}>*</p>
                      </Form.Label>
                      <Form.Control
                        required
                        value={patientDetail.mobilePhone}
                        name="mobilePhone"
                        type="text"
                        style={{ height: "45px", borderRadius: "10px" }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6" md="6">
                    <Form.Group controlId="formProfileType">
                      <Form.Label style={{ fontSize: "small" }}>
                        Profile Type
                      </Form.Label>
                      <Form.Control
                        disabled
                        value="Patient"
                        name="profileType"
                        type="text"
                        style={{ height: "45px", borderRadius: "10px" }}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6" md="6">
                    <Form.Group controlId="formAssigned">
                      <Form.Label style={{ fontSize: "small" }}>
                        Assigned
                      </Form.Label>
                      <Form.Control
                        disabled
                        value={patientDetail.assigned}
                        name="assigned"
                        type="text"
                        style={{ height: "45px", borderRadius: "10px" }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row style={{ padding: "20px" }}>
                  <Col>
                    <Button
                      size="lg"
                      className="mt-4 px-5"
                      variant="danger"
                      style={{
                        fontSize: "small",
                        fontWeight: "500",
                        color: "white",
                      }}
                    >
                      Delete
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      size="lg"
                      className="mt-4 px-5"
                      variant="outline-danger"
                      type="submit"
                      style={{
                        fontSize: "small",
                        fontWeight: "500",
                      }}
                    >
                      Merge Record
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Col>
          <Col lg="4">
            {patientDetail && (
              <div>
                <h4 style={{ padding: "30px 0px 0px 0px" }}>Billing history</h4>
                <Table
                  hover
                  borderless
                  style={{
                    fontSize: "small",
                    padding: "0px",
                    height: "250px",
                    overflowY: "auto",
                  }}
                >
                  <thead>
                    <tr>
                      <td>REF#</td>
                      <td>status</td>
                      <td>Balance</td>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      border: "1px solid white",
                      borderRadius: "10px",
                      backgroundColor: "white",
                    }}
                  >
                    {data.map((patient) => {
                      return (
                        <tr key={patient.id}>
                          <td>{patient.billingHistory["ref"]}</td>
                          <td>{patient.status}</td>
                          <td>{patient.balance}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
                <Row style={{ padding: "20px 0px" }}>
                  <Col>
                    <Button
                      size="lg"
                      className="mt-4 px-5"
                      variant="outline-primary"
                      style={{
                        fontSize: "small",
                        fontWeight: "500",
                      }}
                    >
                      Edit
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      size="lg"
                      className="mt-4 px-5"
                      variant="primary"
                      type="submit"
                      style={{
                        fontSize: "small",
                        fontWeight: "500",
                      }}
                    >
                      Save
                    </Button>
                  </Col>
                </Row>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Patient;

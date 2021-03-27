import React, { useState } from "react";
import { Form, Row, Col, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

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
        <Table hover style={{ fontSize: "small", color: "#445978" }}>
          <thead style={{ backgroundColor: "lightgrey" }}>
            <tr>
              <td>Profile ID</td>
              <td>Name</td>
              <td>Email Address</td>
              <td>Mobile Phone</td>
              <td>Assigned</td>
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
        <Row style={{ paddingTop: "50px" }}>
          <Col lg="8">
            {patientDetail && (
              <Form>
                <h5
                  style={{ color: "#445978" }}
                >{`Profile ID #${patientDetail.id}`}</h5>
                <Row>
                  <Col lg="6" md="6" style={{ marginRight: "-10px" }}>
                    <Form.Group controlId="formFirstName">
                      <Form.Label
                        style={{
                          fontSize: "small",
                          fontWeight: "500",
                          color: "#445978",
                        }}
                      >
                        First Name
                        <p style={{ color: "red", display: "inline" }}>*</p>
                      </Form.Label>
                      <Form.Control
                        name="firstName"
                        type="text"
                        value={patientDetail.firstName}
                        required
                        style={{
                          height: "45px",
                          borderRadius: "10px",
                          fontSize: "small",
                          color: "#445978",
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6" md="6" style={{ marginLeft: "-10px" }}>
                    <Form.Group controlId="formLastName">
                      <Form.Label
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#445978",
                        }}
                      >
                        Last Name
                        <p style={{ color: "red", display: "inline" }}>*</p>
                      </Form.Label>
                      <Form.Control
                        required
                        value={patientDetail.lastName}
                        name="lastName"
                        type="text"
                        style={{
                          height: "45px",
                          borderRadius: "10px",
                          fontSize: "small",
                          color: "#445978",
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6" md="6" style={{ marginRight: "-10px" }}>
                    <Form.Group controlId="formEmail">
                      <Form.Label
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#445978",
                        }}
                      >
                        Email Address
                      </Form.Label>
                      <Form.Control
                        value={patientDetail.email}
                        name="email"
                        type="email"
                        style={{
                          height: "45px",
                          borderRadius: "10px",
                          fontSize: "small",
                          color: "#445978",
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6" md="6" style={{ marginLeft: "-10px" }}>
                    <Form.Group controlId="formMobilePhone">
                      <Form.Label
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#445978",
                        }}
                      >
                        Mobile Phone
                        <p style={{ color: "red", display: "inline" }}>*</p>
                      </Form.Label>
                      <Form.Control
                        required
                        value={patientDetail.mobilePhone}
                        name="mobilePhone"
                        type="text"
                        style={{
                          height: "45px",
                          borderRadius: "10px",
                          fontSize: "small",
                          color: "#445978",
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6" md="6" style={{ marginRight: "-10px" }}>
                    <Form.Group controlId="formProfileType">
                      <Form.Label
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#445978",
                        }}
                      >
                        Profile Type
                      </Form.Label>
                      <Form.Control
                        disabled
                        value="Patient"
                        name="profileType"
                        type="text"
                        style={{
                          height: "45px",
                          borderRadius: "10px",
                          fontSize: "small",
                          color: "#445978",
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6" md="6" style={{ marginLeft: "-10px" }}>
                    <Form.Group controlId="formAssigned">
                      <Form.Label
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#445978",
                        }}
                      >
                        Assigned
                      </Form.Label>
                      <Form.Control
                        disabled
                        value={patientDetail.assigned}
                        name="assigned"
                        type="text"
                        style={{
                          height: "45px",
                          borderRadius: "10px",
                          fontSize: "small",
                          color: "#445978",
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row style={{ padding: "0px" }}>
                  <Col lg="3">
                    <Button
                      size="lg"
                      className="mt-4"
                      variant="none"
                      style={{
                        fontSize: "small",
                        fontWeight: "500",
                        color: "white",
                        height: "45px",
                        width: "100%",
                        backgroundColor: "#ed1e32",
                        borderRadius: "10px",
                      }}
                    >
                      Delete
                    </Button>
                  </Col>
                  <Col lg="3">
                    <Button
                      size="lg"
                      className="my-4"
                      variant="outline-danger"
                      type="submit"
                      style={{
                        fontSize: "small",
                        fontWeight: "500",
                        width: "100%",
                        height: "45px",
                        border: "2px solid #ed1e32",
                        borderRadius: "10px",
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
                <h4
                  style={{
                    color: "#445978",
                  }}
                >
                  Billing history
                </h4>
                <Table
                  hover
                  borderless
                  style={{
                    fontSize: "small",
                    color: "#445978",
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
                    <tr>
                      <td>A000001</td>
                      <td>Resubmitted</td>
                      <td>$322.20</td>
                    </tr>
                    <tr>
                      <td>A000002</td>
                      <td>Paid</td>
                      <td>$478.12</td>
                    </tr>
                    <tr>
                      <td>A000003</td>
                      <td>Outstanding</td>
                      <td>$4,023.55</td>
                    </tr>
                    <tr>
                      <td>A000004</td>
                      <td>Paid</td>
                      <td>$89.20</td>
                    </tr>
                    <tr>
                      <td>A000005</td>
                      <td>Resubmitted</td>
                      <td>$321.20</td>
                    </tr>
                  </tbody>
                </Table>
                <Row style={{ padding: "20px 0px" }}>
                  <Col>
                    <Button
                      size="lg"
                      className="mt-4 px-5"
                      style={{
                        border: "2px solid #3b9ad7",
                        backgroundColor: "white",
                        color: "#3b9ad7",
                        height: "43px",
                        width: "100%",
                        fontSize: "small",
                        fontWeight: "500",
                        borderRadius: "10px",
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
                        backgroundColor: "#3b9ad7",
                        borderRadius: "10px",
                        height: "43px",
                        width: "100%",
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

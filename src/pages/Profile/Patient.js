import React, { useState } from "react";
import { Form, Row, Col, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Patient = () => {
  const data = [
    {
      id: "P323192",
      firstName: "Daniel",
      lastName: "Avina",
      email: "dan.avina@boltdental.com",
      mobilePhone: "415-577-4654",
      assigned: "Mary Arredondo",
    },
    {
      id: "P323193",
      firstName: "Suranne",
      lastName: "Cooke",
      email: "Suranne@gmail.com",
      mobilePhone: "415-577-4654",
      assigned: "Mary Arredondo",
    },
    {
      id: "P323194",
      firstName: "Zahara",
      lastName: "Griffith",
      email: "Zahara@gmail.com",
      mobilePhone: "415-577-4654",
      assigned: "Kenya Milton",
    },
    {
      id: "P323195",
      firstName: "Ammaar",
      lastName: "Talley",
      email: "Ammar@gmail.com",
      mobilePhone: "415-577-4654",
      assigned: "Mary Arredondo",
    },
    {
      id: "P323196",
      firstName: "Fredrick",
      lastName: "Donaldson",
      email: "fredrickdonald@gmail.com",
      mobilePhone: "415-577-4654",
      assigned: "Kenya Milton",
    },
    {
      id: "P323195",
      firstName: "Ammaar",
      lastName: "Talley",
      email: "Ammar@gmail.com",
      mobilePhone: "415-577-4654",
      assigned: "Mary Arredondo",
    },
  ];

  const [patientDetail, setPatientDetail] = useState();

  const handlePatient = (patient) => {
    setPatientDetail(patient);
  };

  return (
    <div className="patientMain">
      <div className="patientTable">
        <Table hover responsive style={{ fontSize: "12px", color: "#445978" }}>
          <thead style={{ backgroundColor: "lightgrey" }}>
            <tr>
              <td>Profile ID</td>
              <td>Name</td>
              <td>Email Address</td>
              <td style={{ paddingRight: "200px" }}>Mobile Phone</td>
              <td style={{ paddingRight: "50px" }}>Assigned</td>
            </tr>
          </thead>
          <tbody>
            {data.map((patient) => {
              return (
                <tr onClick={() => handlePatient(patient)}>
                  <td>{patient.id}</td>
                  <td>{`${patient.firstName} ${patient.lastName}`}</td>
                  <td>{patient.email}</td>
                  <td style={{ paddingRight: "200px" }}>
                    {patient.mobilePhone}
                  </td>
                  <td style={{ paddingRight: "50px" }}>{patient.assigned}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div>
        <Row style={{ paddingTop: "50px" }}>
          <Col lg="8" style={{ paddingRight: "60px" }}>
            {patientDetail && (
              <Form>
                <h5
                  style={{ color: "#445978", paddingBottom: "20px" }}
                >{`Profile ID #${patientDetail.id}`}</h5>
                <Row>
                  <Col lg="6" md="6" style={{ padding: "0px 10px" }}>
                    <Form.Group controlId="formFirstName">
                      <Form.Label
                        style={{
                          fontSize: "small",
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
                  <Col lg="6" md="6" style={{ padding: "0px 10px" }}>
                    <Form.Group controlId="formLastName">
                      <Form.Label
                        style={{
                          fontSize: "12px",
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
                  <Col lg="6" md="6" style={{ padding: "0px 10px" }}>
                    <Form.Group controlId="formEmail">
                      <Form.Label
                        style={{
                          fontSize: "12px",
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
                  <Col lg="6" md="6" style={{ padding: "0px 10px" }}>
                    <Form.Group controlId="formMobilePhone">
                      <Form.Label
                        style={{
                          fontSize: "12px",
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
                  <Col lg="6" md="6" style={{ padding: "0px 10px" }}>
                    <Form.Group
                      controlId="formProfileType"
                      style={{ position: "relative" }}
                    >
                      <Form.Label
                        style={{
                          fontSize: "12px",
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
                      <FontAwesomeIcon
                        icon={faLock}
                        size="2x"
                        style={{
                          color: "#445978",
                          position: "absolute",
                          left: "280px",
                          bottom: "9px",
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6" md="6" style={{ padding: "0px 10px" }}>
                    <Form.Group
                      controlId="formAssigned"
                      style={{ position: "relative" }}
                    >
                      <Form.Label
                        style={{
                          fontSize: "12px",
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
                      <FontAwesomeIcon
                        icon={faLock}
                        size="2x"
                        style={{
                          color: "#445978",
                          position: "absolute",
                          left: "280px",
                          bottom: "9px",
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
          <Col lg="4" style={{ paddingLeft: "30px" }}>
            {patientDetail && (
              <div>
                <h5
                  style={{
                    color: "#445978",
                    paddingBottom: "10px",
                  }}
                >
                  Billing history
                </h5>
                <Table
                  hover
                  borderless
                  style={{
                    fontSize: "small",
                    color: "#445978",
                  }}
                >
                  <thead>
                    <tr style={{ display: "flex" }}>
                      <td>REF#</td>
                      <td style={{ paddingLeft: "40px" }}>status</td>
                      <td style={{ paddingLeft: "53px" }}>Balance</td>
                    </tr>
                  </thead>
                  <div
                    className="patientTable"
                    style={{
                      border: "1px solid lightgrey",
                      borderRadius: "10px",
                      backgroundColor: "white",
                      height: "225px",
                      overflowY: "scroll",
                    }}
                  >
                    <tbody>
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
                      <tr>
                        <td>A000005</td>
                        <td>Resubmitted</td>
                        <td>$321.20</td>
                      </tr>
                    </tbody>
                  </div>
                </Table>
                <Row style={{ padding: "0px 0px" }}>
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

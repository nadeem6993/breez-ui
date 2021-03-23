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
  ];

  const [patientDetail, setPatientDetail] = useState();

  const handlePatient = (patient) => {
    setPatientDetail(patient);
  };
  console.log(patientDetail);

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
            <div>
              <h4 style={{ padding: "30px" }}>Billing history</h4>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Patient;

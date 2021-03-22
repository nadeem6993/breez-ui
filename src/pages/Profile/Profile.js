import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Patient from "./Patient";

const NoSelection = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "100px 0px",
      }}
    >
      <FontAwesomeIcon
        icon={faSearch}
        size="8x"
        style={{ color: "grey", opacity: "0.3" }}
      />
      <p style={{ textAlign: "center", margin: "20px" }}>
        Got to start somewhere! <br /> Select profile type and search above.
      </p>
    </div>
  );
};

const Profile = () => {
  const [profile, setProfile] = useState("none");

  const handleChange = (e) => {
    setProfile(e.target.value);
  };

  return (
    <div>
      <Container fluid style={{ padding: "0px" }}>
        <Row className="profileHeader">
          <Col lg="12" style={{ margin: 0, padding: 0 }}>
            <div
              style={{
                backgroundColor: "white",
                height: "80px",
                padding: "0px",
              }}
            ></div>
            <h3 className="text-white pt-5">Profile</h3>
          </Col>
        </Row>
        <Row>
          <Col
            lg="12"
            style={{
              backgroundColor: "rgb(238, 244, 245)",
              minHeight: "100vh",
              paddingTop: "30px",
            }}
          >
            <Row>
              <Col lg="12" style={{ padding: "0px 100px 0px 100px" }}>
                <Row>
                  <Col lg="7">
                    <Form className="d-flex">
                      <Col lg="4" style={{ padding: "0px" }}>
                        <Form.Group controlId="formProfileType">
                          <Form.Control
                            required
                            name="profileType"
                            placeholder="Select Profile Type"
                            as="select"
                            onChange={handleChange}
                            style={{
                              height: "45px",
                              borderRadius: "10px",
                            }}
                          >
                            <option value="none">Select Profile Type</option>
                            <option value="patient">Patient</option>
                            <option value="provider">Provider</option>
                            <option value="practice">Practice</option>
                            <option value="user">User</option>
                            <option value="insuranceCompany">
                              Insurance Company
                            </option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col lg="7">
                        <Form.Group controlId="formProfileType">
                          <Form.Control
                            name="searchBar"
                            placeholder="Search.."
                            type="text"
                            style={{ height: "45px", borderRadius: "10px" }}
                          />
                        </Form.Group>
                      </Col>
                    </Form>
                  </Col>
                  <Col lg="5">
                    <Button
                      block
                      size="lg"
                      variant="primary"
                      type="submit"
                      style={{
                        fontSize: "small",
                        fontWeight: "500",
                        color: "white",
                        height: "45px",
                        borderRadius: "10px",
                      }}
                    >
                      Add Profile
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col lg="12" style={{ padding: "0px 100px 0px 100px" }}>
                <div
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "10px",
                  }}
                >
                  {profile === "patient" ? <Patient /> : <NoSelection />}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;

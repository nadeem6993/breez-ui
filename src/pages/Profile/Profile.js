import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Patient from "./Patient";
import Provider from "./Provider";
import Practice from "./Practice";
import User from "./User";
import InsuranceCompany from "./InsuranceCompany";

const NoSelection = () => {
  return (
    <>
      <div
        style={{
          height: "50px",
          backgroundColor: "lightgrey",
          borderRadius: "0px 10px 0px 0px",
        }}
      ></div>
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
    </>
  );
};

const Profile = () => {
  const [profile, setProfile] = useState("none");

  const handleChange = (e) => {
    setProfile(e.target.value);
  };

  const handleProfile = () => {
    switch (profile) {
      case "none":
        return <NoSelection />;
      case "patient":
        return <Patient />;
      case "provider":
        return <Provider />;
      case "practice":
        return <Practice />;
      case "user":
        return <User />;
      case "insuranceCompany":
        return <InsuranceCompany />;
      default:
        return <NoSelection />;
    }
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
            <h2 className="text-white pt-5 ml-5 mt-5">Profile</h2>
          </Col>
        </Row>
        <Row className="profileMain">
          <Col lg="12">
            <Row>
              <Col lg="12">
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
                              fontSize: "small",
                              border: "none",
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
                      <Col lg="8">
                        <Form.Group controlId="formProfileType">
                          <Form.Control
                            name="searchBar"
                            placeholder="Search.."
                            type="text"
                            style={{
                              height: "45px",
                              border: "none",
                              borderRadius: "10px",
                              fontSize: "small",
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Form>
                  </Col>
                  <Col
                    lg="5"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Button
                      size="lg"
                      variant="none"
                      type="submit"
                      className="addBtn"
                      style={{
                        backgroundColor: "#3b9ad7",
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
            <Row style={{ marginTop: "20px" }}>
              <Col lg="12">
                <div
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "10px",
                  }}
                >
                  {handleProfile()}
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

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Jumbotron,
} from "react-bootstrap";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faUser,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/Profile.png";
import Patient from "./Patient";

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
              minHeight: "120vh",
              paddingTop: "30px",
            }}
          >
            <Row>
              <Col lg="12" style={{ padding: "0px 100px 0px 100px" }}>
                <Row>
                  <Col lg="7">
                    <Form className="d-flex">
                      <Col lg="4">
                        <Form.Group controlId="formProfileType">
                          <Form.Control
                            required
                            name="profileType"
                            placeholder="Select Profile Type"
                            as="select"
                            onChange={handleChange}
                            style={{ height: "45px", borderRadius: "10px" }}
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
                <Jumbotron>{profile === "patient" && <Patient />}</Jumbotron>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;

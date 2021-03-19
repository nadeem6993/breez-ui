import React from "react";
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

const Profile = () => {
  return (
    <div>
      <Container fluid>
        <Row className="profileHeader">
          <Col lg="1">
            <h1 className="text-white my-4 pt-3">Breez</h1>
            <Image className="mt-4" src={avatar} roundedCircle height="70px" />
          </Col>
          <Col lg="11" style={{ margin: 0, padding: 0 }}>
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
          <Col lg="1" className="sidrbarIcons">
            <div className="p-3">
              <FontAwesomeIcon
                icon={faMicrosoft}
                size="4x"
                style={{ color: "grey" }}
              />
            </div>
            <div className="p-3">
              <FontAwesomeIcon
                icon={faDatabase}
                size="4x"
                style={{ color: "grey" }}
              />
            </div>
            <div className="p-3">
              <FontAwesomeIcon
                icon={faUser}
                size="4x"
                style={{ color: "grey" }}
              />
            </div>
            <div className="p-3">
              <FontAwesomeIcon
                icon={faChartPie}
                size="4x"
                style={{ color: "grey" }}
              />
            </div>
          </Col>
          <Col
            lg="11"
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
                            style={{ height: "45px", borderRadius: "10px" }}
                          >
                            <option value="0">Select Profile Type</option>
                            <option value="1">Patient</option>
                            <option value="2">Provider</option>
                            <option value="3">Practice</option>
                            <option value="4">User</option>
                            <option value="5">Insurance Company</option>
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
                <Jumbotron></Jumbotron>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
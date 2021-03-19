import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import "./Login.css";
import image from "../../assets/image1.jpg";

const Login = () => {
  return (
    <div>
      <Container fluid>
        <Row className="mainContainer">
          <Col lg="5" className="loginSection">
            <div className="formSection">
              <h3 className="text-center pb-5">Breez Log In</h3>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label style={{ fontSize: "small" }}>
                    Email Address
                    <p style={{ color: "red", display: "inline" }}>*</p>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    style={{ height: "45px", borderRadius: "10px" }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label
                    className="labelText"
                    style={{ fontSize: "small" }}
                  >
                    <p>
                      Password
                      <p style={{ color: "red", display: "inline" }}>*</p>
                    </p>{" "}
                    <a href="/reset">Forgot Password?</a>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    style={{ height: "45px", borderRadius: "10px" }}
                  />
                </Form.Group>
                <Button
                  block
                  size="lg"
                  className="mt-4 "
                  variant="info"
                  style={{ fontSize: "medium" }}
                  type="submit"
                >
                  Log In
                </Button>
              </Form>
              <div className="pt-4 d-flex">
                <hr style={{ width: "45%" }} />
                <p className="px-3">OR</p>
                <hr style={{ width: "45%" }} />
              </div>
              <Button
                block
                size="lg"
                className="mt-4"
                variant="primary"
                style={{ fontSize: "medium" }}
                type="submit"
              >
                <FontAwesomeIcon icon={faMicrosoft} size="lg" /> Log In with
                Outlook.com
              </Button>
              <Button
                block
                size="lg"
                className="mt-4"
                variant="light"
                style={{ fontSize: "medium" }}
                type="submit"
              >
                <FontAwesomeIcon icon={faGoogle} size="lg" /> Log In with Google
              </Button>
            </div>
          </Col>
          <Col lg="7" className="imageSection">
            <Container></Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

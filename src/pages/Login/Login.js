import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import "./Login.css";
import image from "../../assets/image1.jpg";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();

  const loginSubmit = () => {
    history.push("/dashboard");
  };
  return (
    <div>
      <Container fluid>
        <Row className="mainContainer">
          <Col lg="5" className="loginSection">
            <div className="formSection">
              <h3
                style={{
                  textAlign: "center",
                  color: "#445978",
                  paddingBottom: "50px",
                }}
              >
                Breez Log In
              </h3>
              <Form onSubmit={handleSubmit(loginSubmit)}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label
                    style={{
                      fontSize: "small",
                      fontWeight: "500",
                      color: "#445978",
                    }}
                  >
                    Email Address
                    <p style={{ color: "red", display: "inline" }}>*</p>
                  </Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    required
                    ref={register}
                    style={{ height: "45px", borderRadius: "10px" }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label
                    className="labelText"
                    style={{
                      fontSize: "small",
                      fontWeight: "500",
                      color: "#445978",
                    }}
                  >
                    <p>
                      Password
                      <p style={{ color: "red", display: "inline" }}>*</p>
                    </p>{" "}
                    <a href="/reset">Forgot Password?</a>
                  </Form.Label>
                  <Form.Control
                    name="password"
                    ref={register}
                    required
                    type="password"
                    style={{ height: "45px", borderRadius: "10px" }}
                  />
                </Form.Group>
                <Button
                  block
                  size="lg"
                  className="mt-4 "
                  style={{
                    fontSize: "small",
                    padding: "10px",
                    backgroundColor: "#3b9ad7",
                  }}
                  type="submit"
                >
                  Log In
                </Button>
              </Form>
              <div className="pt-4 d-flex">
                <hr style={{ width: "45%" }} />
                <p
                  style={{
                    color: "#445978",
                    fontSize: "small",
                    padding: "5px",
                    fontWeight: "500",
                  }}
                >
                  OR
                </p>
                <hr style={{ width: "45%" }} />
              </div>
              <Button
                block
                size="lg"
                className="mt-4"
                variant="primary"
                style={{ fontSize: "small", padding: "10px" }}
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
                style={{ fontSize: "small", padding: "10px", color: "#445978" }}
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

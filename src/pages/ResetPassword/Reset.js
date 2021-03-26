import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Reset.css";
import { useForm } from "react-hook-form";

const ResetComp = ({ email }) => {
  return (
    <div style={{ padding: "0px 0px" }}>
      <p
        className="text-center"
        style={{ fontSize: "small", color: "#445978" }}
      >
        We've sent an email to {email}
        <br /> Follow the instructions in the email to reset your password.
      </p>
      <a
        className="d-flex justify-content-center"
        variant="light"
        color="success"
        href="/login"
        style={{ fontSize: "small", color: "#3b9ad7" }}
      >
        Return to log in
      </a>
    </div>
  );
};

const ResetForm = ({ setEmail }) => {
  const { register, handleSubmit } = useForm();

  const submitHandle = (data) => {
    setEmail(data.email);
  };
  return (
    <Form onSubmit={handleSubmit(submitHandle)} style={{ padding: "0px 20px" }}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label
          className="labelText2"
          style={{ fontSize: "small", fontWeight: "500", color: "#445978" }}
        >
          Email Address
          <p style={{ color: "red", display: "inline" }}>*</p>
        </Form.Label>
        <Form.Control
          ref={register}
          type="email"
          name="email"
          style={{ height: "43px", borderRadius: "10px" }}
        />
      </Form.Group>
      <div className="resetButtons">
        <Button
          href="/login"
          size="lg"
          className="mt-4 px-5"
          variant="outline"
          type="cancel"
          style={{
            fontSize: "medium",
            width: "47%",
            color: "#3b9ad7",
            backgroundColor: "white",
            border: "2px solid #3b9ad7",
            borderRadius: "10px",
          }}
        >
          Cancel
        </Button>
        <Button
          size="lg"
          className="mt-4 px-5"
          variant="primary"
          style={{ fontSize: "medium", width: "47%", borderRadius: "10px" }}
          type="submit"
        >
          Reset
        </Button>
      </div>
    </Form>
  );
};

const Reset = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <Container fluid>
        <Row className="mainContainer2">
          <Col lg="5" className="loginSection2">
            <div className="formSection2">
              <h3
                style={{
                  textAlign: "center",
                  color: "#445978",
                  paddingBottom: "30px",
                }}
              >
                Reset Password
              </h3>
              {email ? (
                <ResetComp email={email} />
              ) : (
                <ResetForm setEmail={setEmail} />
              )}
            </div>
          </Col>
          <Col lg="7" className="imageSection2">
            <Container></Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Reset;

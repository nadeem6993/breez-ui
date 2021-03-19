import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Reset.css";
import { useForm } from "react-hook-form";

const ResetComp = ({ email }) => {
  return (
    <div>
      <p className="text-center" style={{ fontSize: "small" }}>
        We've sent an email to {email}
      </p>
      <p className="text-center" style={{ fontSize: "small" }}>
        Follow the instructions in the email to reset your password.
      </p>
      <a
        className="d-flex justify-content-center"
        variant="light"
        color="success"
        href="/login"
        style={{ fontSize: "small" }}
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
    <Form onSubmit={handleSubmit(submitHandle)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="labelText2" style={{ fontSize: "small" }}>
          Email Address
          <p style={{ color: "red", display: "inline" }}>*</p>
        </Form.Label>
        <Form.Control
          ref={register}
          type="email"
          name="email"
          style={{ height: "45px", borderRadius: "10px" }}
        />
      </Form.Group>
      <div className="resetButtons">
        <Button
          href="/login"
          size="lg"
          className="mt-4 px-5"
          variant="outline-primary"
          type="cancel"
          style={{ fontSize: "medium", width: "45%" }}
        >
          Cancel
        </Button>
        <Button
          size="lg"
          className="mt-4 px-5"
          variant="primary"
          style={{ fontSize: "medium", width: "45%" }}
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
    <div>
      <Container fluid>
        <Row className="mainContainer2">
          <Col lg="5" className="loginSection2">
            <div className="formSection2">
              <h3 className="text-center pb-5">Reset Password</h3>
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
    </div>
  );
};

export default Reset;

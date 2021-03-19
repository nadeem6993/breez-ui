import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Reset.css";

const ResetConf = () => {
  return (
    <div>
      <Container fluid>
        <Row className="mainContainer2">
          <Col lg="5" className="loginSection2">
            <div className="formSection2">
              <h3 className="text-center pb-5">Reset Password</h3>
              <p className="text-center">
                We've sent an email to email@address.com
              </p>
              <p>
                Follow the instructions in the email to reset your password.
              </p>
            </div>
            <Button variant="light" href="/login">
              Return to log in
            </Button>
          </Col>
          <Col lg="7" className="imageSection2">
            <Container></Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResetConf;

import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const PatientInfoForm = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div style={{ paddingBottom: "30px" }}>
      <Form>
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
                name="mobilePhone"
                type="name"
                style={{ height: "45px", borderRadius: "10px" }}
              />
            </Form.Group>
          </Col>
        </Row>

        <h5>Provider Information</h5>
        <Row>
          <Col lg="6" md="6">
            <Form.Group controlId="formPracticeName">
              <Form.Label style={{ fontSize: "small" }}>
                Practice Name
                <p style={{ color: "red", display: "inline" }}>*</p>
              </Form.Label>
              <Form.Control
                required
                name="practiceName"
                as="select"
                type="text"
                placeholder="Start typing the practice name..."
                defaultValue=""
                style={{ height: "45px", borderRadius: "10px" }}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col lg="6" md="6">
            <Form.Group controlId="formProviders">
              <Form.Label style={{ fontSize: "small" }}>
                Provider(s)
                <p style={{ color: "red", display: "inline" }}>*</p>
              </Form.Label>
              <Form.Control
                required
                name="providers"
                type="text"
                as="select"
                style={{ height: "45px", borderRadius: "10px" }}
              />
            </Form.Group>
          </Col>
        </Row>
        <h5>Insurance + Fees</h5>
        <Row>
          <Col lg="4" md="4">
            <Form.Group controlId="formDateOfService">
              <Form.Label style={{ fontSize: "small" }}>
                Date of Service
                <p style={{ color: "red", display: "inline" }}>*</p>
              </Form.Label>
              <Form.Control
                required
                name="dateOfService"
                type="Date"
                placeholder="Start typing the practice name..."
                defaultValue=""
                style={{ height: "45px", borderRadius: "10px" }}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col lg="8" md="8">
            <Form.Group controlId="formInsuranceCompany">
              <Form.Label style={{ fontSize: "small" }}>
                Insurance Company
                <p style={{ color: "red", display: "inline" }}>*</p>
              </Form.Label>
              <Form.Control
                required
                name="insuranceCompany"
                type="text"
                as="select"
                placeholder="Start typing the insurance..."
                style={{ height: "45px", borderRadius: "10px" }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg="3" md="3">
            <Form.Group controlId="formDOSServiceFees">
              <Form.Label style={{ fontSize: "small" }}>
                DOS Service Fees
                <p style={{ color: "red", display: "inline" }}>*</p>
              </Form.Label>
              <Form.Control
                required
                name="DOSServiceFee"
                defaultValue="$"
                style={{ height: "45px", borderRadius: "10px" }}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col lg="3" md="3">
            <Form.Group controlId="formPriorBalance">
              <Form.Label style={{ fontSize: "small" }}>
                Prior Balance
                <p style={{ color: "red", display: "inline" }}>*</p>
              </Form.Label>
              <Form.Control
                required
                name="priorBalance"
                type="text"
                defaultValue="$"
                style={{ height: "45px", borderRadius: "10px" }}
              />
            </Form.Group>
          </Col>
          <Col lg="3" md="3"></Col>
          <Col lg="3" md="3">
            <Form.Group controlId="form31-60DayAR">
              <Form.Label style={{ fontSize: "small" }}>
                31-60 Day A/R
              </Form.Label>
              <Form.Control
                name="31-60DayAR"
                type="text"
                defaultValue="$"
                style={{ height: "45px", borderRadius: "10px" }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg="3" md="3">
            <Form.Group controlId="formCoPayAmt">
              <Form.Label style={{ fontSize: "small" }}>Co-Pay Amt</Form.Label>
              <Form.Control
                name="coPayAmt"
                defaultValue="$"
                style={{ height: "45px", borderRadius: "10px" }}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col lg="3" md="3">
            <Form.Group controlId="formCollected">
              <Form.Label style={{ fontSize: "small" }}>Collected</Form.Label>
              <Form.Control
                name="collected"
                type="text"
                defaultValue="$"
                style={{ height: "45px", borderRadius: "10px" }}
              />
            </Form.Group>
          </Col>
          <Col lg="3" md="3"></Col>
          <Col lg="3" md="3">
            <Form.Group controlId="form60-90DayAR">
              <Form.Label style={{ fontSize: "small" }}>
                60-90 Day A/R
              </Form.Label>
              <Form.Control
                name="60-90DayAR"
                type="text"
                defaultValue="$"
                style={{ height: "45px", borderRadius: "10px" }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg="3" md="3">
            <Form.Group controlId="formCurrentAR">
              <Form.Label style={{ fontSize: "small" }}>
                Current A/R
                <p style={{ color: "red", display: "inline" }}>*</p>
              </Form.Label>
              <Form.Control
                required
                name="currentAR"
                defaultValue="$"
                style={{ height: "45px", borderRadius: "10px" }}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col lg="3" md="3">
            <Form.Group controlId="formPatientBalance">
              <Form.Label style={{ fontSize: "small" }}>
                Patient Balance
                <p style={{ color: "red", display: "inline" }}>*</p>
              </Form.Label>
              <Form.Control
                required
                name="patientBalance"
                type="text"
                defaultValue="$"
                style={{ height: "45px", borderRadius: "10px" }}
              />
            </Form.Group>
          </Col>
          <Col lg="3" md="3"></Col>
          <Col lg="3" md="3">
            <Form.Group controlId="form90PlusDayAR">
              <Form.Label style={{ fontSize: "small" }}>90+ Day A/R</Form.Label>
              <Form.Control
                name="90PlusDayAR"
                type="text"
                defaultValue="$"
                style={{ height: "45px", borderRadius: "10px" }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              size="lg"
              className="mt-4 px-5"
              variant="none"
              type="cancel"
              style={{
                fontSize: "small",
                fontWeight: "500",
                color: "white",
                backgroundColor: "orangered",
              }}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default PatientInfoForm;

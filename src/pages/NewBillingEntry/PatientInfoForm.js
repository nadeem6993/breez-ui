import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const PatientInfoForm = ({ register, errors }) => {
  return (
    <div style={{ paddingBottom: "30px" }}>
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
              ref={register}
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
              ref={register}
              style={{ height: "45px", borderRadius: "10px" }}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg="6" md="6">
          <Form.Group controlId="formEmail">
            <Form.Label style={{ fontSize: "small" }}>Email Address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              ref={register}
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
              ref={register}
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
              ref={register}
              placeholder="Start typing the practice name..."
              defaultValue=""
              style={{ height: "45px", borderRadius: "10px" }}
            >
              <option value="none">Practice name....</option>
              <option value="">Pro Smile Dental Care</option>
              <option value="">Mona Lisa Smile Dental</option>
              <option value="">Family Smile Center</option>
            </Form.Control>
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
              ref={register}
              as="select"
              style={{ height: "45px", borderRadius: "10px" }}
            >
              <option value="none">Select your provider(s)</option>
              <option value="">Dr. Daria Rahman</option>
              <option value="">Dr. Leroy McNamara</option>
              <option value="">Dr. Margie Fisher</option>
            </Form.Control>
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
              ref={register}
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
              ref={register}
              as="select"
              placeholder="Start typing the insurance..."
              style={{ height: "45px", borderRadius: "10px" }}
            >
              <option value="none">Insurance....</option>
              <option value="">Blue Shield of California</option>
              <option value="">Delta Dental of California</option>
              <option value="">Royal Provider of California</option>
            </Form.Control>
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
              ref={register}
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
              ref={register}
              defaultValue="$"
              style={{ height: "45px", borderRadius: "10px" }}
            />
          </Form.Group>
        </Col>
        <Col lg="3" md="3"></Col>
        <Col lg="3" md="3">
          <Form.Group controlId="form31-60DayAR">
            <Form.Label style={{ fontSize: "small" }}>31-60 Day A/R</Form.Label>
            <Form.Control
              name="31-60DayAR"
              type="text"
              ref={register}
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
              type="text"
              ref={register}
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
              ref={register}
              defaultValue="$"
              style={{ height: "45px", borderRadius: "10px" }}
            />
          </Form.Group>
        </Col>
        <Col lg="3" md="3"></Col>
        <Col lg="3" md="3">
          <Form.Group controlId="form60-90DayAR">
            <Form.Label style={{ fontSize: "small" }}>60-90 Day A/R</Form.Label>
            <Form.Control
              name="60-90DayAR"
              type="text"
              ref={register}
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
              type="text"
              ref={register}
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
              ref={register}
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
              ref={register}
              defaultValue="$"
              style={{ height: "45px", borderRadius: "10px" }}
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default PatientInfoForm;

import React, { useState } from "react";
import { Col, Form, Row, Button, Dropdown } from "react-bootstrap";
import SelectSearch, { fuzzySearch } from "react-select-search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/Profile.png";

const PatientInfoForm = ({ register, errors, disable }) => {
  const practiceName = [
    { name: "Pro Smile Dental Care", avatar: avatar, value: 1 },
    { name: "Monalisa Smile Dental", avatar: avatar, value: 2 },
    { name: "Family Smile Center", avatar: avatar, value: 3 },
  ];
  const providers = [
    { name: "Dr. Daria Rahman", avatar: avatar, value: 1 },
    { name: "Dr. Leroy McNamara", avatar: avatar, value: 2 },
    { name: "Dr. Margie Fisher", avatar: avatar, value: 3 },
  ];
  const insurances = [
    { name: "Blue Shield of California", avatar: avatar, value: 1 },
    { name: "Delta Dental of California", avatar: avatar, value: 2 },
    { name: "Royal Dental of California", avatar: avatar, value: 3 },
  ];
  return (
    <div style={{ paddingBottom: "20px" }}>
      <h5
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          color: "#445978",
        }}
      >
        Patient Information
      </h5>
      <Row>
        <Col lg="6" md="6" style={{ padding: "0px 10px" }}>
          <Form.Group controlId="formFirstName">
            <Form.Label
              style={{
                fontSize: "12px",
                color: "#445978",
              }}
            >
              First Name
              <p style={{ color: "red", display: "inline" }}>*</p>
            </Form.Label>
            <Form.Control
              disabled={disable}
              name="firstName"
              type="text"
              ref={register}
              required
              style={{
                height: "43px",
                borderRadius: "10px",
                fontSize: "small",
                color: "#445978",
              }}
            />
          </Form.Group>
        </Col>
        <Col lg="6" md="6" style={{ padding: "0px 10px" }}>
          <Form.Group controlId="formLastName">
            <Form.Label
              style={{ fontSize: "12px", fontWeight: "500", color: "#445978" }}
            >
              Last Name
              <p style={{ color: "red", display: "inline" }}>*</p>
            </Form.Label>
            <Form.Control
              disabled={disable}
              required
              name="lastName"
              type="text"
              ref={register}
              style={{
                height: "43px",
                borderRadius: "10px",
                fontSize: "small",
                color: "#445978",
              }}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg="6" md="6" style={{ padding: "0px 10px" }}>
          <Form.Group controlId="formEmail">
            <Form.Label style={{ fontSize: "12px", color: "#445978" }}>
              Email Address
            </Form.Label>
            <Form.Control
              disabled={disable}
              name="email"
              type="email"
              ref={register}
              style={{
                height: "43px",
                borderRadius: "10px",
                fontSize: "small",
                color: "#445978",
              }}
            />
          </Form.Group>
        </Col>
        <Col lg="6" md="6" style={{ padding: "0px 10px" }}>
          <Form.Group controlId="formMobilePhone">
            <Form.Label style={{ fontSize: "12px", color: "#445978" }}>
              Mobile Phone
              <p style={{ color: "red", display: "inline" }}>*</p>
            </Form.Label>
            <Form.Control
              disabled={disable}
              required
              name="mobilePhone"
              type="name"
              ref={register}
              style={{
                height: "43px",
                borderRadius: "10px",
                fontSize: "small",
                color: "#445978",
              }}
            />
          </Form.Group>
        </Col>
      </Row>

      <h5
        style={{
          marginTop: "43px",
          marginBottom: "20px",
          color: "#445978",
        }}
      >
        Provider Information
      </h5>
      <Row>
        <Col lg="6" md="6" style={{ padding: "0px 10px" }}>
          <Form.Group controlId="formPracticeName">
            <Form.Label style={{ fontSize: "12px", color: "#445978" }}>
              Practice Name
              <p style={{ color: "red", display: "inline" }}>*</p>
            </Form.Label>
            <SelectSearch
              className="select-search"
              options={practiceName}
              value=""
              search
              filterOptions={fuzzySearch}
              name="practice"
              placeholder="Choose your Practice"
            />
          </Form.Group>
        </Col>
        <Col lg="6" md="6" style={{ padding: "0px 10px" }}>
          <Form.Group controlId="formProviders">
            <Form.Label style={{ fontSize: "12px", color: "#445978" }}>
              Provider(s)
              <p style={{ color: "red", display: "inline" }}>*</p>
            </Form.Label>
            <SelectSearch
              className="select-search"
              options={providers}
              value=""
              search
              filterOptions={fuzzySearch}
              name="providers"
              placeholder="Select your provider(s)"
            />
          </Form.Group>
        </Col>
      </Row>
      <h5
        style={{
          marginTop: "43px",
          marginBottom: "20px",
          color: "#445978",
        }}
      >
        Insurance + Fees
      </h5>
      <Row>
        <Col lg="4" md="4" style={{ padding: "0px 10px" }}>
          <Form.Group controlId="formDateOfService">
            <Form.Label style={{ fontSize: "12px", color: "#445978" }}>
              Date of Service
              <p style={{ color: "red", display: "inline" }}>*</p>
            </Form.Label>
            <Form.Control
              disabled={disable}
              required
              name="dateOfService"
              type="Date"
              ref={register}
              defaultValue=""
              style={{
                height: "43px",
                borderRadius: "10px",
                fontSize: "small",
                color: "#445978",
              }}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col lg="8" md="8" style={{ padding: "0px 10px" }}>
          <Form.Group controlId="formInsuranceCompany">
            <Form.Label style={{ fontSize: "12px", color: "#445978" }}>
              Insurance Company
              <p style={{ color: "red", display: "inline" }}>*</p>
            </Form.Label>
            <SelectSearch
              className="select-search"
              options={insurances}
              value=""
              search
              filterOptions={fuzzySearch}
              name="insurance"
              placeholder="Start typing the insurance..."
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg="3" md="3" style={{ padding: "0px 10px" }}>
          <Form.Group controlId="formDOSServiceFees">
            <Form.Label style={{ fontSize: "12px", color: "#445978" }}>
              DOS Service Fees
              <p style={{ color: "red", display: "inline" }}>*</p>
            </Form.Label>
            <Form.Control
              disabled={disable}
              required
              name="DOSServiceFee"
              ref={register}
              defaultValue="$"
              style={{
                height: "43px",
                borderRadius: "10px",
                fontSize: "small",
                color: "#445978",
              }}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col lg="3" md="3" style={{ padding: "0px 10px" }}>
          <Form.Group controlId="formPriorBalance">
            <Form.Label style={{ fontSize: "12px", color: "#445978" }}>
              Prior Balance
              <p style={{ color: "red", display: "inline" }}>*</p>
            </Form.Label>
            <Form.Control
              disabled={disable}
              required
              name="priorBalance"
              type="text"
              ref={register}
              defaultValue="$"
              style={{
                height: "43px",
                borderRadius: "10px",
                fontSize: "small",
                color: "#445978",
              }}
            />
          </Form.Group>
        </Col>
        <Col lg="3" md="3"></Col>
        <Col lg="3" md="3">
          <Form.Group controlId="form31-60DayAR">
            <Form.Label style={{ fontSize: "12px", color: "#445978" }}>
              31-60 Day A/R
            </Form.Label>
            <Form.Control
              disabled={disable}
              name="31-60DayAR"
              type="text"
              ref={register}
              defaultValue="$"
              style={{
                height: "43px",
                borderRadius: "10px",
                fontSize: "small",
                color: "#445978",
              }}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg="3" md="3" style={{ padding: "0px 10px" }}>
          <Form.Group controlId="formCoPayAmt">
            <Form.Label style={{ fontSize: "12px", color: "#445978" }}>
              Co-Pay Amt
            </Form.Label>
            <Form.Control
              disabled={disable}
              name="coPayAmt"
              type="text"
              ref={register}
              defaultValue="$"
              style={{
                height: "43px",
                borderRadius: "10px",
                fontSize: "small",
                color: "#445978",
              }}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col lg="3" md="3" style={{ padding: "0px 10px" }}>
          <Form.Group controlId="formCollected">
            <Form.Label style={{ fontSize: "12px", color: "#445978" }}>
              Collected
            </Form.Label>
            <Form.Control
              disabled={disable}
              name="collected"
              type="text"
              ref={register}
              defaultValue="$"
              style={{
                height: "43px",
                borderRadius: "10px",
                fontSize: "small",
                color: "#445978",
              }}
            />
          </Form.Group>
        </Col>
        <Col lg="3" md="3"></Col>
        <Col lg="3" md="3">
          <Form.Group controlId="form60-90DayAR">
            <Form.Label style={{ fontSize: "12px", color: "#445978" }}>
              60-90 Day A/R
            </Form.Label>
            <Form.Control
              disabled={disable}
              name="60-90DayAR"
              type="text"
              ref={register}
              defaultValue="$"
              style={{
                height: "43px",
                borderRadius: "10px",
                fontSize: "small",
                color: "#445978",
              }}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg="3" md="3" style={{ padding: "0px 10px" }}>
          <Form.Group controlId="formCurrentAR">
            <Form.Label style={{ fontSize: "12px", color: "#445978" }}>
              Current A/R
              <p style={{ color: "red", display: "inline" }}>*</p>
            </Form.Label>
            <Form.Control
              disabled={disable}
              required
              name="currentAR"
              type="text"
              ref={register}
              defaultValue="$"
              style={{
                height: "43px",
                borderRadius: "10px",
                fontSize: "small",
                color: "#445978",
              }}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col lg="3" md="3" style={{ padding: "0px 10px" }}>
          <Form.Group controlId="formPatientBalance">
            <Form.Label style={{ fontSize: "12px", color: "#445978" }}>
              Patient Balance
              <p style={{ color: "red", display: "inline" }}>*</p>
            </Form.Label>
            <Form.Control
              disabled={disable}
              required
              name="patientBalance"
              type="text"
              ref={register}
              defaultValue="$"
              style={{
                height: "43px",
                borderRadius: "10px",
                fontSize: "small",
                color: "#445978",
              }}
            />
          </Form.Group>
        </Col>
        <Col lg="3" md="3"></Col>
        <Col lg="3" md="3">
          <Form.Group controlId="form90PlusDayAR">
            <Form.Label style={{ fontSize: "12px", color: "#445978" }}>
              90+ Day A/R
            </Form.Label>
            <Form.Control
              disabled={disable}
              name="90PlusDayAR"
              type="text"
              ref={register}
              defaultValue="$"
              style={{
                height: "43px",
                borderRadius: "10px",
                fontSize: "small",
                color: "#445978",
              }}
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default PatientInfoForm;

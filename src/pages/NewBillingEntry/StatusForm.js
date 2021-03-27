import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

const StatusForm = ({ register, errors }) => {
  return (
    <div
      style={{
        padding: "10px 80px 20px 40px",
      }}
    >
      <h5
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          color: "#445978",
        }}
      >
        Status
      </h5>
      <Row>
        <Col>
          <Form.Group controlId="formClaimStatus">
            <Form.Label style={{ fontSize: "12px", color: "#445978" }}>
              Claim Status
              <p style={{ color: "red", display: "inline" }}>*</p>
            </Form.Label>
            <Form.Control
              ref={register}
              name="claimStatus"
              type="text"
              as="select"
              required
              style={{
                height: "45px",
                borderRadius: "10px",
                fontSize: "small",
                color: "#445978",
              }}
            >
              <option value="none">Claim your status</option>
              <option value="paid">Paid</option>
              <option value="resubmitted">Resubmitted</option>
              <option value="outstanding">Outstanding</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formStatusNotes">
            <Form.Label style={{ fontSize: "12px", color: "#445978" }}>
              Notes
              <p style={{ color: "red", display: "inline" }}>*</p>
            </Form.Label>
            <Form.Control
              ref={register}
              as="textarea"
              rows={8}
              name="statusNotes"
              required
              style={{
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
        Follow-Up Actions
      </h5>
      <Row>
        <Col>
          <Form.Group controlId="patientFollowupAction">
            <Form.Label
              style={{ fontSize: "12px", fontWeight: "500", color: "#445978" }}
            >
              Patient Follow-Up Action
              <p style={{ color: "red", display: "inline" }}>*</p>
            </Form.Label>
            <Form.Control
              ref={register}
              name="patientFollowupAction"
              type="text"
              as="select"
              placeholder="Choose Follow-Up"
              required
              style={{
                height: "45px",
                borderRadius: "10px",
                fontSize: "small",
                color: "#445978",
              }}
            >
              <option value="none">Choose Follow-Up</option>
              <option value="email">Email</option>
              <option value="phoneCall">Phone Call</option>
              <option value="statement">Statement</option>
              <option value="collectionLetter">Collection - Letter</option>
              <option value="collectionTransfer">Collection - Transfer</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formFollowupNotes">
            <Form.Label style={{ fontSize: "12px", color: "#445978" }}>
              Notes
              <p style={{ color: "red", display: "inline" }}>*</p>
              <p
                style={{
                  color: "#445978",
                  display: "inline",
                  marginLeft: "270px",
                }}
              >
                0/350
              </p>
            </Form.Label>
            <Form.Control
              ref={register}
              name="followupNotes"
              as="textarea"
              rows={8}
              required
              style={{
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

export default StatusForm;

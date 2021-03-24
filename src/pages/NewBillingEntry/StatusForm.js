import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

const StatusForm = ({ register, errors }) => {
  return (
    <div>
      <Row>
        <Col>
          <Form.Group controlId="formClaimStatus">
            <Form.Label style={{ fontSize: "small" }}>
              Claim Status
              <p style={{ color: "red", display: "inline" }}>*</p>
            </Form.Label>
            <Form.Control
              ref={register}
              name="claimStatus"
              type="text"
              as="select"
              required
              style={{ height: "45px", borderRadius: "10px" }}
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
            <Form.Label style={{ fontSize: "small" }}>
              Notes
              <p style={{ color: "red", display: "inline" }}>*</p>
            </Form.Label>
            <Form.Control
              ref={register}
              as="textarea"
              rows={6}
              name="statusNotes"
              required
              style={{ borderRadius: "10px" }}
            />
          </Form.Group>
        </Col>
      </Row>
      <h5>Follow-Up Actions</h5>
      <Row>
        <Col>
          <Form.Group controlId="patientFollowupAction">
            <Form.Label style={{ fontSize: "small" }}>
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
              style={{ height: "45px", borderRadius: "10px" }}
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
            <Form.Label style={{ fontSize: "small" }}>
              Notes
              <p style={{ color: "red", display: "inline" }}>*</p>
            </Form.Label>
            <Form.Control
              ref={register}
              name="followupNotes"
              as="textarea"
              rows={6}
              required
              style={{ borderRadius: "10px" }}
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default StatusForm;

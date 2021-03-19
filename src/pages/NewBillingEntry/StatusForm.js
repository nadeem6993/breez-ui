import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const StatusForm = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="formClaimStatus">
              <Form.Label style={{ fontSize: "small" }}>
                Claim Status
                <p style={{ color: "red", display: "inline" }}>*</p>
              </Form.Label>
              <Form.Control
                name="claimStatus"
                type="text"
                as="select"
                required
                style={{ height: "45px", borderRadius: "10px" }}
              />
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
                name="patientFollowupAction"
                type="text"
                as="select"
                placeholder="Choose Follow-Up"
                required
                style={{ height: "45px", borderRadius: "10px" }}
              />
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
                name="followupNotes"
                as="textarea"
                rows={6}
                required
                style={{ borderRadius: "10px" }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Button
              size="lg"
              className="mt-4"
              variant="outline-primary"
              type="submit"
              style={{
                fontSize: "small",
                fontWeight: "500",
                width: "90%",
              }}
            >
              Save + New Entry
            </Button>
          </Col>
          <Col>
            <Button
              size="lg"
              className="mt-4"
              variant="primary"
              type="submit"
              style={{
                fontSize: "small",
                fontWeight: "500",
                color: "white",
                width: "90%",
                padding: "",
              }}
            >
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default StatusForm;

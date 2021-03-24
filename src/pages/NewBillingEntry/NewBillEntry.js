import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./NewBillingEntry.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faUser,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import PatientInfoForm from "./PatientInfoForm";
import StatusForm from "./StatusForm";

const NewBillEntry = () => {
  const { register, errors, handleSubmit } = useForm();
  return (
    <div>
      <Container fluid style={{ padding: "0px" }}>
        <Row className="billHeader">
          <Col lg="12" md="10" sm="10" style={{ margin: 0, padding: 0 }}>
            <div
              style={{
                backgroundColor: "white",
                height: "80px",
                padding: "0px",
              }}
            ></div>
            <h3 className="text-white pt-5">New Bill Entry</h3>
          </Col>
        </Row>
        <Row className="newBillForms">
          <Col lg="12">
            <Form>
              <Row>
                <Col lg="7" md="12">
                  <h5>Patient Information</h5>
                  <PatientInfoForm register={register} errors={errors} />
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
                <Col lg="5" md="12" className="statusForm">
                  <h5>Status</h5>
                  <StatusForm register={register} errors={errors} />
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
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewBillEntry;

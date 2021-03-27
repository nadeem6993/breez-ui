import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./NewBillingEntry.css";
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
            <h2
              className="text-white pt-5 ml-5 mt-5"
              style={{ fontWeight: "500" }}
            >
              New Billing Entry
            </h2>
          </Col>
        </Row>
        <Row className="newBillForms">
          <Col lg="12">
            <Form>
              <Row>
                <Col lg="7" md="12" className="patientInfo">
                  <PatientInfoForm register={register} errors={errors} />
                  <Row>
                    <Col>
                      <Button
                        size="lg"
                        className="mt-4 px-5"
                        variant="none"
                        style={{
                          fontSize: "small",
                          fontWeight: "500",
                          color: "white",
                          backgroundColor: "orangered",
                          height: "43px",
                          borderRadius: "10px",
                        }}
                      >
                        Cancel
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col lg="5" md="12">
                  <StatusForm register={register} errors={errors} />
                  <Row
                    className="mt-2"
                    style={{
                      padding: "0px 80px 20px 40px",
                    }}
                  >
                    <Col>
                      <Button
                        size="lg"
                        className="mt-4"
                        type="submit"
                        style={{
                          backgroundColor: "white",
                          fontSize: "small",
                          fontWeight: "500",
                          width: "100%",
                          height: "43px",
                          color: "#3b9ad7",
                          border: "2px solid #3b9ad7",
                          borderRadius: "10px",
                        }}
                      >
                        Save + New Entry
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        size="lg"
                        className="mt-4"
                        type="submit"
                        style={{
                          fontSize: "small",
                          fontWeight: "500",
                          color: "white",
                          backgroundColor: "#3b9ad7",
                          width: "100%",
                          height: "43px",
                          borderRadius: "10px",
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

import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Table } from "react-bootstrap";
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

const ClaimHistory = () => {
  const tableData = [
    {
      date: "12/08/2020",
      specialist: "Mary Arredondo",
      status: "Email - 1",
      notes:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      date: "8/12/2020",
      specialist: "Mary Arredondo",
      status: "Phone Call - 1",
      notes:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      date: "12/15/2020",
      specialist: "Mary Arredondo",
      status: "Email - 2",
      notes:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      date: "12/31/2020",
      specialist: "Kenya Milton",
      status: "Outstanding",
      notes:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      date: "1/17/2021",
      specialist: "Mary Arredondo",
      status: "Phone Call - 2",
      notes:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];

  const [disable, setDisable] = useState(true);
  const { register, errors, handleSubmit } = useForm();

  const handleDisable = () => {
    setDisable(!disable);
  };

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
            <h3 className="text-white pt-5">#REF A000001</h3>
          </Col>
        </Row>
        <Row className="newBillForms">
          <Col lg="12">
            <Form>
              <Row>
                <Col lg="7" md="12">
                  <Row>
                    <Col>
                      <Table hover style={{ fontSize: "small" }}>
                        <thead style={{ backgroundColor: "lightgrey" }}>
                          <tr>
                            <th>Date</th>
                            <th>Specialist</th>
                            <th>Status/Action</th>
                            <th>Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableData.map((data) => {
                            return (
                              <tr>
                                <td>{data.date}</td>
                                <td>{data.specialist}</td>
                                <td>{data.status}</td>
                                <td>{data.notes}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                  <h5>Patient Information</h5>
                  <PatientInfoForm
                    register={register}
                    errors={errors}
                    disable={disable}
                  />
                  <Row>
                    <Col>
                      <Button
                        onClick={handleDisable}
                        size="lg"
                        className="mt-4 px-5"
                        variant="outline-primary"
                        style={{
                          fontSize: "small",
                          fontWeight: "500",
                        }}
                      >
                        Edit
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        size="lg"
                        className="mt-4 px-5"
                        variant="primary"
                        type="submit"
                        style={{
                          fontSize: "small",
                          fontWeight: "500",
                        }}
                      >
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col lg="5" md="12" className="statusForm">
                  <h5>Status</h5>
                  <StatusForm register={register} errors={errors} />
                  <Row className="mt-2">
                    <Col>
                      <Button
                        block
                        size="lg"
                        className="mt-4"
                        variant="primary"
                        type="submit"
                        style={{
                          fontSize: "small",
                          fontWeight: "500",
                        }}
                      >
                        Add Action
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

export default ClaimHistory;

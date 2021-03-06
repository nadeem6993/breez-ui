import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./NewBillingEntry.css";
import avatar from "../../assets/Profile.png";
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

  const [open, setOpen] = useState(false);

  const handleDisable = () => {
    setDisable(!disable);
  };

  const handleIcon = () => {
    setOpen(!open);
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 className="text-white pt-5 ml-5 mt-5">REF #A000001</h3>
              <Button
                variant="transparent"
                style={{
                  border: "2px solid #3b9ad7",
                  borderRadius: "10px",
                  height: "43px",
                  color: "white",
                  fontSize: "small",
                  marginTop: "87px",
                  marginRight: "200px",
                  padding: "0px 20px",
                }}
              >
                Print Summary
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="newBillForms">
          <Col lg="12">
            <Form>
              <Row>
                <Col lg="8" md="12">
                  <h5
                    style={{
                      marginTop: "30px",
                      marginBottom: "40px",
                      color: "#445978",
                    }}
                  >
                    Claim History
                  </h5>
                  <Row>
                    <Col>
                      <div className="tableHistory">
                        <Table
                          responsive
                          hover
                          style={{
                            fontSize: "12px",
                            fontWeight: "lighter",
                            color: "#445978",
                          }}
                        >
                          <thead
                            style={{
                              backgroundColor: "lightgrey",
                              paddingLeft: "10px",
                            }}
                          >
                            <tr>
                              <td style={{ paddingLeft: "30px" }}>Date</td>
                              <td>Specialist</td>
                              <td>Status/Action</td>
                              <td>Notes</td>
                            </tr>
                          </thead>
                          <tbody
                            style={{
                              backgroundColor: "white",
                            }}
                          >
                            {tableData.map((data) => {
                              return (
                                <tr style={{ fontSize: "12px" }}>
                                  <td style={{ paddingLeft: "30px" }}>
                                    {data.date}
                                  </td>
                                  <td>{data.specialist}</td>
                                  <td>{data.status}</td>
                                  <td>
                                    <div style={{ display: "flex" }}>
                                      <div
                                        style={{
                                          overflow: "hidden",
                                          display: "inline",
                                          height: "20px",
                                          textOverflow: "ellipsis",
                                        }}
                                      >
                                        {data.notes}
                                      </div>
                                      {open === true ? (
                                        <FontAwesomeIcon
                                          icon={faAngleDown}
                                          size="2x"
                                          style={{
                                            display: "inline",
                                          }}
                                          onClick={handleIcon}
                                        />
                                      ) : (
                                        <FontAwesomeIcon
                                          icon={faAngleUp}
                                          size="2x"
                                          style={{
                                            display: "inline",
                                          }}
                                          onClick={handleIcon}
                                        />
                                      )}
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                  </Row>
                  <PatientInfoForm
                    register={register}
                    errors={errors}
                    disable={disable}
                  />
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px 30px 0px 20px",
                    }}
                  >
                    <Button
                      onClick={handleDisable}
                      size="lg"
                      style={{
                        fontSize: "small",
                        fontWeight: "500",
                        backgroundColor: "white",
                        color: "#3b9ad7",
                        width: "25%",
                        border: "2px solid #3b9ad7",
                        borderRadius: "10px",
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      size="lg"
                      variant="none"
                      type="submit"
                      style={{
                        fontSize: "small",
                        fontWeight: "500",
                        color: "white",
                        width: "25%",
                        height: "43px",
                        backgroundColor: "#3b9ad7",
                        borderRadius: "10px",
                      }}
                    >
                      Save
                    </Button>
                  </Row>
                </Col>
                <Col lg="4" md="12">
                  <div
                    style={{
                      marginRight: "20px",
                      padding: "10px 20px 20px 40px",
                    }}
                  >
                    <h5
                      style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        color: "#445978",
                      }}
                    >
                      Status:{" "}
                      <p style={{ color: "#85c765", display: "inline" }}>
                        Paid
                      </p>
                    </h5>
                    <Row>
                      <Col>
                        <Form.Group controlId="formClaimStatus">
                          <Form.Label
                            style={{ fontSize: "12px", color: "#445978" }}
                          >
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
                            <option value="none">Choose status</option>
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
                          <Form.Label
                            style={{ fontSize: "12px", color: "#445978" }}
                          >
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
                    <Row className="mt-2">
                      <Col style={{ padding: "0px 15px" }}>
                        <Button
                          block
                          size="lg"
                          className="mt-4"
                          variant="primary"
                          type="submit"
                          style={{
                            fontSize: "small",
                            height: "43px",
                            backgroundColor: "#3b9ad7",
                            borderRadius: "10px",
                          }}
                        >
                          Update Status
                        </Button>
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
                            style={{
                              fontSize: "12px",
                              fontWeight: "500",
                              color: "#445978",
                            }}
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
                            <option value="collectionLetter">
                              Collection - Letter
                            </option>
                            <option value="collectionTransfer">
                              Collection - Transfer
                            </option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="formFollowupNotes">
                          <Form.Label
                            style={{
                              fontSize: "12px",
                              fontWeight: "500",
                              color: "#445978",
                            }}
                          >
                            Notes
                            <p style={{ color: "red", display: "inline" }}>*</p>
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
                  <Row className="mt-2 mr-4">
                    <Col style={{ padding: "0px 55px" }}>
                      <Button
                        block
                        size="lg"
                        className="mt-4"
                        variant="primary"
                        type="submit"
                        style={{
                          fontSize: "small",
                          height: "43px",
                          backgroundColor: "#3b9ad7",
                          borderRadius: "10px",
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

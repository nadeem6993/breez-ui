import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./NewBillingEntry.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faUser,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/Profile.png";
import PatientInfoForm from "./PatientInfoForm";
import StatusForm from "./StatusForm";

const NewBillingEntry = () => {
  return (
    <div>
      <Container fluid>
        <Row className="billHeader">
          <Col lg="1" md="2" sm="2">
            <h1 className="text-white my-4 pt-3 ">Breez</h1>
            <Image className="mt-4" src={avatar} roundedCircle height="70px" />
          </Col>
          <Col lg="11" md="10" sm="10" style={{ margin: 0, padding: 0 }}>
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
        <Row>
          <Col lg="1" className="iconplate">
            <div className="p-3">
              <FontAwesomeIcon
                icon={faMicrosoft}
                size="4x"
                style={{ color: "grey" }}
              />
            </div>
            <div className="p-3">
              <FontAwesomeIcon
                icon={faDatabase}
                size="4x"
                style={{ color: "grey" }}
              />
            </div>
            <div className="p-3">
              <FontAwesomeIcon
                icon={faUser}
                size="4x"
                style={{ color: "grey" }}
              />
            </div>
            <div className="p-3">
              <FontAwesomeIcon
                icon={faChartPie}
                size="4x"
                style={{ color: "grey" }}
              />
            </div>
          </Col>
          <Col
            lg="11"
            style={{
              backgroundColor: "rgb(238, 244, 245)",
              minHeight: "120vh",
              paddingTop: "30px",
            }}
          >
            <Row>
              <Col lg="7" md="12" style={{}}>
                <h5>Patient Information</h5>
                <PatientInfoForm />
              </Col>
              <Col lg="5" md="12" style={{}}>
                <h5>Status</h5>
                <StatusForm />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewBillingEntry;

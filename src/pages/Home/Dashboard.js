import React from "react";
import "./Dashboard.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faUser,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/Profile.png";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row style={{ minHeight: "100vh" }}>
        <Col lg="1" className="dashboardSidebar">
          <Row className="sidebarTop">
            <Col>
              <h1 style={{ color: "white" }}>Breez</h1>
              <Image
                className="mt-5"
                src={avatar}
                roundedCircle
                height="70px"
              />
            </Col>
          </Row>
          <Row>
            <Col className="iconPlate">
              <div className="p-3">
                <a href="/new-billing-entry">
                  <FontAwesomeIcon
                    icon={faMicrosoft}
                    size="4x"
                    style={{ color: "grey" }}
                  />
                </a>
              </div>
              <div className="p-3">
                <a href="/new-billing-entry">
                  <FontAwesomeIcon
                    icon={faDatabase}
                    size="4x"
                    style={{ color: "grey" }}
                  />
                </a>
              </div>
              <div className="p-3">
                <a href="profile">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="4x"
                    style={{ color: "grey" }}
                  />
                </a>
              </div>
              <div className="p-3">
                <a href="!#">
                  <FontAwesomeIcon
                    icon={faChartPie}
                    size="4x"
                    style={{ color: "grey" }}
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg="11" className="dashboardMain">
          <Row className="dashboardMainTop">
            <Col lg="12">
              <Row style={{ height: "90px", backgroundColor: "white" }}></Row>
              <Row style={{ paddingTop: "50px" }}>
                <h3 style={{ color: "white" }}>New Billing Entry</h3>
              </Row>
            </Col>
          </Row>
          <Row></Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

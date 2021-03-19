import React from "react";
import "./Dashboard.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faUser,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row style={{ minHeight: "100vh" }}>
        <Col lg="1" className="dashboardSidebar">
          <Row className="sidebarTop">
            <h1 style={{ color: "white" }}>Breez</h1>
          </Row>
        </Col>
        <Col lg="11" className="dashboardMain">
          <Row className="dashboardMainTop">
            <Col style={{ height: "12vh", backgroundColor: "white" }}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

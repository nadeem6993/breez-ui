import React, { useState } from "react";
import "./Dashboard.css";
import { Container, Row, Col, Image, Tab, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faUser,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/Profile.png";
import NewBillEntry from "../NewBillingEntry/NewBillEntry";
import Profile from "../Profile/Profile";
import ClaimHistory from "../NewBillingEntry/ClaimHistory";

const Dashboard = () => {
  const blue = {
    color: "lightblue",
  };
  return (
    <Container fluid>
      <Tab.Container id="tabs-nav" defaultActiveKey="billingEntry">
        <Row style={{ minHeight: "120vh" }}>
          <Col lg="1" className="dashboardSidebar">
            <Row className="sidebarTop">
              <Col>
                <h2 style={{ color: "white" }}>Breez</h2>
                <Image
                  className="avatarStyle"
                  src={avatar}
                  roundedCircle
                  height="60px"
                />
              </Col>
            </Row>
            <Row>
              <Col className="iconPlate">
                <Nav.Item className="iconStyle">
                  <Nav.Link eventKey="main">
                    <FontAwesomeIcon
                      icon={faMicrosoft}
                      size="2x"
                      style={{ color: "lightgrey" }}
                    />
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className="iconStyle">
                  <Nav.Link eventKey="billingEntry">
                    <FontAwesomeIcon
                      icon={faDatabase}
                      size="2x"
                      style={{ color: "lightgrey" }}
                    />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="iconStyle">
                  <Nav.Link eventKey="profile">
                    <FontAwesomeIcon
                      icon={faUser}
                      size="2x"
                      style={{ color: "lightgrey" }}
                    />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="iconStyle">
                  <Nav.Link eventKey="chart">
                    <FontAwesomeIcon
                      icon={faChartPie}
                      size="2x"
                      style={{ color: "lightgrey" }}
                    />
                  </Nav.Link>
                </Nav.Item>
              </Col>
            </Row>
          </Col>
          <Col lg="11" className="dashboardMain">
            <Tab.Content>
              <Tab.Pane eventKey="billingEntry">
                <NewBillEntry />
              </Tab.Pane>
              <Tab.Pane eventKey="profile">
                <Profile />
              </Tab.Pane>
              <Tab.Pane eventKey="chart">
                <ClaimHistory />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Dashboard;

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

const Dashboard = () => {
  return (
    <Container fluid>
      <Tab.Container id="tabs-nav" defaultActiveKey="billingEntry">
        <Row style={{ minHeight: "120vh" }}>
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
                <Nav.Item>
                  <Nav.Link eventKey="main">
                    <FontAwesomeIcon
                      icon={faMicrosoft}
                      size="4x"
                      style={{ color: "grey" }}
                    />
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="billingEntry">
                    <FontAwesomeIcon
                      icon={faDatabase}
                      size="4x"
                      style={{ color: "grey" }}
                    />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="profile">
                    <FontAwesomeIcon
                      icon={faUser}
                      size="4x"
                      style={{ color: "grey" }}
                    />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="chart">
                    <FontAwesomeIcon
                      icon={faChartPie}
                      size="4x"
                      style={{ color: "grey" }}
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
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Dashboard;

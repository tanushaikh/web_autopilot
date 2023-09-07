import React, { useState } from "react";
import ToggleSwitch from "../componts/reusable/ToggleSwitch/ToggleSwitch";
import { Row, Col } from "react-bootstrap";
import SideNavBar from "../componts/reusable/SideNavBar/SideNavBar";
import NavBar from "../componts/reusable/navbar/NavBar";

const Orders = () => {
  const currentPath = window.location.pathname;
  return (
    <Row className="g-3">
      <Col className="col-5">
        <SideNavBar currentPath={currentPath} />
      </Col>
      <Col className="col-19">
        <Row>
          <NavBar />
        </Row>
        <Row>
          <div className="ms-4 mt-4 medium-text">Orders</div>
        </Row>
      </Col>
    </Row>
  );
};

export default Orders;

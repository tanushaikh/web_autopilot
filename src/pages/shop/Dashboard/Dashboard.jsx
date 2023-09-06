import { useAuth0 } from "@auth0/auth0-react";
import { GoogleLogin } from "@react-oauth/google";
import ToggleSwitch from "../componts/reusable/ToggleSwitch/ToggleSwitch";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DashobardIcon from "../../../icons/DashobardIcon";
import SuppliersIcon from "../../../icons/SuppliersIcon";
import AdminManagementIcon from "../../../icons/AdminManagementIcon";
import SettingsIcon from "../../../icons/SettingsIcon";
import SideNavBar from "../componts/reusable/SideNavBar/SideNavBar";
import NavBar from "../componts/reusable/navbar/NavBar";
const Dashboard = () => {
  const [switchState, setSwitchState] = useState({
    ProductSummary: false,
    SalesChart: false,
    OrderSummary: false,
  });
  console.log(switchState, "switchState");
  // console.log(switchState, "dashbord");
  const handleSwitchChange = (newState, title) => {
    let data = [...switchState];
    // data.title = newState
    setSwitchState(data);
  };
  return (
    // <Container>
    <Row className="g-3">
      <Col className="col-5">
        <SideNavBar />
      </Col>
      <Col className="col-19">
        <Row>
          <NavBar />
        </Row>
        <Row>
          Please select and customize your dashboard as per your convenience
        </Row>
        <Row className="border rounded m-4">
          <Col>
            <ToggleSwitch
              title="Product Summary"
              description="Show on Dashboard"
              checked={switchState.ProductSummary}
              value={setSwitchState}
              onChange={handleSwitchChange}
              name={"ProductSummary"}
            />
            <ToggleSwitch
              title="Sales Chart"
              description="Show on Dashboard"
              checked={switchState.SalesChart}
              value={setSwitchState}
              onChange={handleSwitchChange}
              name={"SalesChart"}
            />
            <ToggleSwitch
              title="Order Summary"
              description="Show on Dashboard"
              checked={switchState.OrderSummary}
              value={setSwitchState}
              onChange={handleSwitchChange}
              name={"OrderSummary"}
            />
            <ToggleSwitch />
            <ToggleSwitch />
          </Col>
          <Col>
            <ToggleSwitch />
            <ToggleSwitch />
            <ToggleSwitch />
            <ToggleSwitch />
            <ToggleSwitch />
          </Col>
        </Row>
      </Col>
    </Row>
    // </Container>
  );
};

export default Dashboard;

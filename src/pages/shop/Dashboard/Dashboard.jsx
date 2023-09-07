import ToggleSwitch from "../componts/reusable/ToggleSwitch/ToggleSwitch";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
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
    <Row className="g-3">
      <Col className="col-5">
        <SideNavBar type="active" />
      </Col>
      <Col className="col-19">
        <Row>
          <NavBar />
        </Row>
        <Row>
          <div className="ms-4 mt-4 medium-text">Dashboard</div>
        </Row>
      </Col>
    </Row>
  );
};

export default Dashboard;

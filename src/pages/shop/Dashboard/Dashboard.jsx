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
const Dashboard = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  // console.log(isAuthenticated, "auth");
  // console.log(user, "user");
  // const [switchState, setSwitchState] = useState(false);
  const [switchState, setSwitchState] = useState({
    ProductSummary: "",
    SalesChart: "",
    OrderSummary: "",
  });

  // console.log(switchState, "dashbord");
  const handleSwitchChange = (newState, title) => {
    let data = [...switchState];
    // data.title = newState
    setSwitchState(data);
  };
  return (
    // <div>
    //   <h1>Dashboard</h1>
    //   <ToggleSwitch
    //     title="Product Summary"
    //     description=" switch component."
    //     checked={switchState.ProductSummary}
    //     value={"ProductSummary"}
    //     onChange={handleSwitchChange}
    //   />
    //   <ToggleSwitch
    //     title="Sales Chart"
    //     description=" switch component."
    //     checked={switchState.SalesChart}
    //     value={"SalesChart"}
    //     onChange={handleSwitchChange}
    //   />
    //   <ToggleSwitch
    //     title="Order Summary"
    //     description=" switch component."
    //     checked={switchState.OrderSummary}
    //     value={"OrderSummary"}
    //     onChange={handleSwitchChange}
    //   />
    // </div>
    // <Container>
    <Row>
      <Col className="col-5">
        <SideNavBar />
      </Col>
      <Col className="col-18">rest of the content page</Col>
    </Row>
    // </Container>
  );
};

export default Dashboard;

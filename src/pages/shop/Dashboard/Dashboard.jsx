import { useAuth0 } from "@auth0/auth0-react";
import { GoogleLogin } from "@react-oauth/google";
import ToggleSwitch from "../componts/reusable/ToggleSwitch/ToggleSwitch";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DashobardIcon from "../../../icons/DashobardIcon";
import SuppliersIcon from "../../../icons/SuppliersIcon";
import AdminManagementIcon from "../../../icons/AdminManagementIcon";
import SettingsIcon from "../../../icons/SettingsIcon";
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
        <DashobardIcon />
        <SuppliersIcon />
        <AdminManagementIcon color={"#2563EB"} />
        <SettingsIcon />
      </Col>
      <Col className="col-19">
        <svg
          // onClick={() => setShowPassword(!showPassword)}
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 1L20 19"
            stroke="#64748B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.58399 8.58691C9.20871 8.96193 8.99778 9.47067 8.99759 10.0012C8.9974 10.5317 9.20798 11.0406 9.58299 11.4159C9.95801 11.7912 10.4667 12.0021 10.9973 12.0023C11.5278 12.0025 12.0367 11.7919 12.412 11.4169"
            stroke="#64748B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.363 3.36506C9.22042 3.11978 10.1082 2.9969 11 3.00006C15 3.00006 18.333 5.33306 21 10.0001C20.222 11.3611 19.388 12.5241 18.497 13.4881M16.357 15.3491C14.726 16.4491 12.942 17.0001 11 17.0001C7 17.0001 3.667 14.6671 1 10.0001C2.369 7.60506 3.913 5.82506 5.632 4.65906"
            stroke="#64748B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Col>
    </Row>
    // </Container>
  );
};

export default Dashboard;

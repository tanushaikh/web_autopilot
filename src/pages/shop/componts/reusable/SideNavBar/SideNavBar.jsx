import React from "react";
import "./SideNavBar.scss";
import SettingsIcon from "../../../../../icons/SettingsIcon";
import LogOutIcon from "../../../../../icons/LogOutIcon";
import DashobardIcon from "../../../../../icons/DashobardIcon";
import InventoryIcon from "../../../../../icons/InventoryIcon";
import ReportsIcon from "../../../../../icons/ReportsIcon";
import SuppliersIcon from "../../../../../icons/SuppliersIcon";
import OrdersIcon from "../../../../../icons/OrdersIcon";
import AdminManagementIcon from "../../../../../icons/AdminManagementIcon";
const SideNavBar = () => {
  return (
    <div style={{ height: "98vh" }}>
      <div className="main-container-sidenav">
        <div className="secondry-container-sidenav">
          <div className="title-Dashboard-section mt-2 mb-4 pb-2">
            AutoPilot
          </div>
          <div className="sidenav-menu-container">
            {/* Dashobard */}
            <div className="d-flex align-items-center ">
              <span>
                <DashobardIcon />
              </span>
              <span className="ms-2">Dashobard</span>
            </div>
            {/* Inventory */}
            <div className="d-flex align-items-center">
              <span>
                {/* <InventoryIcon /> */}
                <img
                  width={24}
                  src="https://i.ibb.co/S67CwN4/Frame-6-1.png"
                  alt="Frame-6-1"
                  border="0"
                />
              </span>
              <span className="ms-2">Inventory</span>
            </div>
            {/* Reports */}
            <div className="d-flex align-items-center">
              <span>
                <ReportsIcon />
              </span>
              <span className="ms-2">Reports</span>
            </div>
            {/* Suppliers */}
            <div className="d-flex align-items-center">
              <span>
                <SuppliersIcon />
              </span>
              <span className="ms-2">Suppliers</span>
            </div>

            {/* Orders */}
            <div className="d-flex align-items-center">
              <span>
                <OrdersIcon />
              </span>
              <span className="ms-2">Orders</span>
            </div>

            {/* Admin Management */}
            <div className="d-flex align-items-center">
              <span>
                <AdminManagementIcon color={"#2563EB"} />
              </span>
              <span className="text-primary ms-2">Admin Management</span>
            </div>
          </div>
        </div>
        {/* setting and logout section */}
        <div className="secondry-container-sidenav sidenav-menu-container mb-4">
          <div className="d-flex align-items-center">
            <span>
              <SettingsIcon />
            </span>
            <span className="ms-2">Settings</span>
          </div>
          <div className="d-flex align-items-center">
            <span>
              <LogOutIcon />
            </span>
            <span className="ms-2">Log Out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;

import React from "react";
import "./SideNavBar.scss";
import { NavLink } from "react-router-dom";

import SettingsIcon from "../../../../../icons/SettingsIcon";
import LogOutIcon from "../../../../../icons/LogOutIcon";
import DashobardIcon from "../../../../../icons/DashobardIcon";
import InventoryIcon from "../../../../../icons/InventoryIcon";
import ReportsIcon from "../../../../../icons/ReportsIcon";
import SuppliersIcon from "../../../../../icons/SuppliersIcon";
import OrdersIcon from "../../../../../icons/OrdersIcon";
import AdminManagementIcon from "../../../../../icons/AdminManagementIcon";
const SideNavBar = ({ currentPath }) => {
  return (
    <div
      style={{
        height: "98vh",
        position: "fixed",
        width: "20%",
      }}
    >
      <div className="main-container-sidenav">
        <div className="secondry-container-sidenav">
          <div className="title-Dashboard-section mt-2 mb-4 pb-2">
            AutoPilot
          </div>
          <div className="sidenav-menu-container">
            {/* Dashobard */}
            <NavLink
              className="text-decoration-none"
              // activeClassName="active"
              to="/shop/dashboard"
            >
              <div className="d-flex align-items-center ">
                <span>
                  {currentPath == "/shop/dashboard" ? (
                    <DashobardIcon color="#2563eb" />
                  ) : (
                    <DashobardIcon />
                  )}
                </span>
                <span className="ms-2 ">Dashobard</span>
              </div>
            </NavLink>
            {/* Inventory */}
            <NavLink className="text-decoration-none" to="/shop/inventory">
              <div className="d-flex align-items-center">
                <span>
                  {currentPath === "/shop/inventory" ? (
                    <img
                      width={24}
                      src="https://i.ibb.co/pyHRLjx/Frame-6-5.png"
                      alt="Frame-6-1"
                      border="0"
                    />
                  ) : (
                    <img
                      width={24}
                      src="https://i.ibb.co/S67CwN4/Frame-6-1.png"
                      alt="Frame-6-1"
                      border="0"
                    />
                  )}
                </span>
                <span className="ms-2">Inventory</span>
              </div>
            </NavLink>
            {/* Reports */}
            <NavLink className="text-decoration-none" to="/shop/reports">
              <div className="d-flex align-items-center">
                <span>
                  {currentPath == "/shop/reports" ? (
                    <ReportsIcon color="#2563eb" />
                  ) : (
                    <ReportsIcon />
                  )}
                </span>
                <span className="ms-2">Reports</span>
              </div>
            </NavLink>
            {/* Suppliers */}
            <NavLink className="text-decoration-none" to="/shop/suppliers">
              <div className="d-flex align-items-center">
                <span>
                  {currentPath === "/shop/suppliers" ? (
                    <SuppliersIcon color="#2563eb" />
                  ) : (
                    <SuppliersIcon />
                  )}
                </span>
                <span className="ms-2">Suppliers</span>
              </div>
            </NavLink>
            {/* Orders */}
            <NavLink className="text-decoration-none" to="/shop/orders">
              <div className="d-flex align-items-center">
                <span>
                  {currentPath == "/shop/orders" ? (
                    <OrdersIcon color="#2563eb" />
                  ) : (
                    <OrdersIcon />
                  )}
                </span>
                <span className="ms-2">Orders</span>
              </div>
            </NavLink>
            {/* Admin Management */}
            <NavLink className="text-decoration-none" to="/shop/masters">
              <div className="d-flex align-items-center">
                <span>
                  {currentPath == "/shop/masters" ? (
                    <AdminManagementIcon color={"#2563EB"} />
                  ) : (
                    <AdminManagementIcon />
                  )}
                </span>
                <span className=" ms-2">Admin Management</span>
              </div>
            </NavLink>
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

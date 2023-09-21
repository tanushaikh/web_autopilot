import ToggleSwitch from "../componts/reusable/ToggleSwitch/ToggleSwitch";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import SideNavBar from "../componts/reusable/SideNavBar/SideNavBar";
import NavBar from "../componts/reusable/navbar/NavBar";
import ChartIcon from "../../../icons/ChartIcon";
import PlusIcon from "../../../icons/PlusIcon";
const Dashboard = () => {
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
        <Row className="bg-background-new">
          <Col>
            {/* first Row Date*/}
            <Row className="mt-2 mb-1">
              <Col className="col-24">
                <div className="dashboard-first-date-and-button-row">
                  <div className="d-flex justify-content-center align-items-center pt-1">
                    <div className="dashboard-date">
                      Friday, November 18,2022
                    </div>
                    <div className="dashboard-buttons-create-add-button-container">
                      <button className="bg-primary dashboard-buttons-create-add-button mb-2">
                        <ChartIcon />
                        <span>Create Bill</span>
                      </button>
                      <button className="ms-2 bg-yellow dashboard-buttons-create-add-button mb-2">
                        <PlusIcon />
                        <span>Add Menu</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            {/* Second Row  Overview*/}
            <Row className="my-1">
              <Col className="col-24">
                <div className="dashboard-first-date-and-button-row">
                  <div className="dashboard-row-and-col-title">Overview</div>
                  <div className="row mt-3">
                    <div className="col-lg-5">
                      <div className="dashboard-overview-todays-text">
                        Today’s
                      </div>
                      <div className="d-flex align-items-baseline">
                        <div className="dashboard-overview-text-2">
                          Tables Booking
                        </div>
                        <div className="ms-3 dashboard-big-blue-numbers">
                          23
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="dashboard-overview-todays-text">
                        Today’s
                      </div>
                      <div className="d-flex align-items-baseline">
                        <div className="dashboard-overview-text-2">
                          Check-out
                        </div>
                        <div className="ms-3 dashboard-big-blue-numbers">
                          23
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="dashboard-overview-todays-text">
                        Today’s
                      </div>
                      <div className="d-flex align-items-baseline">
                        <div className="dashboard-overview-text-2">
                          In hotel
                        </div>
                        <div className="ms-3 dashboard-big-blue-numbers">
                          23
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="dashboard-overview-todays-text">
                        Today’s
                      </div>
                      <div className="d-flex align-items-baseline">
                        <div className="dashboard-overview-text-2">
                          Available Tables
                        </div>
                        <div className="ms-3 dashboard-big-blue-numbers">
                          23
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="dashboard-overview-todays-text">
                        Today’s
                      </div>
                      <div className="d-flex align-items-baseline">
                        <div className="dashboard-overview-text-2">
                          Occupied Tables
                        </div>
                        <div className="ms-3 dashboard-big-blue-numbers">
                          23
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            {/* third Row Table */}
            <Row className="my-1">
              <Col>
                <div className="dashboard-first-date-and-button-row">
                  Tables
                </div>
              </Col>
            </Row>
            {/* Tables Status and Booking Status */}
            <Row className="my-1">
              <Col className="col-15">
                <div className="dashboard-col-style">Tables Status</div>
              </Col>
              <Col className="col-9">
                <div className="dashboard-col-style">Booking Status</div>
              </Col>
            </Row>
            {/* Occupancy Statistics Customers feedback*/}
            <Row className="my-1">
              <Col className="col-15">
                <div className="dashboard-col-style">Occupancy Statistics</div>
              </Col>
              <Col className="col-9">
                <div className="dashboard-col-style">Customers feedback</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Dashboard;

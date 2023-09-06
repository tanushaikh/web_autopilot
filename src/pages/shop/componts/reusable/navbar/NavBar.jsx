import React from "react";
import BellIcon from "../../../../../icons/BellIcon";

const NavBar = () => {
  return (
    <div className="p-2 container-navbar-main">
      <div className="d-flex justify-content-between align-items-center">
        <div>Search</div>
        <div className="d-flex align-items-center">
          <div>
            <BellIcon />
          </div>
          <div className="mx-4">
            <img
              width={40}
              src="https://i.ibb.co/Lkqp2gv/Ellipse-54.png"
              alt="Ellipse-54"
              border="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

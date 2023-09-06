import React, { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({
  title,
  description,
  checked,
  onChange,
  value,
  name,
}) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  // const handleChange = () => {
  //   setIsChecked(!isChecked);
  //   if (onChange) {
  //     onChange(!isChecked);
  //   }
  // };

  const handleChange = () => {
    setIsChecked(!isChecked);
    if (value) {
      value((prevState) => ({
        ...prevState,
        [name]: !isChecked,
      }));
    }
  };

  return (
    <>
      <div className="switch-main-container p-4 m-4">
        <div className="d-flex justify-content-between">
          <div className="switch-container-title">{title}</div>
          <div>
            <div className="switch-box-container">
              <label
                style={{ borderRadius: "28px" }}
                className={`switch ${isChecked ? "on" : "off"}`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleChange()}
                />
                <span
                  style={{ borderRadius: "25px" }}
                  className="slider"
                ></span>
              </label>
            </div>
            <div className="switch-container-description">{description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleSwitch;

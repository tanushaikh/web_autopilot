import React from "react";
import CancelCutIcon from "../../../icons/CancelCutIcon";

const Rejected = ({ setShowModal, url, description, description1 }) => {
  return (
    <>
      <div className="modal-containerrrr">
        <div className="modal-cancel-button">
          <button onClick={() => setShowModal(false)}>
            <CancelCutIcon />
          </button>
        </div>
        <div>
          <img
            className="img-fluid"
            width={290}
            src={url}
            alt="Group"
            border="0"
          />
        </div>
        <div className="">
          {description} <br /> {description1}
        </div>
      </div>
    </>
  );
};

export default Rejected;

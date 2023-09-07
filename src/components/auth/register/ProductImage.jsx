import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleAuth } from "../../../redux/slices/AuthSlice";
const ProductImage = ({ image }) => {
  const data = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  return (
    <>
      {/* <h1>{data}</h1>
      <button onClick={() => dispatch(handleAuth("login"))}>Login</button>
      <button onClick={() => dispatch(handleAuth("register"))}>register</button>
      <button onClick={() => dispatch(handleAuth("resetPassword"))}>
        resetPassword
      </button>
      <button onClick={() => dispatch(handleAuth("verifyOTP"))}>
        verifyOTP
      </button>
      <button onClick={() => dispatch(handleAuth("setNewPassword"))}>
        setNewPassword
      </button>
      <button onClick={() => dispatch(handleAuth("RegisterInfo"))}>
        RegisterInfo
      </button> */}

      <div className="register-project-container-images">
        <div
          style={{ height: "86vh" }}
          className="register-project-images-and-text-container"
        >
          <div className="register-page-product-image-container">
            <img width={420} src={image()} alt="" />
          </div>
        </div>
        <div>
          <div className="text-center register-project-related-text-big">
            Manage your inventory and products with EMR
          </div>
          <div className="text-center register-project-related-text-small my-2">
            Everything you need in an easily customizable dashboard.
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductImage;

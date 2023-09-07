import React, { useEffect, useState } from "react";
import { handleAuth } from "../../redux/slices/AuthSlice";
import { useSelector, useDispatch } from "react-redux";
import ProductImage from "./register/ProductImage";
import RegisterForm from "./register/registerForm/RegisterForm";
import LoginForm from "./login/loginForm/LoginForm";
import ResetPassword from "./register/resetPassword/ResetPassword";
import SetNewPassword from "./register/setNewPassword/SetNewPassword";
import VerifyOTP from "./register/verifyOTP/VerifyOTP";
import RegisterInfo from "./register/registerInformation/RegisterInfo";
import Rejected from "./Modals/Rejected";
// import { useAuth0 } from "@auth0/auth0-react";
const Authentication = () => {
  const AuthData = useSelector((state) => state.auth.value);
  const [showModal, setShowModal] = useState(false);
  // const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  useEffect(() => {
    renderStep();
  }, [AuthData]);

  const renderStep = () => {
    switch (AuthData) {
      case "login":
        return <LoginForm />;
      case "register":
        return <RegisterForm />;
      case "resetPassword":
        return <ResetPassword />;
      case "setNewPassword":
        return <SetNewPassword />;
      case "verifyOTP":
        return <VerifyOTP />;
      case "RegisterInfo":
        return <RegisterInfo />;
      default:
        return null;
    }
  };
  const renderImages = () => {
    switch (AuthData) {
      case "login":
        return "https://i.ibb.co/FWpvgsR/8775504-3992746-1.png";
      case "register":
        return "https://i.ibb.co/kgVJjrd/21118312-6428591-1-2.png";
      case "resetPassword":
        return "https://i.ibb.co/4TDSBn2/14206607-5421934-1.png";
      case "setNewPassword":
        return "https://i.ibb.co/mDcrFTR/7140744-3530533-1.png";
      case "verifyOTP":
        return "https://i.ibb.co/NtJkLZd/Asset-1-1.png";
      case "RegisterInfo":
        return "";
      default:
        return null;
    }
  };
  return (
    <div className={showModal == true ? "row modal-background" : "row"}>
      <div>
        <div className="">
          {/* <button onClick={() => setShowModal(!showModal)}>showHide</button> */}
          {showModal && (
            <Rejected
              // url="https://i.ibb.co/BB47nyh/Group.png"
              url="https://i.ibb.co/rwfV18z/18407468-5995355-1-1.png"
              setShowModal={setShowModal}
              // description="Account Creation Unsuccessful! Check your."
              description="Account Creation Successful! Please Provide"
              // description1="internet connection and try again."
              description1="Your Information to Enhance Your Experience."
            />
          )}
        </div>
      </div>
      <div className="col-lg-12">
        <ProductImage image={renderImages} />
      </div>
      <div className="col-lg-12">{renderStep()}</div>
    </div>
  );
};

export default Authentication;

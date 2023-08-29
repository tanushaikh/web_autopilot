import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { GoogleLogin } from "@react-oauth/google";

const Dashboard = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  console.log(isAuthenticated, "auth");
  console.log(user, "user");
  return (
    <div>
      <h1>Dashboard</h1>
      {/* {isAuthenticated && <h5>{user.name}</h5>}
      {isAuthenticated ? (
        <button onClick={() => logout()}>logout</button>
      ) : (
        <button onClick={() => loginWithRedirect()}>login</button>
      )} */}

      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default Dashboard;

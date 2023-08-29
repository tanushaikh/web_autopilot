import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store/Store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import { GoogleOAuthProvider } from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="dev-5578ltypt8ipguee.us.auth0.com"
      clientId="83rm3U8e03McLAt4cyDh6YDg5KlZDBnJ"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    > */}
    <GoogleOAuthProvider clientId="326387197500-19t8eht4e37a66ovi45akl6uo8abm51l.apps.googleusercontent.com">
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
    {/* </Auth0Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

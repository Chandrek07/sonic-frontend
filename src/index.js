import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import {Auth0Provider} from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
        domain="dev-78p1drhzcwqq04vf.us.auth0.com"
        clientId="73vta61yVmquMbqvQOXDl8MdVCft515K"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <App />
    </Auth0Provider>
);

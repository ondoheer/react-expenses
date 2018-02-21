import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import LoginContainer from "../../../containers/LoginContainer";

const ProtectedRedirectToLogin = ({ children }) => {
  const isLoged = localStorage.getItem("access_token");
  console.log(children);
  return isLoged ? children : <Redirect to="/login" />;
};

export default ProtectedRedirectToLogin;

import React from "react";
import HomeContainer from "../../../containers/HomeContainer";

const BlockedIfLogedIn = ({ children }) => {
  const isLoged = localStorage.getItem("access_token");
  return isLoged ? <HomeContainer /> : children;
};

export default BlockedIfLogedIn;

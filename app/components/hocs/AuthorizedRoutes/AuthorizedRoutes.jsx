import React from "react";
import { Redirect, Route } from "react-router-dom";

export const OccultWhenLogedInRoute = (redirectTo, AlternativeComponent) => {
  const isLoged = localStorage.getItem("access_token");
  const renderNext = isLoged ? (
    <Redirect to={`${redirectTo}`} />
  ) : (
    <AlternativeComponent />
  );
  return props => <Route {...props} render={() => renderNext} />;
};

export const ProtectedRoute = (redirectTo, AlternativeComponent) => {
  const isLoged = localStorage.getItem("access_token");
  const renderNext = isLoged ? (
    <AlternativeComponent />
  ) : (
    <Redirect to={`${redirectTo}`} />
  );
  return props => <Route {...props} render={() => renderNext} />;
};

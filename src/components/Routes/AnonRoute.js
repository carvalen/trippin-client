import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function AnonRoute({ component: Component, exact, path, ...props }) {
  const { user } = useAuth();

  if (user?.isLogged) {
    return <Redirect to="/home" />; //donde quieres que redirija al usuario.
  }

  return (
    <Route exact path={path}>
      <Component {...props} />
    </Route>
  );
}

export default AnonRoute;

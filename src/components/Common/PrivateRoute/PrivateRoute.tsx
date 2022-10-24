import * as React from "react";
import { RouteProps, Route } from "react-router-dom";
import { Redirect } from "react-router";

export function PrivateRoute(props: RouteProps) {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));

    if (!isLoggedIn) return <Redirect to="/login" />;

    return <Route {...props} />;
}

import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { Login } from "../components/public/login/Login";
import { Registro } from "../components/public/registro/Registro";
import { DashboardPrivado } from "./DashboardPrivado";
import { DashboardPublic } from "./DashboardPublic";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    const { userLogged } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        component={DashboardPublic}
                        isAuthenticated={userLogged.logged}
                    />

                    <PublicRoute
                        exact
                        path="/new"
                        component={DashboardPublic}
                        isAuthenticated={userLogged.logged}
                    />

                    <PrivateRoute
                        path="/"
                        component={DashboardPrivado}
                        isAuthenticated={userLogged.logged}
                    />
                </Switch>
            </div>
        </Router>
    );
};

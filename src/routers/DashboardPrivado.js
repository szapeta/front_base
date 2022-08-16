import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HomeAdmin } from "../components/private/admin/homeadmin/HomeAdmin";
import FooterAuth from "../components/rol/FooterAuth";
import { NavAuth } from "../components/rol/NavAuth";

export const DashboardPrivado = () => {
  return (
    <>
      <NavAuth />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/homeadmin" component={HomeAdmin} />
          <Redirect to="/homeadmin" />
        </Switch>
      </div>
      <FooterAuth />
    </>
  );
};

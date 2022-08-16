import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HomeAdmin } from "../components/private/admin/homeadmin/HomeAdmin";
import { Calorias } from "../components/private/user/Calorias";
import { Distancia } from "../components/private/user/Distancia";
import { Pulso } from "../components/private/user/Pulso";
import FooterAuth from "../components/rol/FooterAuth";
import { NavAuth } from "../components/rol/NavAuth";

export const DashboardPrivado = () => {
  return (
    <>
      <NavAuth />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/homeadmin" component={HomeAdmin} />
          <Route exact path="/calorias" component={Calorias} />
          <Route exact path="/distancia" component={Distancia} />
          <Route exact path="/pulso" component={Pulso} />
          <Redirect to="/homeadmin" />
        </Switch>
      </div>
      <FooterAuth />
    </>
  );
};

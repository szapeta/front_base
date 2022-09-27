import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HomeAdmin } from "../components/private/admin/homeadmin/HomeAdmin";
import { ClienteABC } from "../components/private/clientes/ClienteABC";
import { Clientes } from "../components/private/clientes/Clientes";
import { PagoABC } from "../components/private/pagos/PagoABC";
import { Pagos } from "../components/private/pagos/Pagos";
import { Prestamos } from "../components/private/prestamos/Prestamos";
import { PrestamosABC } from "../components/private/prestamos/PrestamosABC";
import { Reportes } from "../components/private/user/Reportes";
import FooterAuth from "../components/rol/FooterAuth";
import { NavAuth } from "../components/rol/NavAuth";

export const DashboardPrivado = () => {
  return (
    <>
      <NavAuth />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/homeadmin" component={HomeAdmin} />
          <Route exact path="/clientes" component={Clientes} />
          <Route exact path="/clientesabc" component={ClienteABC} />
          <Route exact path="/prestamos" component={Prestamos} />
          <Route exact path="/prestamoabc" component={PrestamosABC} />
          <Route exact path="/pagos" component={Pagos} />
          <Route exact path="/pagosabc" component={PagoABC} />
          <Route exact path="/reportes" component={Reportes} />
          <Redirect to="/homeadmin" />
        </Switch>
      </div>
      <FooterAuth />
    </>
  );
};

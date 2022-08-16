import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/Types";
import { NavAdmin } from "./NavAdmin";
import { NavClear } from "./NavClear";
import { NavHoteles } from "./NavHoteles";
import { NavTuristas } from "./NavTuristas";
import { NavVehiculos } from "./NavVehiculos";
import { NavVuelos } from "./NavVuelos";
import "./NavAuth.css";

export const NavAuth = () => {
    const {
        userLogged: { name, rol, iduser },
        dispatch,
    } = useContext(AuthContext);

    const history = useHistory();

    const handleLogout = () => {
        history.replace("/home");
        dispatch({
            type: types.logout,
        });
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/homeuser">
            iDoor Ciclying
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="navbar-collapse collapse w-100 order-3 dual-collapse2"
                id="navbarToggleExternalContent"
            >
                {rol === types.rolAdmin ? <NavAdmin /> : <NavClear />}
                {rol === types.rolHotel ? <NavHoteles /> : <NavClear />}
                {rol === types.rolTurista ? <NavTuristas /> : <NavClear />}
                {rol === types.rolVehiculo ? <NavVehiculos /> : <NavClear />}
                {rol === types.rolVuelo ? <NavVuelos /> : <NavClear />}

                <ul className="navbar-nav ml-auto">
                    <button className="nav-item nav-link btn" disabled>
                        ({iduser}) {name}
                    </button>
                    <button className="nav-item nav-link btn" disabled>
                        |
                    </button>
                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Salir
                    </button>
                </ul>
            </div>
        </nav>
    );
};

import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/Types";
import { NavAdmin } from "./NavAdmin";

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
        <nav className="navbar navbar-expand-sm navbar-dark fondo-light-coral">
            <Link className="navbar-brand" to="/homeuser">
            Elys
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
                 <NavAdmin />

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

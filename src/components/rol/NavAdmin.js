import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'

export const NavAdmin = () => {
    return (
        <>
            <div className="navbar-nav">
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link pr-5"
                    exact
                    to="/calorias"
                >
                    Calorias
                </NavLink>
            </div>
            <div className="navbar-nav">
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link pr-5"
                    exact
                    to="/distancia"
                >
                    Distancia
                </NavLink>
            </div>
            <div className="navbar-nav pr-5">
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to="/pulso"
                >
                    Pulso
                </NavLink>
            </div>
        </>
    )
}
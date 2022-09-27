import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../auth/AuthContext";
import { types } from "../../../../types/Types";

export const HomeAdmin = () => {
    const [userFoto, setUserFoto] = useState("");
    const [username, setUsername] = useState("");
    const [userFullName, setUserFullName] = useState("");

    const handleEditar = async (e) => {};

    const {
        userLogged: { user, name, path },
        dispatch,
    } = useContext(AuthContext);

    return (
        <div className="container mt-5">
            <h1>Ultimos agregados</h1>
            <hr />
            <br />
            <br />
            <form autoComplete="off">
                <div className="box">
                    <div>
                        <div className="form-group">
                            <h4>Nombre de los ultimos clientes agregados</h4>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>DPI</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Teléfono</th>
                                    <th>Email</th>
                                    <th>Dirección</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2325251144</td>
                                    <td>Oscar</td>
                                    <td>Lopez</td>
                                    <td>78547454</td>
                                    <td>oscar@gmail.com</td>
                                    <td>1ra. calle 2-2 zona 2</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </form>
            <br />
            <br />

            <hr />
            <form autoComplete="off">
                <div className="box">
                    <div>
                        <div className="form-group">
                            <h4>Pagos proximos a vencer</h4>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>DPI</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Fecha de pago</th>
                                    <th>Monto Q</th>
                                    <th>Saldo Q</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2325251144</td>
                                    <td>Oscar</td>
                                    <td>Lopez</td>
                                    <td>28/09/2022</td>
                                    <td>150</td>
                                    <td>300</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </form>
        </div>
    );
};

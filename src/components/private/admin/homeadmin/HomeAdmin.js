import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../auth/AuthContext";
import { types } from "../../../../types/Types";

export const HomeAdmin = () => {
    const [userFoto, setUserFoto] = useState("");
    const [username, setUsername] = useState("");
    const [userFullName, setUserFullName] = useState("");

    const handleEditar = async (e) => {
        
    };

    const {
        userLogged: { user, name, path },
        dispatch,
    } = useContext(AuthContext);

    return (
        <div className="container mt-5">
            <h1>Datos personales</h1>
            <hr />
            <form autoComplete="off">
                <div className="box">
                    <div>
                        <div className="form-group">
                            <h2>Nombre Completo</h2>
                            <p>{name}</p>
                        </div>
                        <div className="form-group">
                            <h2>username</h2>
                            <p>{user}</p>
                        </div>

                        <button
                            className="btn btn-outline-primary"
                            onClick={handleEditar}
                        >
                            Editar
                        </button>
                    </div>
                    </div>
            </form>
        </div>
    );
};

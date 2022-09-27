import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ClienteItem } from "./ClienteItem";

export const Clientes = () => {
    const [listPersona, setListPersona] = useState([]);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [DPI, setDPI] = useState("");

    useEffect(() => {
        setListPersona([
            {DPI: 2323232525126, nombres: "Sergio", apellidos: "Zapeta", telefono: "99999999", "email":"email@prueba.com" },
            {DPI: 2365874541411, nombres: "nombre2", apellidos: "apellido2", telefono: "22222222", "email":"email@prueba.com" },
        ]);
    }, [])
    
    console.log(listPersona);

    const handleSearch = (e) => {
        console.log("hello");
    };

    return (
        <div>
            <div className=" pb-5 mb-5">
                <h1>Clientes</h1>
                <hr />

                <div className="row">
                    <div className="col-5">
                        <br />
                        <Link
                            className="btn btn-lg btn-pink-sherbet fondo-red-crayola"
                            to={`./clientesabc?user=new`}
                        >
                            Nuevo Cliente
                        </Link>
                        <br /> <br />
                    </div>
                    <div className="col-5 pb-3">
                        <form onSubmit={handleSearch}>
                            <label>Nombres:</label>
                            <input
                                type="text"
                                placeholder="Nombres"
                                className="form-control"
                                name="nombres"
                                autoComplete="off"
                                value={nombre}
                                onChange={(event) => {
                                    setNombre(event.target.value);
                                }}
                            />

                            <label>Apellidos:</label>
                            <input
                                type="text"
                                placeholder="Apellidos"
                                className="form-control"
                                name="apellidos"
                                autoComplete="off"
                                value={apellido}
                                onChange={(event) => {
                                    setApellido(event.target.value);
                                }}
                            />

                            <div className="form-group">
                                <label>DPI:</label>
                                <input
                                    type="text"
                                    placeholder="DPI"
                                    className="form-control"
                                    name="DPI"
                                    autoComplete="off"
                                    value={DPI}
                                    onChange={(event) => {
                                        setDPI(event.target.value);
                                    }}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-lg btn-block btn-block fondo-pink-sherbet btn-lavender-blush"
                            >
                                Buscar
                            </button>
                        </form>
                    </div>
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
                            <th>Es VIP</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listPersona.map((clientes) => (
                            <ClienteItem
                                key={clientes.idcliente}
                                {...clientes}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

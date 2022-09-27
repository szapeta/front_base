import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PrestamosItem } from './PrestamosItem';

export const Prestamos = () => {

  const [listPrestamos, setListPrestamos] = useState([]);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [DPI, setDPI] = useState("");
    
    useEffect(() => {
        setListPrestamos([
            {DPI: "2323232525126", nombres: "Sergio", apellidos: "Zapeta", modalidad: "diario", interes:"5%", monto_concedido: "2500", monto_pagado:"1750", saldo:"750", num_pendientes:"3", fecha_pago:"09/09/2022"},
            {DPI: "2365874541411", nombres: "nombre2", apellidos: "apellido2", modalidad: "quincenal", interes:"7%", monto_concedido: "1000", monto_pagado:"600", saldo:"400", num_pendientes:"4", fecha_pago:"23/09/2022"},
        ]);
    }, [])

    const handleSearch=()=>{

    }

  return (
    <div>
            <div className=" pb-5 mb-5">
                <h1>Prestamos activos</h1>
                <hr />

                <div className="row">
                    <div className="col-5">
                       
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
                                className="btn btn-lg btn-block fondo-pink-sherbet btn-lavender-blush"
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
                            <th>Modalidad</th>
                            <th>Interes</th>
                            <th>Monto concedido</th>
                            <th>Monto pagado</th>
                            <th>Saldo</th>
                            <th>Num. cuotas pendientes</th>
                            <th>Proxima fecha de pago</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {listPrestamos.map((prestamo) => (
                        <PrestamosItem key={prestamo.idLector} {...prestamo} />
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

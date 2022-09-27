import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const PrestamosABC = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [servicio, setServicio] = useState("");
    const [fechaNac, setFechaNac] = useState("");
    const [pathFoto, setPathFoto] = useState("");
    const [telefono, setTelefono] = useState("");
    const [DPI, setDPI] = useState("");
    const [modalidad, setModalidad] = useState("");
    const [interes, setInteres] = useState("");
    const [monto, setMonto] = useState("");

    const handleGuardar = ()=>{
        
    }

  return (
    <div>
            <div className="pb-5 mb-5">
                <Link className="btn btn-lg btn-pink-sherbet fondo-red-crayola" to={`./clientes`}>
                    Regresar
                </Link>
                <hr />
                <h1>Nuevo Prestamo</h1>
                <form>
                <div class="form-group">
                        <label>DPI:</label>
                        <input
                            type="text"
                            class="form-control"
                            id="DPI"
                            placeholder="Ingrese su DPI"
                            onChange={(event) => {
                                setDPI(event.target.value);
                            }}
                        />
                    </div>
                    <div class="form-group">
                        <label>Nombre:</label>
                        <input
                            type="text"
                            class="form-control"
                            id="nombre"
                            placeholder="Ingrese su nombre"
                            onChange={(event) => {
                                setNombre(event.target.value);
                            }}
                        />
                    </div>
                    <div class="form-group">
                        <label>Apellido:</label>
                        <input
                            type="text"
                            class="form-control"
                            id="apellido"
                            placeholder="Ingrese su Apellido"
                            onChange={(event) => {
                                setApellido(event.target.value);
                            }}
                        />
                    </div>
                   
                    <div class="form-group">
                        <label>Modalidad:</label>
                        <select
                            id="modalidad"
                            class="form-control"
                            onChange={(event) => {
                                setModalidad(event.target.value);
                            }}
                        >
                            <option value="0" selected>
                                -Elija una modalidad:-
                            </option>
                            <option value="1">
                                Diario
                            </option>
                            <option value="2">
                                Quincenal
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Interes:</label>
                        <input
                            type="text"
                            class="form-control"
                            id="interes"
                            placeholder="Ingrese el interes que se aplicara al monto"
                            onChange={(event) => {
                                setInteres(event.target.value);
                            }}
                        />
                    </div>
                    <div class="form-group">
                        <label>Monto a otorgar:</label>
                        <input
                            type="text"
                            class="form-control"
                            id="monto"
                            placeholder="Cantidad neta a entregar"
                            onChange={(event) => {
                                setMonto(event.target.value);
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        class="btn btn-lg btn-block fondo-pink-sherbet btn-lavender-blush"
                        onClick={handleGuardar}
                    >
                        Guardar
                    </button>
                </form>
            </div>
        </div>
  )
}

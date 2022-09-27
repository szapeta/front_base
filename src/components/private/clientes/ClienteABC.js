import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const ClienteABC = () => {

    const search = useLocation().search;
    const isedit = new URLSearchParams(search).get("edit");

    const [titulo, setTitulo] = useState("Cliente nuevo");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [DPI, setDPI] = useState("");
    const [telefono, setTelefono] = useState("");
    const [fechaNac, setFechaNac] = useState("");

    useEffect(() => {

        if (isedit == "1"){
            setTitulo("Editar Cliente")
        }
    }, [])
    
    

    const handleGuardar =()=>{
        console.log("abc")
    }

  return (
    <div className="pb-5 mb-5">
        <Link className="btn btn-lg btn-pink-sherbet fondo-red-crayola" to={`./clientes`}>
            Regresar
        </Link>
        <hr />
        <h1>{titulo}</h1>
        <form>
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
                <label>Telefono:</label>
                <input
                    type="text"
                    class="form-control"
                    id="telefono"
                    placeholder="Ingrese su Telefono"
                    onChange={(event) => {
                        setTelefono(event.target.value);
                    }}
                />
            </div>
            <div class="form-group">
                <label>Fecha Nacimiento:</label>
                <input
                    type="date"
                    class="form-control"
                    id="fechaNac"
                    placeholder=""
                    onChange={(event) => {
                        setFechaNac(event.target.value);
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
  )
}

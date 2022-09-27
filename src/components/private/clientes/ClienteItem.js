import React from "react";
import { useHistory } from 'react-router-dom'

export const ClienteItem = ({DPI, nombres, apellidos, telefono, email}) => {

    let history = useHistory();

    const handleEditar = () => {
        history.push(`/clientesabc?edit=1`)
    };

    const gotoprestamo = () => {
        history.push(`/prestamoabc`)
    };

    return (


        <tr>
            <td>{DPI}</td>
            <td>{nombres}</td>
            <td>{apellidos}</td>
            <td>
                {telefono.length > 0 ? (
                    <a
                        className="btn btn-outline-success"
                        href={"https://wa.me/502" + telefono}
                    >
                        {telefono}
                    </a>
                ) : (
                    <></>
                )}
            </td>
            <td>{email}</td>
            <td>{"1" == "1" ? "Activo" : "Retirado"}</td>
            <td>--</td>
            <td>
                <button
                    className="btn btn-outline-primary"
                    onClick={handleEditar}
                >
                    Editar
                </button>
|
                <button
                    className="btn btn-outline-primary"
                    onClick={gotoprestamo}
                >
                    Crear prestamo
                </button>
            </td>
        </tr>
    );
};

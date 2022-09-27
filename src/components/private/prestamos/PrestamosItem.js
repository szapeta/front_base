import React from 'react'
import { useHistory } from 'react-router-dom'

export const PrestamosItem = ({DPI, nombres, apellidos, modalidad, interes, monto_concedido, monto_pagado, saldo, num_pendientes, fecha_pago}) => {

    let history = useHistory();

    const gotopagos = (e) => {
        console.log("hello");
        history.push(`/pagos`)
    };

  return (
    <tr>
            <td>{DPI}</td>
            <td>{nombres}</td>
            <td>{apellidos}</td>
            <td>{modalidad}</td>
            <td>{interes}</td>
            <td>{monto_concedido}</td>
            <td>{monto_pagado}</td>
            <td>{saldo}</td>
            <td>{num_pendientes}</td>
            <td>
                {fecha_pago}
            </td>
            <td>
                <button
                    className="btn btn-outline-primary"
                    onClick={gotopagos}
                >
                    Ver pagos
                </button>
            </td>
        </tr>
  )
}

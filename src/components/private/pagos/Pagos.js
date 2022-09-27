import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PagoItem } from './PagoItem';

export const Pagos = () => {
    const [listPagos, setListPagos] = useState([]);

    useEffect(() => {
        setListPagos([
            {idpago: 1, fecha_pago: "01/03/2022", referencia: "A1-01", monto: "250.00" },
            {idpago: 2, fecha_pago: "01/04/2022", referencia: "A1-023", monto: "250.00" },
            {idpago: 3, fecha_pago: "01/05/2022", referencia: "A1-5", monto: "250.00" },
            {idpago: 4, fecha_pago: "01/06/2022", referencia: "A1-44", monto: "250.00" },
            {idpago: 5, fecha_pago: "01/07/2022", referencia: "A1-a2", monto: "250.00" },
            {idpago: 6, fecha_pago: "01/08/2022", referencia: "A1-33", monto: "250.00" },
            {idpago: 7, fecha_pago: "01/09/2022", referencia: "A1-05", monto: "250.00" },
        ]);
    }, [])
  return (
    <div>
            <div className=" pb-5 mb-5">
                <h1>Pagos realizados para 4449-1</h1>
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th>idPago</th>
                            <th>Fecha de pago</th>
                            <th>Referencia o boleta</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                    {listPagos.map((prestamo) => (
                        <PagoItem key={prestamo.idLector} {...prestamo} />
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

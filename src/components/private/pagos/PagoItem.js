import React from 'react'

export const PagoItem = ({idpago, fecha_pago, referencia, monto }) => {
  return (
    <tr>
    <td>{idpago}</td>
    <td>{fecha_pago}</td>
    <td>{referencia}</td>
    <td>{monto}</td>
    
</tr>
  )
}

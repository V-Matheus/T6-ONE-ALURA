import React from 'react'
import './CampoTexto.css'

export const CampoTexto = ({label, placeholder, obrigatorio, valor, aoAlterado}) => {


  const aoDigitar = (evento) => {
    aoAlterado(evento.target.value)
  }

  return (
    <div className='campo-texto'>
      <label htmlFor="">{label}</label>
      <input value={valor} onChange={aoDigitar} required={obrigatorio} type="text" placeholder={placeholder} />
    </div>
  )
}

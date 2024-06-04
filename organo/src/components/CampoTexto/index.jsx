import React from 'react'
import './CampoTexto.css'

export const CampoTexto = ({label, placeholder, obrigatorio}) => {
  return (
    <div className='campo-texto'>
      <label htmlFor="">{label}</label>
      <input required={obrigatorio} type="text" placeholder={placeholder} />
    </div>
  )
}

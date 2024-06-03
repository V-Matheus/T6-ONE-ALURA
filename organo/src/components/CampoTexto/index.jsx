import React from 'react'
import './CampoTexto.css'

export const CampoTexto = ({label, placeholder}) => {
  return (
    <div className='campo-texto'>
      <label htmlFor="">{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  )
}

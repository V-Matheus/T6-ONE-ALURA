import React from 'react';
import './ListaSuspensa.css';

export const ListaSuspensa = ({ label, itens, obrigatorio, valor, aoAlterado }) => {
  return (
    <div className='listaSuspensa'>
      <label>{label}</label>
      <select onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} value={valor}>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};


import React from 'react';
import './ListaSuspensa.css';

export const ListaSuspensa = ({ label, itens, obrigatorio }) => {
  return (
    <div className='listaSuspensa'>
      <label>{label}</label>
      <select required={obrigatorio}>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};


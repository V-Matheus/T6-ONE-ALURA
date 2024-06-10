import React from 'react';
import './Campo.css';

export const Campo = ({
  type = 'text',
  label,
  placeholder,
  obrigatorio,
  valor,
  aoAlterado,
}) => {
  const aoDigitar = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label htmlFor="">{label}</label>
      <input
        value={valor}
        onChange={aoDigitar}
        required={obrigatorio}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

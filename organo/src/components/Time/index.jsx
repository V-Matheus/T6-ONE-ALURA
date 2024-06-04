import React from 'react';
import { Colaborador } from '../Colaborador';
import './Time.css';

export const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
  return (
    <section style={{ backgroundColor: corSecundaria }} className="time">
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => (
          <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  );
};

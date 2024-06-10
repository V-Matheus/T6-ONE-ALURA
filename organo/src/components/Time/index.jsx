import React from 'react';
import { Colaborador } from '../Colaborador';
import './Time.css';

export const Time = ({ nome, corPrimaria, corSecundaria, colaboradores, aoDeletar }) => {
  return (
    colaboradores.length > 0 && (
      <section style={{ backgroundColor: corSecundaria }} className="time">
        <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => {
            return (
              <Colaborador
                corDeFundo={corPrimaria}
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                aoDeletar={aoDeletar}
              />
            )
          })}
        </div>
      </section>
    )
  );
};

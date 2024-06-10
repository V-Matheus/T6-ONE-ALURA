import React from 'react';
import { Colaborador } from '../Colaborador';
import './Time.css';

export const Time = ({ nome, corPrimaria, corSecundaria, colaboradores, aoDeletar, mudarCor }) => {
  return (
    colaboradores.length > 0 && (
      <section style={{ backgroundColor: corSecundaria }} className="time">
        <input onChange={evento => mudarCor(evento.target.value, nome)} value={corSecundaria} type="color" className='input-cor'/>
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

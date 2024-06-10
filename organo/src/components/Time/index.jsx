import React from 'react';
import { Colaborador } from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

export const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
  return (
    colaboradores.length > 0 && (
      <section
        style={{
          backgroundImage: 'url(../../imagens/fundo.png)',
          backgroundColor: hexToRgba(time.cor, '0.6'),
        }}
        className="time"
      >
        <input
          onChange={(evento) => mudarCor(evento.target.value, time.id)}
          value={time.cor}
          type="color"
          className="input-cor"
        />
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => {
            return (
              <Colaborador
                corDeFundo={time.cor}
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

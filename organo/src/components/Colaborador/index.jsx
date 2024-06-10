import React from 'react';
import './Colaborador.css';

export const Colaborador = ({ nome, cargo, imagem, corDeFundo, aoDeletar }) => {
  return (
    <div className="colaborador">
      <div className="deletar" onClick={aoDeletar}>Deletar</div>
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

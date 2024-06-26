import React from 'react';
import './Colaborador.css';
import { AiFillCloseCircle } from 'react-icons/ai';

export const Colaborador = ({colaborador, corDeFundo, aoDeletar }) => {

  return (
    <div className="colaborador">
      <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(colaborador.nome)} />

      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
      </div>
    </div>
  );
};

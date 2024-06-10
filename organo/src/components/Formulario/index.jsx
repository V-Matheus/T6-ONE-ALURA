import React, { useState } from 'react';
import { CampoTexto } from '../CampoTexto';
import { ListaSuspensa } from '../ListaSuspensa';
import './Formulario.css';
import { Botao } from '../Botao';

export const Formulario = ({ aoColaboradorCadastrado, times, cadastrarTime }) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('');

  const aoSalvar = (event) => {
    event.preventDefault();
    aoColaboradorCadastrado({ nome, cargo, imagem, time});
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          obrigatorio
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />

        <ListaSuspensa
          obrigatorio
          label="Time"
          itens={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>

      <form onSubmit={(evento) => {
        evento.preventDefault()
        cadastrarTime({nome: nomeTime, cor: corTime})
      }}>
        <h2>Preencha os dados para criar um novo time</h2>
        <CampoTexto
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <CampoTexto
          obrigatorio
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao>Criar um novo time</Botao>
      </form>
    </section>
  );
};

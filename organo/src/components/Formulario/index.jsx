import React from 'react';
import { CampoTexto } from '../CampoTexto';
import { ListaSuspensa } from '../ListaSuspensa';
import './Formulario.css';

export const Formulario = () => {

  const itens = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  return (
    <section className="formulario">
      <form action="">
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa label='Time' itens={itens}/>
      </form>
    </section>
  );
};

import { buscarVideo } from './conectaApi.js';
import { constroiCard } from './mostrarVideos.js';

async function buscarVideos(evento) {
  evento.preventDefault();

  const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
  const busca = await buscarVideo(dadosDePesquisa);

  const lista = document.querySelector('[data-lista]');

  busca.forEach((elemento) =>
    lista.appendChild(
      constroiCard(
        elemento.titulo,
        elemento.descricao,
        elemento.url,
        elemento.imagem,
      ),
    ),
  );
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');
botaoDePesquisa.addEventListener('click', (evento) => buscarVideos(evento));

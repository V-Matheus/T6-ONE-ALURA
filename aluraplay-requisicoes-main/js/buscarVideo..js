import { buscarVideo } from './conectaApi.js';

async function buscarVideos(evento) {
  evento.preventDefault();

  const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
  const busca = await buscarVideo(dadosDePesquisa);
  console.log(busca);
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');
console.log(botaoDePesquisa);

botaoDePesquisa.addEventListener('click', (evento) => buscarVideos(evento));

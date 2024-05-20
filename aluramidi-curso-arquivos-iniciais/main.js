function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const litaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < litaDeTeclas.length; contador++) {
  const tecla = litaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`

  tecla.onclick = () => tocaSom(idAudio);

  tecla.onkeydown = (evento) => {
    if(evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa')
    }
  }
  tecla.onkeyup = () => tecla.classList.remove('ativa')
}

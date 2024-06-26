const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const descansoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
const startPauseBt = document.querySelector('#start-pause');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const tempoNaTela = document.querySelector('#timer');

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

focoBt.addEventListener('click', () => {
  tempoDecorridoEmSegundos = 1500;
  alterandoContexto('foco');
  focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
  tempoDecorridoEmSegundos = 300;

  alterandoContexto('descanso-curto');
  curtoBt.classList.add('active');
});

descansoBt.addEventListener('click', () => {
  tempoDecorridoEmSegundos = 900;

  alterandoContexto('descanso-longo');
  descansoBt.classList.add('active');
});

function alterandoContexto(contexto) {
  mostrarTempo()
  botoes.forEach((contexto) => {
    contexto.classList.remove('active');
  });
  html.setAttribute('data-contexto', contexto);
  banner.setAttribute('src', `./imagens/${contexto}.png`);
  switch (contexto) {
    case 'foco':
      titulo.innerHTML = `
        Otimize sua produtividade, <br>
         <strong class="app__title-strong">mergulhe no que importa.</strong>
      `;
      break;
    case 'descanso-curto':
      titulo.innerHTML = `
        Que tal dar uma respirada?<br>
         <strong class="app__title-strong">Faça uma pausa curta!</strong>
      `;
      break;
    case 'descanso-longo':
      titulo.innerHTML = `
        Hora de voltar a superfície, <br>
         <strong class="app__title-strong">Faça uma pausa longa!</strong>
      `;
      break;
    default:
      break;
  }
}

const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
    zerar();
    alert('Tempo finalizado');
    return;
  }
  tempoDecorridoEmSegundos--;
  mostrarTempo();
};

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
  if (intervaloId) {
    zerar();
    return;
  }
  intervaloId = setInterval(contagemRegressiva, 1000);
  iniciarOuPausarBt.textContent = 'Pausar';
}

function zerar() {
  clearInterval(intervaloId);
  iniciarOuPausarBt.textContent = 'Começar';
  intervaloId = null;
}

function mostrarTempo() {
  const tempo = new Date(tempoDecorridoEmSegundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {
    minute: '2-digit',
    second: '2-digit',
  });
  tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();

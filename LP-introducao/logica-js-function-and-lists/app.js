let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
exibirTextoNaTela('h1', 'Jogo do Número Secreto');

function verificarChute() {
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    exibirTextoNaTela('p', 'Você acetou o número secreto');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior');
    }
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

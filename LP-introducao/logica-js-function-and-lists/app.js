let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function verificarChute() {
  console.log(numeroSecreto);
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

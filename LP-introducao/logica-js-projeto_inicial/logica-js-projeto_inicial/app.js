alert('Boas Vindas ao jogo do número secreto')
let numeroSecreto = 29
console.log(numeroSecreto);
let chute = prompt('Digite um número entre 1 e 30')

// se o chute for igual ao número secreto
if(numeroSecreto == chute) {
  alert('Acertou')
} else {
  alert('Você errou')
} 
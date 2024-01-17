alert('Boas Vindas ao jogo do número secreto')
let numeroSecreto = 5
console.log(numeroSecreto);
let chute = prompt('Digite um número entre 1 e 30')

// se o chute for igual ao número secreto
if(numeroSecreto == chute) {
  alert(`Isso ai ! Você descobriu o número secreto (${numeroSecreto})`)
} else {
  alert('Você errou')
} 
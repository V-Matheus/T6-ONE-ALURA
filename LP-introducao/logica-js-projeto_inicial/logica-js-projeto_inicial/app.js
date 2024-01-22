alert('Boas Vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute

// enquanto
while (chute != numeroSecreto) {
  chute = prompt('Digite um número entre 1 e 30');
  // se o chute for igual ao número secreto
  if (chute == numeroSecreto) {
    alert(`Isso ai ! Você descobriu o número secreto (${numeroSecreto})`);
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
  }
}

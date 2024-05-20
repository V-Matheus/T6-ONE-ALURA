function tocaSom() {
  document.querySelector('#som_tecla_pom').play();
}

const litaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < litaDeTeclas.length) {
  litaDeTeclas[contador].onclick = tocaSom
  contador++;
}

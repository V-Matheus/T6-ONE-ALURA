let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
  let livrossOrdenados = livros.sort((a, b) => a.preco - b.preco)
  exibirOsLivrosNaTela(livrossOrdenados)
} 
let livros = []
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivroDaApi()

async function getBuscarLivroDaApi() {
  const res = await fetch(endpointDaApi)
  livros = await res.json()
  console.log(livros);
}
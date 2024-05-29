export async function listaVideos() {
  const conexao = await fetch('http://localhost:3000/videos')
  const conexaoConvertida = await conexao.json()
  
  console.log(conexaoConvertida);
  return conexaoConvertida
}

export async function criaVideo(titulo, descricao, url, imagem) {
  const conexao = await fetch('http://localhost:3000/videos', {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      titulo,
      descricao: `${descricao} mil visualizações`,
      url,
      imagem,
    })
  })

  const conexaoConvertida = await conexao.json()
  return conexaoConvertida
}
const texto = document.getElementById('texto')

function mostrarResultado() {
  NEncontrado = document.querySelector('.nao-encontrado')
  Encontrado = document.querySelector('.encontrado')
  
  if(textoOriginal !== '') {
    const resultado = document.getElementById('resultado_texto')

    NEncontrado.classList.add('hidden')
    Encontrado.classList.remove('hidden')

    resultado.innerHTML = texto.value
    
  } else {
    
    NEncontrado.classList.remove('hidden')
    Encontrado.classList.add('hidden')
  }
}

function criptografar() {
  textoOriginal = texto.value
  let textoCriptografado = ''
  
  for (let i = 0; i < textoOriginal.length; i++) {
    const charCode = textoOriginal.charCodeAt(i);
    textoCriptografado += charCode + ' ';
  }

  mostrarResultado()
}



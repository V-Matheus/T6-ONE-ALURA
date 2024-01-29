const texto = document.getElementById('texto')
const resultado = document.getElementById('resultado texto')

function mostrarResultado() {
  NEncontrado = document.querySelector('.nao-encontrado')
  Encontrado = document.querySelector('.encontrado')
  
  if(textoOriginal !== '') {
    NEncontrado.classList.add('hidden')
    Encontrado.classList.remove('hidden')
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



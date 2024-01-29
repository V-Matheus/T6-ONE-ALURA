const texto = document.getElementById('texto')

function mostrarResultado(str) {
  NEncontrado = document.querySelector('.nao-encontrado')
  Encontrado = document.querySelector('.encontrado')
  
  if(textoOriginal !== '') {
    const resultado = document.getElementById('resultado_texto')

    NEncontrado.classList.add('hidden')
    Encontrado.classList.remove('hidden')

    resultado.innerHTML = str
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

  mostrarResultado(textoCriptografado)
}

function descriptografar() {
  textoCriptografado = texto.value
  const codigos = textoCriptografado.trim().split(' ');

  let textoOriginal = '';

  for (const codigo of codigos) {
    const char = String.fromCharCode(parseInt(codigo, 10));
    textoOriginal += char;
  }

  mostrarResultado(textoOriginal)
}





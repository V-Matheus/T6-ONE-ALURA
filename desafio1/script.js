const texto = document.getElementById('texto')

console.log(typeof texto.value);

function criptografar() {
  textoOriginal = texto.value
  let textoCriptografado = ''
  
  for (let i = 0; i < textoOriginal.length; i++) {
    const charCode = textoOriginal.charCodeAt(i);
    textoCriptografado += charCode + ' ';
  }
}

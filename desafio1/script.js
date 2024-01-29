const texto = document.getElementById('texto');
const resultado = document.getElementById('resultado_texto');

function mostrarResultado(str) {
  NEncontrado = document.querySelector('.nao-encontrado');
  Encontrado = document.querySelector('.encontrado');

  if (textoOriginal !== '') {
    NEncontrado.classList.add('hidden');
    Encontrado.classList.remove('hidden');

    resultado.innerHTML = str;
  } else {
    NEncontrado.classList.remove('hidden');
    Encontrado.classList.add('hidden');
  }
}

function criptografar() {
  textoOriginal = texto.value;
  let textoCriptografado = '';

  for (let i = 0; i < textoOriginal.length; i++) {
    const charCode = textoOriginal.charCodeAt(i);
    textoCriptografado += charCode + ' ';
  }

  mostrarResultado(textoCriptografado);
}

function descriptografar() {
  textoCriptografado = texto.value;
  const codigos = textoCriptografado.trim().split(' ');

  let textoOriginal = '';

  for (const codigo of codigos) {
    const char = String.fromCharCode(parseInt(codigo, 10));
    textoOriginal += char;
  }

  mostrarResultado(textoOriginal);
}

function copy() {
  let textareaTemporaria = document.createElement('textarea');
  textareaTemporaria.value = resultado.innerText;

  document.body.appendChild(textareaTemporaria);

  textareaTemporaria.select();
  textareaTemporaria.setSelectionRange(0, 999999);

  try {
    document.execCommand('copy');
    alert('O texto foi copiado para a área de transferência');
  } catch (err) {
    console.error('Erro ao copiar texto para a área de transferência', err);
  } finally {
    document.body.removeChild(textareaTemporaria);
  }
}




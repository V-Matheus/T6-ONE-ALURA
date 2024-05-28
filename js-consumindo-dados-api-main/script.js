async function buscaEndeco(cep) {
  try {
    const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const consultaCepConvertida = await consultaCep.json();
    if (consultaCepConvertida.erro) throw Error('Cep não existe');

    const cidade = document.getElementById('cidade');
    const logradouro = document.getElementById('endereco');
    const estado = document.getElementById('estado');
    
    cidade.value = consultaCepConvertida.localidade
    logradouro.value = consultaCepConvertida.logradouro
    estado.value = consultaCepConvertida.uf
    
    console.log(consultaCepConvertida);
  } catch (err) {
    console.log(err);
  }
}

const cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndeco(cep.value));

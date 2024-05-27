async function buscaEndeco() {
  try {
    const consultaCep = await fetch('https://viacep.com.br/ws/01001000/json');
    const consultaCepConvertida = await consultaCep.json();
    if(consultaCepConvertida.erro) throw Error('Cep não existe')
    console.log(consultaCepConvertida);
  } catch (err) {
    console.log(err);
  }
}

buscaEndeco();

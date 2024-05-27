async function buscaEndeco(cep) {
  try {
  const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const consultaCepConvertida = await consultaCep.json();
    if(consultaCepConvertida.erro) throw Error('Cep não existe')
    console.log(consultaCepConvertida);
  } catch (err) {
    console.log(err);
  }
}


const ceps = ['01001000', '01001001']
const conjuntoCeps = ceps.map(valores => buscaEndeco(valores))
Promise.all(conjuntoCeps).then(response => console.log(response))

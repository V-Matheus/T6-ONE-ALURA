export default function ehMaiorDeIdade(campo) {
  const dataNascimento = new Date(campo.value)
  validaIdade(dataNascimento)
}

function validaIdade(data) {
  const dataAtual = new Date()
  const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCFullMounth(), data.getUTCFullDate())

  return dataAtual >= dataMais18
}
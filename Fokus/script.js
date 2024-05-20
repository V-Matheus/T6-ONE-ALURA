const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const descansoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')

focoBt.addEventListener('click', () => {
  alterandoContexto('foco')
})

curtoBt.addEventListener('click', () => {
  alterandoContexto('descanso-curto')
})

descansoBt.addEventListener('click', () => {
  alterandoContexto('descanso-longo')
})

function alterandoContexto(contexto) {
  html.setAttribute('data-contexto', contexto)
  banner.setAttribute('src', `./imagens/${contexto}.png`)
}
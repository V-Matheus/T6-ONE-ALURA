const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const descansoBt = document.querySelector('.app__card-button--longo')

focoBt.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'foco')
})

curtoBt.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'descanso-curto')
})

descansoBt.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'descanso-longo')
})
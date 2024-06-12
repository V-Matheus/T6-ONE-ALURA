import React from 'react'
import styles from './BotaoPrincipal.module.css'

export const BotaoPrincipal = ({children, tamanho}) => {
  return (
    <button className={`${styles.botaoPrincipal} ${styles[tamanho]}`}>{children}</button>
  )
}

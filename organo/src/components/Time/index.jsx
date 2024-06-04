import React from 'react'
import './Time.css'

export const Time = ({nome, corPrimaria, corSecundaria}) => {
  return (
    <section style={{backgroundColor: corSecundaria, }} className='time'>
        <h3 style={{borderColor: corPrimaria}}>{nome}</h3>
    </section>
  )
}

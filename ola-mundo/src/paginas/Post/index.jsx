import React from 'react'
import styles from './Post.module.css'
import { useParams } from 'react-router-dom'

export const Post = () => {

  const parametros = useParams()

  return (
    <div>Post {parametros.id}</div>
  )
}

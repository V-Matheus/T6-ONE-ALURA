import React from 'react';
import styles from './Post.module.css';
import { Link } from 'react-router-dom';
import { BotaoPrincipal } from '../BotaoPrincipal';

export const PostCard = ({ post }) => {
  const imagePath = require(`../../assets/posts/${post.id}/capa.png`);

  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={imagePath}
          alt="Imagem de capa do post"
        />

        <h2 className={styles.titulo}>{post.titulo}</h2>

        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
  );
};

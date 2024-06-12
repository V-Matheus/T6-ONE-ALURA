import React from 'react';
import './Post.css';
import { useParams } from 'react-router-dom';
import posts from '../../assets/json/posts.json';
import { PostModelo } from '../../components/PostModelo';
import ReactMarkdown from 'react-markdown';

export const Post = () => {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  const imagePath = require(`../../assets/posts/${post.id}/capa.png`);

  return (
    <PostModelo fotoCapa={imagePath} titulo={post.titulo}>
      <div className='post-markdown-container'>
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </PostModelo>
  );
};

import React from 'react';
import './Post.css';
import { Route, Routes, useParams } from 'react-router-dom';
import posts from '../../assets/json/posts.json';
import { PostModelo } from '../../components/PostModelo';
import ReactMarkdown from 'react-markdown';
import { NaoEncontrada } from '../NaoEncontrada';
import { PadginaPadrao } from '../../components/PaginaPadrao';

export const Post = () => {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }

  const imagePath = require(`../../assets/posts/${post.id}/capa.png`);

  return (
    <Routes>
      <Route path="*" element={<PadginaPadrao />}>
        <Route
          index
          element={
            <PostModelo fotoCapa={imagePath} titulo={post.titulo}>
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
};

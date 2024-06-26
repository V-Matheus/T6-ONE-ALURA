import React from 'react';
import styles from './Inicio.module.css';
import posts from '../../assets/json/posts.json';
import { PostCard } from '../../components/PostCard';

export const Inicio = () => {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

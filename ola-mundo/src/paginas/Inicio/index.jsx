import React from 'react';
import styles from './Inicio.module.css';
import { Banner } from '../../components/Banner';
import posts from '../../assets/json/posts.json';
import { Post } from '../../components/Post';

export const Inicio = () => {
  return (
    <main>
      <Banner />
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
};

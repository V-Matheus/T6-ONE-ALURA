import React from 'react';
import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <header>
      <nav className={styles.navegacao}>
        <Link to="/" className={styles.link}>
          Início
        </Link>
        <Link to="/sobremim" className={styles.link}>
          Sobre Mim
        </Link>
      </nav>
    </header>
  );
};

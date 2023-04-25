import React from 'react';
import { navLinks } from '../constants';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        {navLinks.map(({ id, title }) => (
          <li key={id}>
            <a href={`#{title}`}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

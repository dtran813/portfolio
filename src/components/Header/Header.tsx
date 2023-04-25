import React from 'react';
import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar';

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <a href="">LOGO</a>
      </div>
      <Navbar />
    </header>
  );
}

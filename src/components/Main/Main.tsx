import React from 'react';
import styles from './Main.module.css';
import { name } from '../constants';

export default function Main() {
  return (
    <main className={styles.mainWrapper}>
      <div className={styles.nameWrapper}>
        <h1 className={styles.name}>
          {name.split('').map(letter => (
            <span className={styles.letter}>{letter}</span>
          ))}
        </h1>
      </div>
    </main>
  );
}

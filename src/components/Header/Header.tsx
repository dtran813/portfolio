import styles from './Header.module.css';
import { motion } from 'framer-motion';

import { Navbar, Hero } from '../index';

export default function Header() {
  return (
    <div className={styles.background}>
      <motion.header className={styles.headerWrapper}>
        <Navbar />
        <Hero />
      </motion.header>
    </div>
  );
}

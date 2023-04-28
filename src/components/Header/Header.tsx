import styles from './Header.module.css';
import { motion } from 'framer-motion';

import { Navbar, Hero } from '../index';

export default function Header() {
  return (
    <motion.header className={styles.headerWrapper}>
      <Navbar />
      <Hero />
    </motion.header>
  );
}

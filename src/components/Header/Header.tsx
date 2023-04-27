import styles from './Header.module.css';
import { motion } from 'framer-motion';

import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';

export default function Header() {
  return (
    <motion.header className={styles.headerWrapper}>
      <Navbar />
      <Hero />
    </motion.header>
  );
}

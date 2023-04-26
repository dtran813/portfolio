import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import { Hero } from '..';

export default function Header() {
  return (
    <motion.header className={styles.headerWrapper}>
      <Navbar />

      <Hero />
    </motion.header>
  );
}

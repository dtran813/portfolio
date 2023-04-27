// import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const style = {
  margin: '0 auto',
  maxWidth: '80rem', // 1280px
  height: '100vh',
  padding: '1.5rem 2.5rem',
};

const SectionWrapper = (Component: React.ElementType, idName: string) =>
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer()}
        style={style}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;

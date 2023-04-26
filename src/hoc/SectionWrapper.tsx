// import React from 'react';
import { motion } from 'framer-motion';

const style = {
  height: '100vh',
  padding: '0 4rem',
};

const SectionWrapper = (Component: React.ElementType, idName: string) =>
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
